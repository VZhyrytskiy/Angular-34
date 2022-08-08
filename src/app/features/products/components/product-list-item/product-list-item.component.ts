import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ProductModel } from 'app/features/products/models/product.model';

@Component({
    selector: 'app-product-list-item',
    templateUrl: './product-list-item.component.html',
    styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {
    @Input() item?: ProductModel;

    @Output() addToCart = new EventEmitter<void>();
    @Output() viewProduct = new EventEmitter<void>();

    onAddToCart(): void {
        if (!this.item?.isAvailable) return;

        this.addToCart.emit();
    }

    onViewProduct(): void {
        this.viewProduct.emit();
    }
}
