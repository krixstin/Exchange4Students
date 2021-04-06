import { ngModuleJitUrl } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  private submissionForm?: AngularFirestoreCollection<any>;

  constructor(private fb: FormBuilder, private firestore: AngularFirestore){
  }

  // ourForm?: FormGroup ;
  ourForm: FormGroup = new FormGroup({
    //passing objects ( array of obtions)
    // [] for more than one Valliators
    booktitle: new FormControl(''),
    description :new FormControl(''),
    edition: new FormControl(''),
    course: new FormControl(''),
    price: new FormControl(''),
    sellerid: new FormControl(''),
    category: new FormControl(''),
    picture:new FormControl(''),
    shipping: new FormControl(''),
  });
  initializeForm() {
    this.ourForm.setValue({
        title: 'Complete me',
        description: 'Now!'
    })
}
  ngOnInit(): void{
    // this.initializeForm();
    this.submissionForm=this.firestore.collection('submission');

    this.ourForm = this.fb.group({
      //passing objects ( array of obtions)
      // [] for more than one Valliators
      booktitle: ['', Validators.required ],
      description : ['', Validators.required ],
      edition: ['', Validators.required],
      course: ['', Validators.required],
      price: ['', Validators.required],
      sellerid: ['', Validators.required],
      category: ['', Validators.required],
      picture: ['', Validators.required],
      shipping: ['', Validators.required]
    });
  }

  submitData(value: any){
      this.submissionForm?.add(value).then(res=>{
        console.log('Item added');
      }).catch(err=> console.log(err)
      );
    
  }

}



// function submitData(value: any, any: any) {
//   throw new Error('Function not implemented.');
// }

// function value(value: any, any: any) {
//   throw new Error('Function not implemented.');
// }
// export class AdListing{
//   title= "Your title"
//   content="ad content"
//   price = 5.00
//   image = "http://via.placeholde.com/350x150"
// }

// @Injectable()
// export class AdService{

//   constructor(private db: AngularFireDatabase) {
  
//   }
//   //Creates an item, then returns as an object
//   createAd():FirebaseObjectObservable<AdListing>{
//     const adDefault= new AdListing()
//     const adKey=this.db.list('/ads').push(adDefault).adKey
//     return this.db.object('/ads/'+adKey)
//   }

//   //Updates an existing item
//   updateAd(ad: FirebaseObjectObservable<AdListing>, data: any){
//     return ad.update(data)
//   }
// }