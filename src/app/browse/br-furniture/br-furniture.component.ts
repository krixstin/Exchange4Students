import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { item } from '../../Item';
import { ItemService } from '../../item.service';
import { Mock } from '../../MockBook';

@Component({
  selector: 'app-br-furniture',
  templateUrl: './br-furniture.component.html',
  styleUrls: ['./br-furniture.component.css']
})
export class BrFurnitureComponent implements OnInit {
  retrievedItems: item[];
  items: item[];
  category = "furniture";

  constructor(public router: Router, 
             public ItemService: ItemService) { }


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
    this.ItemService.getItems().subscribe((Items) => this.getItems(Items))
  }

}