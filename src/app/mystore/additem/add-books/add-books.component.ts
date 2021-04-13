import { ngModuleJitUrl } from '@angular/compiler';
import { ViewEncapsulation } from '@angular/core';
import { Component, Injectable, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';


@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddBooksComponent implements OnInit {

  constructor(public router: Router,
    private fb: FormBuilder, 
    private firestore: AngularFirestore){}
    private submissionForm!: AngularFirestoreCollection<any[]>

  bookForm = new FormGroup({
    booktitle: new FormControl('booktitle'),
    edition: new FormControl('edition'),
    course: new FormControl('course'),

    description :new FormControl('description'),
    price: new FormControl('price'),
    sellerid: new FormControl('sellerid'),
    picture:new FormControl('picture'),
    shipping: new FormControl('shipping'),

  });  

  ngOnInit(): void{
    // this.initializeForm();
    this.submissionForm=this.firestore.collection('items');
    this.bookForm = this.fb.group({

    booktitle: [''],
    edition: [''],
    course: [''],

    itemID:[''],
    description : ['' ],
    price: [''],
    sellerid: [''],
    category: ['books'],
    picture:[''],
    shipping: ['']
    });
  }

  submitForm(value: any){
    console.log(this.fb.control)
    this.submissionForm.add(value).then(res=>{
      console.log('Item added!');
      }).catch(err=> console.log(err)
      );
  }

}
