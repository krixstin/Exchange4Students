import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/mystore/additem/shared/image.service';

@Component({
  selector: 'app-br-sportsgear',
  templateUrl: './br-sportsgear.component.html',
  styleUrls: ['./br-sportsgear.component.css']
})
export class BrSportsgearComponent implements OnInit {

  constructor(public router: Router, private service:ImageService) { }

  ngOnInit(): void {
    this.service.getImageDetailList()
  }

}
