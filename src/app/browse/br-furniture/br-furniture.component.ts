import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-br-furniture',
  templateUrl: './br-furniture.component.html',
  styleUrls: ['./br-furniture.component.css']
})
export class BrFurnitureComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
