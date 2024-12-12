import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
})
export class AdminPage {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  get userEmail() {
    return this.authService.userEmail;
  }

  logout() {
    this.authService.logout();
  }

  navigateToCrear(type: string) {
    this.router.navigate([`/${type}-create`]);
  }

  navigateToListar(type: string) {
    this.router.navigate([`/${type}-list`]);
  }
}
