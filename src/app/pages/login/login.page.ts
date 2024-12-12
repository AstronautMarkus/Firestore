import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController, NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private auth: Auth, private router: Router, private toastController: ToastController, private navCtrl: NavController, private loadingController: LoadingController) {}

  async login() {
    const loading = await this.loadingController.create({
      message: 'Iniciando sesión... >:)',
    });
    await loading.present();

    try {
      const user = await signInWithEmailAndPassword(this.auth, this.email, this.password);
      console.log('Usuario autenticado:', user);
      this.router.navigate(['/admin']);
      const toast = await this.toastController.create({
        message: '¡Inicio de sesión exitoso!',
        duration: 2000,
        color: 'success'
      });
      toast.present();
    } catch (error) {
      console.error('Error en inicio de sesión:', error);
      const toast = await this.toastController.create({
        message: `Error en inicio de sesión: `+ (error as any).message,
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    } finally {
      loading.dismiss();
    }
  }

  navigateToBaseRoute() {
    this.navCtrl.navigateRoot('/home');
  }
}
