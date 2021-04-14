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
  items$: Observable<item[]>
  constructor(private firestore: AngularFirestore){}

  getItems(): Observable<item[]>{
  	// Currently returns Mock Item list 
  	// TODO: Implement get from database
    this.storedDatabase = this.firestore.collection('items');
    this.items$ = this.firestore.collection<item>('items', (ref) => 
        ref
      )
      .valueChanges({idField: 'id'});

    var tempo:item[] = [];
    const snapshot = this.items$.subscribe(temp => tempo = temp);
    console.log(snapshot)
    var retrievedItems;
    this.storedDatabase.get().subscribe(items => console.log(items));
  	console.log("Firestore Database")
    console.log(tempo)
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
