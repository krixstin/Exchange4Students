import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../cart.service';
import {ItemService} from '../../item.service';

import {item} from '../../Item';
import {itemSport} from '../../ItemSport';
import {itemBook} from '../../ItemBook';
import {itemClothing} from '../../ItemClothing';
import {itemElectronic} from '../../ItemElectronic';
import {itemFurniture} from '../../ItemFurniture';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  constructor(public router:Router,
    private cartService: CartService) { }

  ngOnInit(): void {
  }

  clearCart() {
  	console.log(this.cartService.getItems())
    console.log("successfully checked out")
    this.cartService.clearCart();
    console.log(this.cartService.getItems())
    window.alert('Your purchase was a success!');
    this.items = this.cartService.getItems()
  }

}
