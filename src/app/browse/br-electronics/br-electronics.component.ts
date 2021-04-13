import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-br-electronics',
  templateUrl: './br-electronics.component.html',
  styleUrls: ['./br-electronics.component.css']
})
export class BrElectronicsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
