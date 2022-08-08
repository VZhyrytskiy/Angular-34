import { Component, OnInit } from '@angular/core';

import { take } from 'rxjs';

import { ProductModel } from 'app/features/products/models/product.model';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { CartService } from 'app/features/cart/services/cart.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    productList: ProductModel[] = [];

    constructor(
        private productsService: ProductsService,
        private cartService: CartService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.loadProducts();
    }

    addProductToCart(prodcut: ProductModel): void {
        this.cartService.addToCart(prodcut);
    }

    navigateToProduct(id: number): void {
        this.router.navigate(['/products', id]);
    }

    private loadProducts(): void {
        this.productsService.getProducts()
            .pipe(take(1))
            .subscribe((prodcuts) => {
                this.productList = prodcuts;
            });
    }
}
