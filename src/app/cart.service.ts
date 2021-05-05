import { Injectable } from '@angular/core';
import { item } from './Item';
import { ItemService } from './item.service'

@Injectable({
  providedIn: 'root'
})
export class CartService {

    items: any[] = [];
    buyerEmail: string = "elim1";
    sellerEmail: string = "kkim13";
  
  constructor(private itemService: ItemService) {}
  
  // add to cart button pressed
  addToCart(product: item) {
    console.log("adding to cart")
    if (!this.items.includes(product)){
      this.items.push(product);
      window.alert('Your product has been added to the cart!');  
    }
    else{
      window.alert('Error: Your product is already in the cart!');
    }
  }

  getItems() {
    return this.items;
  }

  // purcahse items button
  clearCart() {
    window.location.href = "mailto:"+this.sellerEmail+"@gmail.com?subject=Exchange4Student Purchase Confirmation&body=Please contact the seller to arrange purchase and shipment details.&cc="+this.buyerEmail+"@gmail.com";
    for (var i = 0; i < this.items.length; i++){
      this.itemService.deleteItem(this.items[i].itemID)
    }
    this.items = [];
  }
}
