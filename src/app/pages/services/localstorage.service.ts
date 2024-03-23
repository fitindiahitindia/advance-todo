import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  private key = 'vickyCart';
  constructor() {}
  totalItemCart = new EventEmitter<[]>();

  checkItem_LocalStorage(id:any) {
    let getalldata = this.getItems_LocalStorage();
    if (getalldata.length > 0) {
      let isExist = getalldata.filter((val: any) => {
        return val.id == id;
      });
      return isExist;
    } else {
      alert('local storage is empty');
    }
  }
  setItems_LocaStorage(item: any) {
    localStorage.setItem(this.key, JSON.stringify(item));
  }
  getItems_LocalStorage() {
    var getalldata = JSON.parse(localStorage.getItem('vickyCart')!);
    if (getalldata != null) {
      this.totalItemCart.emit(getalldata);
      return getalldata;
    } else {
      this.totalItemCart.emit([]);
      return 0;
    }
  }
  edit_LocalStorage() {}
  delete_LocalStorage() {}
  deleteAll_LocalStorage() {}
  totalItem_LocalStorage() {
    let getalldata = this.getItems_LocalStorage();
    return getalldata.length;
  }
  totalQuantity_LocalStorage() {}
}
