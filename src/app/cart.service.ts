import { Injectable } from '@angular/core';
import { item } from './Item';
import { ItemService } from './item.service'

@Injectable({
  providedIn: 'root'
})
export class CartService {

    items: any[] = [];

  constructor(private itemService: ItemService) {}
  
  // add to cart button pressed
  addToCart(product: item) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  // purcahse items button
  clearCart() {
    for (var i = 0; i < this.items.length; i++){
      this.itemService.deleteItem(this.items[i].itemID)
    }
    this.items = [];
  }
}