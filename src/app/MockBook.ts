import {item} from './Item';
import {itemSport} from './ItemSport';
import {itemBook} from './ItemBook';
import {itemClothing} from './ItemClothing';
import {itemElectronic} from './ItemElectronic';
import {itemFurniture} from './ItemFurniture';



    const mockBook: itemBook = {
        //passing objects ( array of obtions)
        // [] for more than one Valliators
        title: 'Temp booktitle',
        itemID: '01',
        description: 'Temp descrip',
        edition: 101,
        course: 'Temp course',
        price: 102,
        sellerid: 'Temp sllerid',
        category: 'books',
        picture: 'Temp',
        shipping: 'Temp shipping',
    }
    const mockBook2: itemBook = {
        //passing objects ( array of obtions)
        // [] for more than one Valliators
        title: 'Temp2 booktitle',
        itemID: '02',
        description: 'Temp2 descrip',
        edition: 201,
        course: 'Temp2 course',
        price: 202,
        sellerid: 'Temp2 sellerid',
        category: 'books',
        picture: 'Temp2',
        shipping: 'Temp2 shipping',
    }
    const mockBook3: itemBook = {
        //passing objects ( array of obtions)
        // [] for more than one Valliators
        title: 'Temp3 booktitle',
        itemID: '03',
        description: 'Temp3 descrip',
        edition: 301,
        course: 'Temp3 course',
        price: 302,
        sellerid: 'Temp3 sellerid',
        category: 'books',
        picture: 'Temp2',
        shipping: 'Temp3 shipping',
    }
    const mockBook4: itemBook = {
        //passing objects ( array of obtions)
        // [] for more than one Valliators
        title: 'Temp4 booktitle',
        itemID: '04',
        description: 'Temp4 descrip',
        edition: 401,
        course: 'Temp4 course',
        price: 402,
        sellerid: 'Temp4 sellerid',
        category: 'books',
        picture: 'Temp2',
        shipping: 'Temp4 shipping',
    }
    const mockBook5: itemBook = {
        //passing objects ( array of obtions)
        // [] for more than one Valliators
        title: 'Temp5 booktitle',
        itemID: '05',
        description: 'Temp5 descrip',
        edition: 501,
        course: 'Temp5 course',
        price: 502,
        sellerid: 'Temp5 sellerid',
        category: 'books',
        picture: 'Temp2',
        shipping: 'Temp5 shipping',
    }
    const mockSport: itemSport = {
        itemID: '06',
        description: 'Temp3 descrip',
        price:301,
        sellerid: 'Temp3 sellerid',
        category: 'sportsgear',
        shipping: 'Temp3 shipping',
        picture: 'Temp2',
        title: 'Temp3 type',
        weight: 302
    }
    const mockElectronic: itemElectronic = {
        itemID: '07',
        description: 'Temp4 descrip',
        price:401,
        sellerid: 'Temp4 sellerid',
        category: 'electronics',
        shipping: 'Temp4 shipping',
        picture: 'Temp2',
        title: 'Temp4 type',
        model: 'Temp4 model',
        
    }
    const mockFurniture: itemFurniture = {
        itemID: '08',
        description: 'Temp5 descrip',
        price:501,
        sellerid: 'Temp5 sellerid',
        category: 'furniture',
        shipping: 'Temp5 shipping',
        title: 'Temp5 type',
        weight: 501,
        color: 'Temp5 color',
        picture: 'Temp2',
        dimension: '5 dim',

    }
    const mockClothing: itemClothing = {
        itemID: '09',
        description: 'Temp6 descrip',
        price:601,
        sellerid: 'Temp6 sellerid',
        category: 'clothing',
        shipping: 'Temp6 shipping',
        title: 'Temp6 type',
        size: 'Temp6 size',
        picture: 'Temp2',
        color: 'Temp6 color'
    }

    const Mock: item[] = [mockBook,mockBook2,mockBook3,mockBook4,mockBook5,mockSport,mockElectronic,mockFurniture,mockClothing]

export{ Mock };