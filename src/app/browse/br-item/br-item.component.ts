import { Component, OnInit, Input } from '@angular/core';
import {Mock} from '../../MockBook'
import {itemBook} from '../../ItemBook'

@Component({
  selector: 'app-br-item',
  templateUrl: './br-item.component.html',
  styleUrls: ['./br-item.component.css']
})

export class BrItemComponent implements OnInit {
	item = Mock
  constructor() { }

  ngOnInit(): void {
  }

}
