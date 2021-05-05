import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
 


  constructor(public route: ActivatedRoute, 
             public router: Router) {
  }
 
 keywords = '';

  handleSubmit(e:KeyboardEvent){
    e.preventDefault();
    if (this.keywords != '') {
		this.router.navigate(['br-keyword/',this.keywords])
	}
  }

  handleKeyUp(e:KeyboardEvent){
     if(e.keyCode === 13){
        this.handleSubmit(e);
     }
  }

  ngOnInit(): void {
  	this.route.params.subscribe(routeParams =>
  	{
  		this.keywords = routeParams.keyword 
  	})
  }



}
