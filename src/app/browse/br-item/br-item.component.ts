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
  	this.retrievedItem = this.itemService.getItem(itemid);
  	console.log("get Before:")
  	console.log(this.retrievedItem)
  	this.setCategory(this.retrievedItem);
  	console.log("get After:")
  	console.log(this.Item)
  }

  setCategory(Item: item):void	{
  	if (Item.category == "books"){
  		this.Item = Item as itemBook;
  	}
  	if (Item.category == "sportsgear"){
  		this.Item = Item as itemSport;
  	}
  	if (Item.category == "clothing"){
  		this.Item = Item as itemClothing;
  	}
  	if (Item.category == "electronics"){
  		this.Item = Item as itemElectronic;
  	}
  	if (Item.category == "furniture"){
  		this.Item = Item as itemFurniture;
  	}
  }

}
