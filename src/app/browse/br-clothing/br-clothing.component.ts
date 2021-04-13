import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-br-clothing',
  templateUrl: './br-clothing.component.html',
  styleUrls: ['./br-clothing.component.css']
})
export class BrClothingComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
