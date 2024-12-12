import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Ruta para la página de inicio (Home)
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  // Ruta principal redirige a 'home'
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // Ruta para la página de inicio de sesión (Login)
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  // Ruta para la página de registro (Register)
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterPageModule),
  },
  // Ruta para la página de administración (Admin)
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminPageModule),
  },
  // Wildcard para rutas no definidas
  {
    path: '**',
    redirectTo: 'home', // Redirigir a Home por defecto
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule], 
})
export class AppRoutingModule {}
