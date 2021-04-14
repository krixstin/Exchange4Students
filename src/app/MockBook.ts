import {item} from './Item';
import {itemSport} from './ItemSport';
import {itemBook} from './ItemBook';
import {itemClothing} from './ItemClothing';
import {itemElectronic} from './ItemElectronic';
import {itemFurniture} from './ItemFurniture';



    const mockBook: itemBook = {
	    //passing objects ( array of obtions)
        // [] for more than one Valliators
        booktitle: 'Temp booktitle',
        itemID: '01',
        description: 'Temp descrip',
        edition: 101,
        course: 'Temp course',
        price: 102,
        sellerid: 'Temp sllerid',
        category: 'books',
        // picture: 'Temp',
        shipping: 'Temp shipping',
    }
    const mockBook2: itemBook = {
        //passing objects ( array of obtions)
        // [] for more than one Valliators
        booktitle: 'Temp2 booktitle',
        itemID: '02',
        description: 'Temp2 descrip',
        edition: 201,
        course: 'Temp2 course',
        price: 202,
        sellerid: 'Temp2 sellerid',
        category: 'books',
        // picture: 'Temp2',
        shipping: 'Temp2 shipping',
    }
    const mockSport: itemSport = {
        itemID: '03',
        description: 'Temp3 descrip',
        price:301,
        sellerid: 'Temp3 sellerid',
        category: 'sportsgear',
        shipping: 'Temp3 shipping',
        type: 'Temp3 type',
        weight: 302
    }
    const mockElectronic: itemElectronic = {
        itemID: '04',
        description: 'Temp4 descrip',
        price:401,
        sellerid: 'Temp4 sellerid',
        category: 'electronics',
        shipping: 'Temp4 shipping',
        type: 'Temp4 type',
        model: 'Temp4 model',
        
    }
    const mockFurniture: itemFurniture = {
        itemID: '05',
        description: 'Temp5 descrip',
        price:501,
        sellerid: 'Temp5 sellerid',
        category: 'furniture',
        shipping: 'Temp5 shipping',
        type: 'Temp5 type',
        weight: 501,
        color: 'Temp5 color',
        dimension: '5 dim',

    }
    const mockClothing: itemClothing = {
        itemID: '06',
        description: 'Temp6 descrip',
        price:601,
        sellerid: 'Temp6 sellerid',
        category: 'clothing',
        shipping: 'Temp6 shipping',
        type: 'Temp6 type',
        size: 'Temp6 size',
        color: 'Temp6 color'
    }

        const Mock: item[] = [mockBook,mockBook2,mockSport,mockElectronic,mockFurniture,mockClothing]

export{ Mock };