import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {ItemService} from '../../item.service';

import {itemBook} from '../../ItemBook';
import {item} from '../../Item';

@Component({
  selector: 'app-br-item',
  templateUrl: './br-item.component.html',
  styleUrls: ['./br-item.component.css']
})

export class BrItemComponent implements OnInit {
  Item: item; 
  
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
  	this.itemService.getItem(itemid).subscribe(item => this.Item = item)
  	//console.log("get Before:")
  	//console.log(this.Item)
  	this.setCategory(this.Item);
  }

  setCategory(Item: item):void	{
  	var returnItem;
  	if (Item.category == "book"){
  		returnItem= Item as itemBook;
  		this.Item = returnItem as itemBook;
  	}
  	if (Item.category == "furniture"){
  		//returnItem= Item as itemBook;
  		//this.Item = returnItem as itemBook;
  	}
  }

}
