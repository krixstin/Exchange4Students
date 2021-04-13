import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {ItemService} from '../../item.service';

import {item} from '../../Item';
import {itemSport} from '../../ItemSport';
import {itemBook} from '../../ItemBook';
import {itemClothing} from '../../ItemClothing';
import {itemElectronic} from '../../ItemElectronic';
import {itemFurniture} from '../../ItemFurniture';



@Component({
  selector: 'app-br-item',
  templateUrl: './br-item.component.html',
  styleUrls: ['./br-item.component.css']
})

export class BrItemComponent implements OnInit {
  
  retrievedItem: item;
  // Add rest of item types here.
  Item: itemBook | itemSport | itemFurniture | itemElectronic | itemClothing 
  
  constructor(
  	private route: ActivatedRoute,
  	private itemService: ItemService,
  	private location: Location
  	) { }

  ngOnInit(): void {
  	this.getItem();
  }

  getItem():void{
  	const itemid = String(this.route.snapshot.paramMap.get('itemid'));
  	this.itemService.getItem(itemid).subscribe(item => this.retrievedItem = item)
  	console.log("get Before:")
  	console.log(this.retrievedItem)
  	this.setCategory(this.retrievedItem);
  	console.log("get After:")
  	console.log(this.Item)
  }

  setCategory(Item: item):void	{
  	if (Item.category == "Books"){
  		this.Item = Item as itemBook;
  	}
  	if (Item.category == "Sport Gears"){
  		this.Item = Item as itemSport;
  	}
  	if (Item.category == "Clothing"){
  		this.Item = Item as itemClothing;
  	}
  	if (Item.category == "Electronics"){
  		this.Item = Item as itemElectronic;
  	}
  	if (Item.category == "Furniture"){
  		this.Item = Item as itemFurniture;
  	}
  }

}
