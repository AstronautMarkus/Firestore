import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  showSuccessToast: boolean = false;
  showErrorToast: boolean = false;
  errorMessage: string = '';

  constructor(private auth: Auth, private router: Router, private toastController: ToastController, private navCtrl: NavController) {}

  async register() {
    try {
      const user = await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      console.log('Usuario registrado:', user);
      this.showSuccessToast = true;
      const toast = await this.toastController.create({
        message: 'Registration successful!',
        duration: 2000,
        color: 'success'
      });
      toast.present();
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
    } catch (error) {
      console.error('Error en registro:', error);
      this.errorMessage = 'Registration failed: ' + (error as any).message;
      this.showErrorToast = true;
      const toast = await this.toastController.create({
        message: `Registration failed: ` + (error as any).message,
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }

  navigateToBaseRoute() {
    this.navCtrl.navigateRoot('/');
  }
}
