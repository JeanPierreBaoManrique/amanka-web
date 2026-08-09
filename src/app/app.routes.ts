import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'carta',
    title: 'Carta | Amanka Café Bar',
    loadComponent: () =>
      import('./features/menu/pages/menu-page/menu-page').then(
        (m) => m.MenuPage,
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'carta',
  },
  {
    path: '**',
    redirectTo: 'carta',
  },
];