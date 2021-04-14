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

  imgSrc: string ="../../../../assets/images/CategorySportGear.jpg";
  selectedImage: any = null;

  constructor(public router: Router,
    private fb: FormBuilder, 
    private firestore: AngularFirestore){}
    private submissionForm!: AngularFirestoreCollection<any[]>

  ourForm = new FormGroup({
    type: new FormControl('type'),
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

  showPreview(event:any){
    console.log(event)
    if(event.target.files ){
       
      const reader = new FileReader();
      reader.onload = (e: any)=> this.imgSrc= e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc= "../../../../assets/images/CategorySportGear.jpg";
      this.selectedImage= null;
    }
  }

  submitForm(value: any){
    console.log(this.fb.control)

   
    this.submissionForm.add(value).then(res=>{
      console.log('item added!');
      }).catch(err=> console.log(err)
      );
  }
}
