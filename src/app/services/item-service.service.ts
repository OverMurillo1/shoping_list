import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  items: Item[] = [];
  constructor() { }

  getItems(){
    this.items = [
      {
        id: 0,
        title: 'Manzana',
        price: 10.5,
        quantity: 4,
        completed: false
      },
      {
        id: 1,
        title: 'Pan',
        price: 3.5,
        quantity: 5,
        completed: true
      },
      {
        id: 2,
        title: 'Pantalon',
        price: 1.5,
        quantity: 1,
        completed: true
      },
    ];
    return this.items;
  }

  addItem( item: Item ){
    this.items.unshift(item);
  }


}
