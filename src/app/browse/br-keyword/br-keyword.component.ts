import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { item } from '../../Item';
import { ItemService } from '../../item.service';
import { Mock } from '../../MockBook';

@Component({
  selector: 'app-br-keyword',
  templateUrl: './br-keyword.component.html',
  styleUrls: ['./br-keyword.component.css']
})
export class BrKeywordComponent implements OnInit {
  retrievedItems: item[];
  items: item[];
  keywords: string[];

  constructor(public route: ActivatedRoute, 
             public router: Router,
             public ItemService: ItemService) {}


  getKeywordItems(retrievedItems:item[]):void{
    var acceptedItems: number[] = [];

//    console.log(retrievedItems)
    for (const index in retrievedItems){
      var item:item = retrievedItems[index]
//        console.log(item)
        if (this.keywordCheck(this.keywords,item)){
          acceptedItems.push(parseInt(index))
        }
    }
//    console.log(acceptedItems)

    this.items = [];
	for (const index in retrievedItems){
      if (acceptedItems.includes(parseInt(index))){
        this.items.push(retrievedItems[index])
      }
    }

//    console.log(this.items)
  }
 
  keywordCheck(keyword:string[],item:item):boolean{
  	
    var descriptCheck = this.keywords.every(keyword => {
      if (item.description.toLowerCase().includes(keyword)){
        return true
      }
        return false  
    })

    var titleCheck = this.keywords.some(keyword => {
//    "Sanity check, some database objects aren't updated to use title."
      if (item.title == undefined){
        return false
      }
      
      if (item.title.toLowerCase().includes(keyword)){
        return true
      }
        return false  
    })

    return descriptCheck || titleCheck
    
  }

  ngOnInit(): void {

	this.route.params.subscribe(routeParam => {
		var keyword = routeParam.keyword

		keyword = keyword.toLowerCase();
		if (keyword.includes(" ")) { this.keywords = keyword.split(" ") }
		else { this.keywords = [keyword] }

		this.ItemService.getItems().subscribe((Items) => this.getKeywordItems(Items))
	})
  }
}