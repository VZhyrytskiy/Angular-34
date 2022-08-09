import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { CartItemModel } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent {
    products$ = this.cartService.cartProducts$;
    totalPrice$ = this.cartService.cartTotalPrice$;
    totalQuantity$ = this.cartService.cartTotalQuantity$;

    get isEmptyCart(): boolean {
        return this.cartService.isEmptyCart();
    }

    constructor(
        private router: Router,
        private cartService: CartService,
    ) { }

    removeProductFromCart(id: number): void {
        this.cartService.removeFromCart(id);
    }

    decreaseProductQuantity(product: CartItemModel): void {
        this.cartService.decreaseAmount(product);
    }

    increaseProductQuantity(product: CartItemModel): void {
        this.cartService.increaseAmount(product);
    }

    navigateToProduct(id: number): void {
        this.router.navigate(['/products', id]);
    }

    trackByItems(index: number, item: CartItemModel): number {
        return item.id;
    }

    onSubmitOrder(): void {
        console.log('Order submitted');
    }

    onClearCart(): void {
        this.cartService.removeAllFromCart();
    }
}
