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

  private submissionForm!: AngularFirestoreCollection<any[]>;
  private counter = 1;
  private testsubmit!: AngularFirestoreCollection<any[]>;
  constructor(private fb: FormBuilder, private firestore: AngularFirestore){
  }

  // ourForm?: FormGroup ;
  ourForm: FormGroup = new FormGroup({
    //passing objects ( array of obtions)
    // [] for more than one Valliators
    booktitle: new FormControl('booktitle'),
    description :new FormControl('description'),
    edition: new FormControl('edition'),
    course: new FormControl('course'),
    price: new FormControl('price'),
    sellerid: new FormControl('sellerid'),
    category: new FormControl('category'),
    // picture:new FormControl('picture'),
    shipping: new FormControl('shipping'),
  });
  initializeForm() {
    this.ourForm.setValue({
        title: 'Complete me',
        description: 'Now!'
    })
}
  ngOnInit(): void{
    // this.initializeForm();
    this.submissionForm=this.firestore.collection('items');

    this.ourForm = this.fb.group({
      //passing objects ( array of obtions)
      // [] for more than one Valliators
      // booktitle: ['', Validators.required ],
      // itemid : ['', Validators.required ],
      // description : ['', Validators.required ],
      // edition: ['', Validators.required],
      // course: ['', Validators.required],
      // price: ['', Validators.required],
      // sellerid: ['', Validators.required],
      // category: ['', Validators.required],
      // picture: ['', Validators.required],
      // shipping: ['', Validators.required]

      // booktitle: 'Algebra 1' ,
      // itemid : '001'
      // description : 'Only used for a year' ,
      // edition: 14,
      // course: 'MA 132',
      // price: 15,
      // sellerid: 'spring567',
      // category: 'boooks',
      // // picture:'nah',
      // shipping: 1


      booktitle: ['' ],
      itemID:[''],
      description : ['' ],
      edition: [''],
      course: [''],
      price: [''],
      sellerid: [''],
      category: [''],
      picture:[''],
      shipping: ['']
    });
  }

  submitData(value: any){
    // console.log(this.ourForm.value);
    // console.log();
    // console.log(this.submissionForm);
    // console.log();
    // console.log(this.submissionForm.add(value));
    // console.log();
    // console.log(this.submissionForm.doc(value));
    console.log(this.fb.control)
      this.submissionForm.add(value).then(res=>{
        console.log('Item added!');
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