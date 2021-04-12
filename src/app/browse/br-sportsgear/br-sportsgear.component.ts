import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-br-sportsgear',
  templateUrl: './br-sportsgear.component.html',
  styleUrls: ['./br-sportsgear.component.css']
})
export class BrSportsgearComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
