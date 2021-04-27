import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ImageService } from 'src/app/mystore/additem/shared/image.service';

import { item } from '../../Item';
import { ItemService } from '../../item.service';
import { Mock } from '../../MockBook';


@Component({
  selector: 'app-br-sportsgear',
  templateUrl: './br-sportsgear.component.html',
  styleUrls: ['./br-sportsgear.component.css']
})
export class BrSportsgearComponent implements OnInit {
  retrievedItems: item[];
  items: item[];

  constructor(public router: Router, 
             private ItemService: ItemService,
             private service:ImageService) { }


  getItems():void{
    this.retrievedItems = this.ItemService.getItems()

    var removedItems: number[] = [];

    console.log(this.retrievedItems)
    for (const index in this.retrievedItems){
      var item:item = this.retrievedItems[index]
        if (item.category !== "sportsgear"){
          removedItems.push(parseInt(index))
        }
    }

    this.items = [];
    for (const index in this.retrievedItems){
      if (!removedItems.includes(parseInt(index))){
        this.items.push(this.retrievedItems[index])
      }
    }

    console.log(this.items)
  }
 
  ngOnInit(): void {

    this.service.getImageDetailList()
  	this.getItems();

  }

}
