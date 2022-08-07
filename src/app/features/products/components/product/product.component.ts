import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { take } from 'rxjs';

import { ProductModel } from 'app/features/products/models/product.model';
import { ProductsService } from '../../services/products.service';

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
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.productId = Number(this.activatedRoute.snapshot.params['id']);
        this.loadProduct();
    }

    private loadProduct(): void {
        this.productsService.getProductById(this.productId)
            .pipe(take(1))
            .subscribe((product) => {
                this.product = product;
            });
    }
}
