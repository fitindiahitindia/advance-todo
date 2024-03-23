import { EventEmitter, Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private _localStorage:LocalstorageService,private toastr: ToastrService) { }
  
  add_Cart(item:any,sign?:string){
    let local:any = [];
    let getalldata = this._localStorage.getItems_LocalStorage();

    if (getalldata <= 0) {
      this._localStorage.setItems_LocaStorage([item]);
      this._localStorage.getItems_LocalStorage();
      this.toastr.success('Add To Cart',);
    } else {
      let getalldata = this._localStorage.getItems_LocalStorage();
      let isExist = this._localStorage.checkItem_LocalStorage(item.id);
      if (isExist.length == 0) {
        for (let i = 0; i < getalldata.length; i++) {
          local.push(getalldata[i]);
        }
        local.push(item);
        this._localStorage.setItems_LocaStorage(local);
        this._localStorage.getItems_LocalStorage();
        this.toastr.success('Add To Cart',);
      }
    }
  }
  view_Cart(){
    let getalldata = this._localStorage.getItems_LocalStorage();
    return getalldata;
  }
  deleteItem_Cart(id:any){
    let getalldata = this._localStorage.getItems_LocalStorage();
      if (getalldata) {
        let items:any = getalldata;
        items = items.filter((item: any) => {
          return id !== item.id;
        });
        this._localStorage.setItems_LocaStorage(items);
        // this.totalItemCart.emit()
      }
  }
  update_Cart(){}
  itemPrice_Cart(){}
  totalPrice_Cart(){
    let getalldata = this._localStorage.getItems_LocalStorage();
    let totalPrice = 0;
    for(let i=0;i<getalldata.length;i++){
      totalPrice +=getalldata[i].price*getalldata[i].quantity
    }
    return totalPrice
  }
  subtotal_Cart(){}
  totalQuantity_Cart(){
  return this._localStorage.totalItem_LocalStorage();
  }
  addRemoveQuantity_Cart(item:any,sign:string){
    let local = [];
    let getalldata = this._localStorage.getItems_LocalStorage();
   for(let i=0;i<getalldata.length;i++){
    local.push(getalldata[i])
   }
   if(sign=="++"){
    for(let i=0;i<local.length;i++){
      if(local[i].id == item){
        if(local[i].quantity >= 1){
          
          local[i].quantity++;
        }
      }
     }
   }else{
    for(let i=0;i<local.length;i++){
      if(local[i].id == item){
        if(local[i].quantity != 1){
          local[i].quantity--;
        }
      }
     }
   }
   
   this._localStorage.setItems_LocaStorage(local)
  }
 
}
