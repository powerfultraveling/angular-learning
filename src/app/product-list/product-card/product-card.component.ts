import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { Product } from '../../../../libs/types';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    stock: 0,
    image: '',
  };

  @Output() nameChange = new EventEmitter<{ value: Event; id: number }>();

  onInput(value: Event, id: number) {
    const payload = {
      value,
      id,
    };

    this.nameChange.emit(payload);
  }
}
