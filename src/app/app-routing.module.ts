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
  {
    path: 'plantas-list',
    loadChildren: () => import('./pages/plantas/plantas-list/plantas-list.module').then( m => m.PlantasListPageModule)
  },
  {
    path: 'plantas-detail',
    loadChildren: () => import('./pages/plantas/plantas-detail/plantas-detail.module').then( m => m.PlantasDetailPageModule)
  },
  {
    path: 'plantas-create',
    loadChildren: () => import('./pages/plantas/plantas-create/plantas-create.module').then( m => m.PlantasCreatePageModule)
  },
  {
    path: 'plantas-edit',
    loadChildren: () => import('./pages/plantas/plantas-edit/plantas-edit.module').then( m => m.PlantasEditPageModule)
  },
  {
    path: 'encargados-list',
    loadChildren: () => import('./pages/encargados/encargados-list/encargados-list.module').then( m => m.EncargadosListPageModule)
  },
  {
    path: 'encargados-detail',
    loadChildren: () => import('./pages/encargados/encargados-detail/encargados-detail.module').then( m => m.EncargadosDetailPageModule)
  },
  {
    path: 'encargados-edit',
    loadChildren: () => import('./pages/encargados/encargados-edit/encargados-edit.module').then( m => m.EncargadosEditPageModule)
  },
  {
    path: 'encargados-create',
    loadChildren: () => import('./pages/encargados/encargados-create/encargados-create.module').then( m => m.EncargadosCreatePageModule)
  },
  {
    path: 'riegos-list',
    loadChildren: () => import('./pages/riegos/riegos-list/riegos-list.module').then( m => m.RiegosListPageModule)
  },
  {
    path: 'riegos-create',
    loadChildren: () => import('./pages/riegos/riegos-create/riegos-create.module').then( m => m.RiegosCreatePageModule)
  },
  {
    path: 'riegos-edit',
    loadChildren: () => import('./pages/riegos/riegos-edit/riegos-edit.module').then( m => m.RiegosEditPageModule)
  },
  {
    path: 'riegos-detail',
    loadChildren: () => import('./pages/riegos/riegos-detail/riegos-detail.module').then( m => m.RiegosDetailPageModule)
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
