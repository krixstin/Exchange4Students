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
  retrievedItems: item[] = [];
  items: item[] = [];
  category = 'sportsgear'

  constructor(public router: Router, 
             private ItemService: ItemService,
             private service:ImageService) { }


  getItems(retrievedItems:item[]):void{

    var removedItems: number[] = [];

    console.log(retrievedItems)
    for (const index in retrievedItems){
      var item:item = retrievedItems[index]
        if (item.category !== this.category){
          removedItems.push(parseInt(index))
        }
    }

    this.items = [];
    for (const index in retrievedItems){
      if (!removedItems.includes(parseInt(index))){
        this.items.push(retrievedItems[index])
      }
    }

    console.log(this.items)
  }
 
  ngOnInit(): void {
    
    // this.service.getImageDetailList()
    this.ItemService.getItems().subscribe((Items) => this.getItems(Items))
    
  	// this.getItems();
    
  }
}
