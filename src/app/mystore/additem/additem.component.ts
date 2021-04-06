import { ngModuleJitUrl } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
// import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  
  ngOnInit(): void {
  }

}


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