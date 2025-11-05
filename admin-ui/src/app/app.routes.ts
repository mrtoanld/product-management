import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./task-management/task-management.component').then(
        (m) => m.TaskManagementComponent
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./product-listing/product-listing.component').then(
        (m) => m.ProductListingComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
