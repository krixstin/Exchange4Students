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
  items: item[];

  constructor(public router: Router, 
             private ItemService: ItemService) { }


  getItems():void{
  	this.ItemService.getItems()
  		.subscribe(items => this.items = items)
//	console.log(this.items);
  }
 
  ngOnInit(): void {
  	this.getItems();
  }

}
