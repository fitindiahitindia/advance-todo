import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private _cart:CartService,private toastr:ToastrService){}
  cartTotalQuantity:number=0;
  cartSubtotal:number=0;
  cartTotal:number=0;
  cartItems:any=[];
  cartItemTotal:number=0;
  totalQuantity(){
   this.cartTotalQuantity=this._cart.totalQuantity_Cart();
   }
  totalPrice(){
   this.cartTotal = this._cart.totalPrice_Cart();
  }
  viewCart(){
    this.cartItems = this._cart.view_Cart();
  }
  incDecQuantity(item:any,sign:string){
    this._cart.addRemoveQuantity_Cart(item,sign);
    this.viewCart();
    this.totalQuantity();
    this.totalPrice();
  }
  removeItemCart(id:any){
    this._cart.deleteItem_Cart(id);
    this.viewCart();
    this.totalQuantity();
    this.totalPrice();
    this.toastr.success('Delete Item To Cart',);
  }

   ngOnInit(){
    this.viewCart();
    this.totalQuantity();
    this.totalPrice();
   }
}
