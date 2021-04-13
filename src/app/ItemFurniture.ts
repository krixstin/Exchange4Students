import {item} from './Item';

/*
* Imported Item interface characteristics:
*   //passing objects ( array of obtions)
*   // [] for more than one Valliators
*   itemid: string,
*   description: string,
*   price: number,
*   sellerid: string,
*   category: string,
*   // picture:new FormControl('picture'),
*   shipping: string,
*/

export interface itemFurniture extends item{
    type: string,
    color: string,
    weight: number,
    dimension: string,
}