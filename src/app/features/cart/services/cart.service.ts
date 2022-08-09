import { Injectable } from '@angular/core';

import { BehaviorSubject, map } from 'rxjs';

import { ProductModel } from 'app/features/products/models/product.model';
import { CartItemModel } from '../models/cart-item.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartProducts$$ = new BehaviorSubject<Map<CartItemModel['id'], CartItemModel>>(new Map);
    cartProducts$ = this.cartProducts$$.asObservable().pipe(
        map(item => [...item.values()]),
    );

    cartTotalPrice$ = this.cartProducts$.pipe(
        map(items => items.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)),
    );

    cartTotalQuantity$ = this.cartProducts$.pipe(
        map(items => items.reduce((prev, curr) => prev + curr.quantity, 0)),
    );

    isEmptyCart(): boolean {
        return !this.cartProducts$$.getValue().size;
    }

    addToCart(product: ProductModel): void {
        let cartItem: CartItemModel = {
            ...product,
            quantity: 1,
        };

        this.cartProducts$$.getValue().set(product.id, cartItem);
        this.cartProducts$$.next(this.cartProducts$$.value);
    }

    removeFromCart(id: number): void {
        this.cartProducts$$.getValue().delete(id);
        this.cartProducts$$.next(this.cartProducts$$.value);
    }

    removeAllFromCart(): void {
        this.cartProducts$$.getValue().clear();
        this.cartProducts$$.next(this.cartProducts$$.value);
    }

    decreaseAmount(product: CartItemModel): void {
        this.changeQuantity(product, -1);
    }

    increaseAmount(product: CartItemModel): void {
        this.changeQuantity(product, 1);
    }

    private changeQuantity(product: CartItemModel, amount: number = 0): void {
        const item = this.cartProducts$$.getValue().get(product.id);

        if (!item || !amount) return;
        
        const quantity = item.quantity += amount; 

        this.cartProducts$$.value.set(product.id, {
            ...item,
            quantity: quantity < 1 ? 1 : quantity,
        });
        this.cartProducts$$.next(this.cartProducts$$.value);
    }
}
