import { Injectable } from '@angular/core';
import { item } from './Item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    items: any[] = [];

  constructor() {}
  
  // add to cart button pressed
  addToCart(product: item) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  // purcahse items button
  clearCart() {
    this.items = [];
    return this.items;
  }
}