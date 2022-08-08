import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CartItemModel } from '../../models/cart-item.model';

@Component({
    selector: 'app-cart-list-item',
    templateUrl: './cart-list-item.component.html',
    styleUrls: ['./cart-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListItemComponent {
    @Input() item?: CartItemModel;

    @Output() remove = new EventEmitter<void>();
    @Output() viewProduct = new EventEmitter<void>();
    @Output() increase = new EventEmitter<void>();
    @Output() decrease = new EventEmitter<void>();

    onRemoveItem(): void {
        this.remove.emit();
    }

    onViewProduct(): void {
        this.viewProduct.emit();
    }

    onQuantityDecrease(): void {
        this.decrease.emit();
    }
    
    onQuantityIncrease(): void {
        this.increase.emit();
    }
}
