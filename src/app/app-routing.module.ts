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
        // есть подозрение, что это не ленивая загрузка
        // судя по документации https://next.angular.io/api/router/LoadChildrenCallback
        // это свойство должно принимать функцию определенного вида
        // в чем суть такого варианта использования?
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
