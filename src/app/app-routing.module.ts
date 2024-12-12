import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Definimos las rutas principales de la aplicación
const routes: Routes = [
  // Ruta raíz redirige a la página de inicio (Home)
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // Ruta para la página de inicio (Home)
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
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
    redirectTo: '', // Puedes redirigir a 'home' o mostrar un 404 si se implementa
  },
];

@NgModule({
  imports: [
    // Configuración del enrutador con precarga de todos los módulos
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule], // Exportamos el módulo de rutas
})
export class AppRoutingModule {}
