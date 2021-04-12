import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-br-books',
  templateUrl: './br-books.component.html',
  styleUrls: ['./br-books.component.css']
})
export class BrBooksComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
