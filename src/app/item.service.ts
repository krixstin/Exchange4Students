import { Injectable } from '@angular/core';
import { Observable, of,} from 'rxjs';
import { map, find } from 'rxjs/operators';
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
  private localStorage: item[]
  
  constructor(private firestore: AngularFirestore){
    this.storedDatabase = this.firestore.collection('items');
    this.items$ = this.storedDatabase.valueChanges({idField: 'itemID'});
    this.localStorage = [];
    this.items$.subscribe(items => this.localStorage = items)
  }

  getItems(): Observable<item[]>{
    // Currently returns Mock Item list 
    // TODO: Implement get from database
    return this.items$

//    const items = of(Mock)
//    return items;
  }

  getItem(itemID: string): Observable<item|undefined>{
    // Currently reads from Mock Item list
    // TODO: Replace Mock with get from database
    return this.firestore.doc<item>(`items/${itemID}`).valueChanges();
  }
}