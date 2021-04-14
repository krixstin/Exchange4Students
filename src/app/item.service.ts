import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
//import {AutoId} from '@firebase/firestore/dist/rn/firestore/src/util/misc';

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

  private storedDatabase: AngularFirestoreCollection<item>
  items$: Observable<item[]>
  constructor(private firestore: AngularFirestore){
    this.storedDatabase = this.firestore.collection('items');
    this.items$ = this.storedDatabase.valueChanges();
  }

  getItems(): Observable<item[]>{
  	// Currently returns Mock Item list 
  	// TODO: Implement get from database
    this.storedDatabase.get().subscribe()

    const items = of(Mock)
//    AutoId.newId();
//    return this.items$;
  	return items;
  }

  getItem(itemID: string): Observable<item>{
  	// Currently reads from Mock Item list
  	// TODO: Replace Mock with get from database
  	const item = Mock.find(temp => temp.itemID === itemID) as item
  	return of(item)
  }
}
