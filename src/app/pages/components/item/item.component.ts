import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() itemObject:any;
  
  constructor(private _cart:CartService){}

  addCart(){
    this._cart.add_Cart(this.itemObject);
    
  }
}
