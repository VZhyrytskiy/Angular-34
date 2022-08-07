import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { CartItemModel } from '../../models/cart-item.model';

@Component({
    selector: 'app-cart-list-item',
    templateUrl: './cart-list-item.component.html',
    styleUrls: ['./cart-list-item.component.scss']
})
export class CartListItemComponent {
    @Input() item?: CartItemModel;

    @Output() remove = new EventEmitter<void>();

    constructor(private router: Router) { }

    onRemoveItem(): void {
        this.remove.emit();
    }

    redirectToProduct(): void {
        this.router.navigate(['/products', this.item?.id]);
    }
}
