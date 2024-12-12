import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
})
export class AdminPage {
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  get userEmail() {
    return this.authService.userEmail;
  }

  async logout() {
    const loading = await this.loadingController.create({
      message: 'Cerrando sesión... >:(',
    });
    await loading.present();

    try {
      await this.authService.logout();
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    } finally {
      loading.dismiss();
    }
  }

  navigateToCrear(type: string) {
    const url = `/admin/${type}`;
    this.router.navigate([url]);
  }

  navigateToListar(type: string) {
    const url = `/admin/${type}`;
    this.router.navigate([url]);
  }
}
