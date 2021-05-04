import { ngModuleJitUrl } from '@angular/compiler';
import { ViewEncapsulation } from '@angular/core';
import { Component, Injectable, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ImageService } from '../shared/image.service';
// import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';

@Component({
  selector: 'app-add-electronics',
  templateUrl: './add-electronics.component.html',
  styleUrls: ['./add-electronics.component.css']
})
export class AddElectronicsComponent implements OnInit {

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
    model: new FormControl('model', Validators.required),
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
          if(value){
            //how to store image in firebase storage ${value.category}/
            if(this.selectedImage!= null){
              var filePath = `${this.selectedImage.name.split('.').slice(0,-1).join('.')}_${new Date().getTime()}` //avoid duplicate name by assigning time
              const fileRef = this.storage.ref(filePath);
              
              this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
              
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
            else{
              value['picture']=null;
              this.insertItem(value);
              this.resetForm();
              console.log("Null image uploaded, form is RESET")
              }


            }

          }

    get formControl(){
      return this.ourForm['controls']; //all the objects in formGroup

    }

    insertItem(value: any){
      this.firestore.collection('items').add(value).then(res=>{
      console.log('item added!');
      }).catch(err=> console.log(err)
      );
    }

  resetForm(){

    
    this.ourForm.reset();
    this.ourForm.setValue({
      title: '',
      model: '',

      description : '' ,
      price: '',
      sellerid: '',
      category: 'electronics',
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
