import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { item } from '../../Item';
import { ItemService } from '../../item.service';
import { Mock } from '../../MockBook';

@Component({
  selector: 'app-br-clothing',
  templateUrl: './br-clothing.component.html',
  styleUrls: ['./br-clothing.component.css']
})
export class BrClothingComponent implements OnInit {
  retrievedItems: item[];
  items: item[];


  constructor(public router: Router, 
             private ItemService: ItemService) { }


  getItems():void{
  	this.ItemService.getItems()
  		.subscribe(items => this.retrievedItems = items)

    var removedItems: number[] = [];

    console.log(this.retrievedItems)
    for (const index in this.retrievedItems){
      var item:item = this.retrievedItems[index]
        if (item.category !== "clothing"){
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
  	this.getItems();
  }

}
