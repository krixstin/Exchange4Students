import {Injectable} from '@angular/core';
import {AngularFireList, AngularFireDatabase} from '@angular/fire/database'

@Injectable({
    providedIn: 'root'
})
export class ImageService{
    imageDetailList!: AngularFireList<any>;

    constructor(private firebase:AngularFireDatabase){}
    
    // initialize
    getImageDetailList(){
        this.imageDetailList= this.firebase.list('items');
    }

    insertImageDetails(imageDetails: any){
        this.imageDetailList.push(imageDetails);
    }

}