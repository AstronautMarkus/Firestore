import { Component } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
})
export class AdminPage {
  showToast = false;

  constructor(
    private auth: Auth,
    private router: Router,
    private toastController: ToastController
  ) {}

  async logout() {
    try {
      await signOut(this.auth);
      this.router.navigate(['/home']);
      const toast = await this.toastController.create({
        message: 'Sesión cerrada exitosamente',
        duration: 2000,
        color: 'success'
      });
      toast.present();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      const toast = await this.toastController.create({
        message: `Error al cerrar sesión: ` + (error as any).message,
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }
}
