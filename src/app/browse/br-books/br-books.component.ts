import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { item } from '../../Item';
import { ItemService } from '../../item.service';
import { Mock } from '../../MockBook';

@Component({
  selector: 'app-br-books',
  templateUrl: './br-books.component.html',
  styleUrls: ['./br-books.component.css']
})
export class BrBooksComponent implements OnInit {
  retrievedItems: item[];
  items: item[];
  category = "books";

  constructor(public router: Router, 
             public ItemService: ItemService) { }


  getItems(retrievedItems:item[]):void{

    var removedItems: number[] = [];

    console.log(retrievedItems)
    for (const index in retrievedItems){
      var item:item = retrievedItems[index]
        console.log(item)
        if (item.category !== this.category){
          removedItems.push(parseInt(index))
        }
    }
    console.log(removedItems)

    this.items = [];
    for (const index in retrievedItems){
      if (!removedItems.includes(parseInt(index))){
        this.items.push(retrievedItems[index])
      }
    }

    console.log(this.items)
  }

  initializeKeywordBar():HTMLInputElement{
    var router = this.router
    var keywordBar = <HTMLInputElement>document.getElementById('keyword')

    keywordBar.addEventListener("keyup",function(event){
      if (event.keyCode == 13){
        event.preventDefault();
        router.navigate(['br-keyword/',keywordBar.value])
        
      }
    })
    console.log("Keyword Bar Initialized")
    return keywordBar
  }
 
  ngOnInit(): void {
    var keywordBar = this.initializeKeywordBar()

    this.ItemService.getItems().subscribe((Items) => {
      this.getItems(Items)
    })
  }



}