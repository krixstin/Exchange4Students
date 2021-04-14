import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import {item} from './Item';
import {itemSport} from './ItemSport';
import {itemBook} from './ItemBook';
import {itemClothing} from './ItemClothing';
import {itemElectronic} from './ItemElectronic';
import {itemFurniture} from './ItemFurniture';

import { Mock } from './MockBook';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private storedDatabase: AngularFirestoreCollection<any[]>
  constructor(private firestore: AngularFirestore){}

  getItems(): Observable<item[]>{
  	// Currently returns Mock Item list 
  	// TODO: Implement get from database
    this.storedDatabase = this.firestore.collection('items');
    var retrievedItems;
    this.storedDatabase.get().subscribe(items => console.log(items));
  	console.log("Firestore Database")
    console.log(retrievedItems)
    const items = of(Mock)
  	return items;
  }

  getItem(itemid: string): Observable<item>{
  	// Currently reads from Mock Item list
  	// TODO: Replace Mock with get from database
  	const item = Mock.find(temp => temp.itemid === itemid) as item
  	return of(item)
  }
}
