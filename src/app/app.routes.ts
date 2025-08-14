import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('../app/components/products/products.component').then(m => m.ProductsComponent)
    }
];
