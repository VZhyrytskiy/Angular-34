import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsModule } from './features/products/products.module';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products',
    },
    {
        path: 'products',
        loadChildren: () => ProductsModule,
    },
    {
        path: 'cart',
        loadChildren: () =>
            import('./features/cart/cart.module').then((m) => m.CartModule),
    },
    { path: '**', redirectTo: 'products' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
