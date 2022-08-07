import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from 'app/features/products/models/product.model';

@Component({
    selector: 'app-product-list-item',
    templateUrl: './product-list-item.component.html',
    styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {
    @Input() item?: ProductModel;

    constructor(private router: Router) { }

    onAddToCart(id: number): void {
        if (!this.item?.isAvailable) {
            return;
        }

        console.log(`Order #${id} was added to cart!`);
    }

    onViewProduct(id: number): void {
        this.router.navigate(['/products', id]);
    }
}
