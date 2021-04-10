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

export interface itemBook extends item{
    booktitle: string,
    edition: number,
    course: string,
}