import { ngModuleJitUrl } from '@angular/compiler';
import { ViewEncapsulation } from '@angular/core';
import { Component, Injectable, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';

@Component({
  selector: 'app-add-sportsgear',
  templateUrl: './add-sportsgear.component.html',
  styleUrls: ['./add-sportsgear.component.css']
})
export class AddSportsgearComponent implements OnInit {

  constructor(public router: Router,
    private fb: FormBuilder, 
    private firestore: AngularFirestore){}
    private submissionForm!: AngularFirestoreCollection<any[]>

  ourForm = new FormGroup({
    type: new FormControl('clothingtype'),
    color: new FormControl('color'),
    size: new FormControl('size'),

    description :new FormControl('description'),
    price: new FormControl('price'),
    sellerid: new FormControl('sellerid'),
    picture:new FormControl('picture'),
    shipping: new FormControl('shipping'),

  });  

  ngOnInit(): void{
    // this.initializeForm();
    this.submissionForm=this.firestore.collection('items');
    this.ourForm = this.fb.group({

    type: [''],
    weight: [''],

    itemID:[''],
    description : ['' ],
    price: [''],
    sellerid: [''],
    category: ['sportsgear'],
    picture:[''],
    shipping: ['']
    });
  }

  submitForm(value: any){
    console.log(this.fb.control)
    this.submissionForm.add(value).then(res=>{
      console.log('item added!');
      }).catch(err=> console.log(err)
      );
  }
}
