import { ngModuleJitUrl } from '@angular/compiler';
import { ViewEncapsulation } from '@angular/core';
import { Component, Injectable, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, validateEventsArray } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {finalize}from "rxjs/operators"
import { ImageService } from '../shared/image.service';
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
    private service:ImageService,

    private firebase:AngularFireDatabase
    ){}

    private submissionForm!: AngularFirestoreCollection<any[]>
    
  ourForm = new FormGroup({

    title: new FormControl('title', Validators.required),
    weight: new FormControl('weight', Validators.required),
    category: new FormControl('category', Validators.required),

    description :new FormControl('description', Validators.required),
    price: new FormControl('price', Validators.required),
    sellerid: new FormControl('sellerid', Validators.required),
    picture:new FormControl('picture', Validators.required),
    shipping: new FormControl('shipping', Validators.required),
    itemID: new FormControl('itemID')

  });  

  ngOnInit(): void{
    this.resetForm();
    console.log('You can start the form')
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
      this.imgSrc= "../../../../assets/images/placeholder.png";
      this.selectedImage= null;
    }

  }
  //formvalue? value
  onSubmit(value: any ){
        this.isSubmitted=true;
        // console.log("is submitted now true")
        if(value){
          //how to store image in firebase storage ${value.category}/
          var filePath = `${this.selectedImage.name.split('.').slice(0,-1).join('.')}_${new Date().getTime()}` //avoid duplicate name by assigning time
          console.log("file path: ", filePath)
          const fileRef = this.storage.ref(filePath);
          
          this.storage.upload(filePath, this.selectedImage.name).snapshotChanges().pipe(
            
            finalize(()=>{
              fileRef.getDownloadURL().subscribe((url)=>{
                value['picture']=url;

                console.log("value of picture now set to: ", value['picture'])
              
                
                this.insertItem(value);
                this.resetForm();
                console.log("Now, the form is RESET")
              })
            })
          ).subscribe();
        }
      }

  get formControl(){
    return this.ourForm['controls']; //all the objects in formGroup

  }
  items!: AngularFireList<any>;

  insertItem(value: any){
    this.items = this.firebase.list('/items');

    if(value){
      this.items.push({
      title:  value['title'],
      weight: value['weight'],

      description : value['description'] ,
      price: value['price'],
      sellerid: value['sellerid'],
      category: 'sportsgear',
      picture:value['picture'],
      shipping: value['shipping'],
      itemID: this.newId()
    })
    };
    console.log("item succesfully added!")
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
      shipping: '',
      itemID: this.newId()
    });
    this.imgSrc= "../../../../assets/images/addphoto.png";
    this.selectedImage=null;
    this.isSubmitted=false;

  }

  newId(): string {
    // Alphanumeric characters
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let autoId = '';
    for (let i = 0; i < 20; i++) {
      autoId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return autoId;
  }

}



