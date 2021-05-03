import { Injectable } from '@angular/core';
import { Observable, of,} from 'rxjs';
import { map, find } from 'rxjs/operators';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage} from '@angular/fire/storage'

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

  private storedDatabase: AngularFireList<item>
  items$: Observable<item[]>
  private localStorage: item[]
  
  constructor(private firestore: AngularFirestore,
          private db: AngularFireDatabase,
    ){
    this.storedDatabase = this.db.list('items');
    this.items$ = this.storedDatabase.valueChanges();
    this.localStorage = [];
    this.items$.subscribe(items => this.localStorage = items)

    var temp = this.db.list('items');

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