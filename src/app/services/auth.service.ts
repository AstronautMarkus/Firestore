
import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userEmail: string | null = null;

  constructor(
    private auth: Auth,
    private router: Router,
    private toastController: ToastController
  ) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.userEmail = user.email;
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

  async logout() {
    try {
      await signOut(this.auth);
      this.router.navigate(['/home']);
      const toast = await this.toastController.create({
        message: 'Sesión cerrada exitosamente',
        duration: 2000,
        color: 'success',
      });
      toast.present();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      const toast = await this.toastController.create({
        message: `Error al cerrar sesión: ` + (error as any).message,
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    }
  }
}