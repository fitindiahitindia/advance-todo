import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent {
 @Input() InputData:any;
 @Input() DataTitle:any;

 itemObj=new Object();
 
 
 ngOnInit(){

 }
}
