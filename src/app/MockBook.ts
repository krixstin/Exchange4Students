import {item} from './Item';
import {itemBook} from './ItemBook';



    const mockBook: itemBook = {
	    //passing objects ( array of obtions)
        // [] for more than one Valliators
        booktitle: 'Temp',
        itemid: '01',
        description: 'Temp',
        edition: 1,
        course: 'Temp',
        price: 1,
        sellerid: 'Temp',
        category: 'book',
        // picture: 'Temp',
        shipping: 'Temp',
    }
    const mockBook2: itemBook = {
        //passing objects ( array of obtions)
        // [] for more than one Valliators
        booktitle: 'Temp2',
        itemid: '02',
        description: 'Temp2',
        edition: 2,
        course: 'Temp2',
        price: 2,
        sellerid: 'Temp2',
        category: 'book',
        // picture: 'Temp2',
        shipping: 'Temp2',
    }

        const Mock: item[] = [mockBook,mockBook2]

export{ Mock };