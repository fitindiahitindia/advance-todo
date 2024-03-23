import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }
  URL = "http://localhost:5000/api/v1";

  get_product(){
   return this._http.get(this.URL+"/product");
  }
  get_singleproduct(id:any){
    return this._http.get(this.URL+"/product/"+id);
  }

}
