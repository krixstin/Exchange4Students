import { ngModuleJitUrl } from '@angular/compiler';
import { ViewEncapsulation } from '@angular/core';
import { Component, Injectable, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection, validateEventsArray } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {finalize}from "rxjs/operators"
// import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';

@Component({
  selector: 'app-add-sportsgear',
  templateUrl: './add-sportsgear.component.html',
  styleUrls: ['./add-sportsgear.component.css']
})
export class AddSportsgearComponent implements OnInit {

  imgSrc!: string;
  selectedImage: any ;
  isSubmitted: boolean = false;

  constructor(public router: Router,
    private fb: FormBuilder, 
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    ){}

    private submissionForm!: AngularFirestoreCollection<any[]>
    
  ourForm = new FormGroup({
    title: new FormControl('title'),
    weight: new FormControl('weight'),
    category: new FormControl('category'),

    description :new FormControl('description'),
    price: new FormControl('price'),
    sellerid: new FormControl('sellerid'),
    picture:new FormControl('picture'),
    shipping: new FormControl('shipping'),

  });  

  ngOnInit(): void{
    this.resetForm();

    // this.initializeForm();
    // this.submissionForm=this.firestore.collection('items');
    // this.ourForm = this.fb.group({

    // type: [''],
    // weight: [''],

    // itemID:[''],
    // description : ['' ],
    // price: [''],
    // sellerid: [''],
    // category: ['sportsgear'],
    // picture:[''],
    // shipping: ['']
    // });
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
    this.isSubmitted=true;
   if(this.ourForm.valid){
     
     var filePath = `${this.selectedImage.name}_${new Date().getTime()})`
     const fileRef = this.storage.ref(filePath);
     console.log("this is file path",filePath);
     this.storage.upload(filePath, this.selectedImage.name.spli('.').slice(0,-1).join('')).snapshotChanges().pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe((url)=>{
          value['picture']=url;
          this.resetForm;
        })
      })
     ).subscribe();
   }
    // this.submissionForm.add(value).then(res=>{
    //   console.log('item added!');
    //   }).catch(err=> console.log(err)
    //   );
  }

get formControl(){
    return this.ourForm['controls'];

  }

  resetForm(){
    this.ourForm.reset();
    this.ourForm.setValue({
      title: '',
      weight: '',

      description : '' ,
      price: '',
      sellerid: '',
      category: 'sportsgear',
      picture:'',
      shipping: ''
    });
    this.imgSrc= "../../../../assets/images/CategorySportGear.jpg";
    this.selectedImage=null;
    this.isSubmitted=false;

  }
}



