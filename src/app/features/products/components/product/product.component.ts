import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { take } from 'rxjs';

import { ProductModel } from 'app/features/products/models/product.model';
import { ProductsService } from '../../services/products.service';
import { CartService } from 'app/features/cart/services/cart.service';
import { CONSTANT_TOKEN } from 'app/core/services/constant.service';
import { ConstantToken } from 'app/core/models/config.model';
import { GENERATOR_TOKEN } from 'app/core/services/generator.service';
import { LocalStorageService, LOCAL_STORAGE_TOKEN } from 'app/core/services/local-storage.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    productId!: number;
    product: ProductModel | null = null;

    constructor(
        private productsService: ProductsService,
        private cartService: CartService,
        private activatedRoute: ActivatedRoute,
        @Optional() @Inject(CONSTANT_TOKEN) private constantToken: ConstantToken,
        @Optional() @Inject(GENERATOR_TOKEN) private generatorToken: string,
        @Optional() @Inject(LOCAL_STORAGE_TOKEN) private localStorageService: LocalStorageService,
    ) { }

    ngOnInit(): void {
        this.localStorageService.setData(undefined, this.constantToken);
        console.log(this.generatorToken, this.localStorageService.getData());

        this.productId = Number(this.activatedRoute.snapshot.params['id']);
        this.loadProduct();
    }

    addToCart(): void {
        if (!this.product?.isAvailable) return;
        
        this.cartService.addToCart(this.product);
    }

    private loadProduct(): void {
        this.productsService.getProductById(this.productId)
            .pipe(take(1))
            .subscribe((product) => {
                this.product = product;
            });
    }
}
