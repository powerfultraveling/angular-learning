import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import type { Product } from '../../../libs/types';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  title = 'Products';

  // TODO: Fake data
  productList: Product[] = [
    {
      id: 1,
      name: 'charles',
      stock: 5,
      price: 2033,
      image: 'https://picsum.photos/200/200',
    },
    {
      id: 2,
      name: 'evab',
      stock: 5,
      price: 2022,
      image: 'https://picsum.photos/200/200',
    },
    {
      id: 3,
      name: 'devin',
      stock: 5,
      price: 2022,
      image: 'https://picsum.photos/200/200',
    },
  ];

  onNameChange(payload: { value: any; id: number }) {
    this.productList = this.productList.map((product) => {
      if (product.id === payload.id) {
        product.name = payload.value.target.value;
      }

      return product;
    });
  }
}
