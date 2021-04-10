import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { item } from './Item';
import { Mock } from './MockBook';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Observable<item[]>{
  	// Currently returns Mock Item list 
  	// TODO: Implement get from database
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
