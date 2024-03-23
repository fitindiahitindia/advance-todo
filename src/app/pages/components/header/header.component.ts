import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private _local:LocalstorageService){this.getCartLength()}
  isShowMenu:boolean = false;
  totalCart:any=0;
  showMenu(){
    this.isShowMenu = !this.isShowMenu;
  }
  getCartLength(){
    this.totalCart=this._local.totalItemCart.subscribe((item:any)=>{
      // alert(JSON.stringify(item))
      if(item == null){
      this.totalCart=0;
      }else{
      this.totalCart=item.length
      }
    });
  }
  ngOnInit(){
    this._local.getItems_LocalStorage();
  }
}
