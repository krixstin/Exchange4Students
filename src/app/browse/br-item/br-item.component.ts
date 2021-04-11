import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {ItemService} from '../../item.service';

import {itemSport} from '../../ItemSport';
import {itemBook} from '../../ItemBook';
import {item} from '../../Item';

@Component({
  selector: 'app-br-item',
  templateUrl: './br-item.component.html',
  styleUrls: ['./br-item.component.css']
})

export class BrItemComponent implements OnInit {
  
  retrievedItem: item;
  // Add rest of item types here.
  Item: itemBook | itemSport // | itemFurniture | itemElectronics| itemSports | itemClothing 
  
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
  	var returnItem;
  	if (Item.category == "book"){
  		returnItem= Item as itemBook;
  		this.Item = returnItem as itemBook;
  	}
  	if (Item.category == "sport"){
  		returnItem= Item as itemSport;
  		this.Item = returnItem as itemSport;
  	}
  }

}
