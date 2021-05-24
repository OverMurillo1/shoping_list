import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemServiceService } from 'src/app/services/item-service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  id !: number;
  title!: string;
  price!: number;
  quantity!: number;
  array: any;

  constructor(
    private itemService: ItemServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    this.itemService.addItem(item);
    this.router.navigate(['/'])
  }

  onKeyPress( event: any ){
    const regexNumber = /[0-9\+\-\ ]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if(event.keycode != 8 && !regexNumber.test(inputCharacter)){
      event.preventDefault();
    }
  }
}
