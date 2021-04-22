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
    title: new FormControl('title', Validators.required),
    weight: new FormControl('weight', Validators.required ),
    category: new FormControl('category', Validators.required),

    description :new FormControl('description', Validators.required),
    price: new FormControl('price', Validators.required),
    sellerid: new FormControl('sellerid', Validators.required),
    picture:new FormControl('picture', Validators.required),
    shipping: new FormControl('shipping', Validators.required),

  });  

  ngOnInit(): void{
    this.resetForm();
    console.log('form is reset for you to fill out')
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
  onSubmit(value: { [x: string]: any; valid: any; category: any; } ){
        this.isSubmitted=true;
        console.log("is submitted now true")
        if(value){
          //how to store image in firebase storage ${value.category}/
          var filePath = `${this.selectedImage.name.split('.').slice(0,-1).join('.')}_${new Date().getTime()}` //avoid duplicate name by assigning time
          console.log("file path: ", filePath)
          const fileRef = this.storage.ref(filePath);
          console.log("this is file path",filePath);
          this.storage.upload(filePath, this.selectedImage.name).snapshotChanges().pipe(
            
            finalize(()=>{
              fileRef.getDownloadURL().subscribe((url)=>{
                value['picture']=url;
                console.log("value of picture is now url: ", url)
                this.resetForm();
                console.log("now, form is reset")
              })
            })
          ).subscribe();
        }
      }
  // submitForm(value: any){
  //   console.log(this.fb.control)
  //   this.isSubmitted=true;
  //  if(this.ourForm.valid){
     
  //    var filePath = `${this.selectedImage.name}_${new Date().getTime()})`
  //    const fileRef = this.storage.ref(filePath);
  //    console.log("this is file path",filePath);
  //    this.storage.upload(filePath, this.selectedImage.name.spli('.').slice(0,-1).join('')).snapshotChanges().pipe(
  //     finalize(()=>{
  //       fileRef.getDownloadURL().subscribe((url)=>{
  //         value['picture']=url;
  //         this.resetForm;
  //       })
  //     })
  //    ).subscribe();
  //  }

  
    // this.submissionForm.add(value).then(res=>{
    //   console.log('item added!');
    //   }).catch(err=> console.log(err)
    //   );
  // }

  get formControl(){
    return this.ourForm['controls']; //all the objects in formGroup

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



