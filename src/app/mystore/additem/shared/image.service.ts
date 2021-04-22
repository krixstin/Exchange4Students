import {Injectable} from '@angular/core';
import {AngularFireList, AngularFireDatabase} from '@angular/fire/database'

@Injectable({
    providedIn: 'root'
})
export class ImageService{
    itemList!: AngularFireList<any> ;

    constructor(private firebase:AngularFireDatabase){}
    
    // initialize
    getitemList(){
        this.itemList= this.firebase.list('/items');
    }

    insertItem(items: any){
        this.itemList.push(items);
    }

}