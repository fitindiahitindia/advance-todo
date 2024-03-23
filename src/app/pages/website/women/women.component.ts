import { Component } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {
  womenObj=[
    {
      name:"button tweed blazer",
      ratting:5,
      price:450,
      currency:"inr",
      image:"url(../../../../assets/img/product/product-1.jpg)"
    },
    {
      name:"button tweed blazer",
      ratting:5,
      price:450,
      currency:"inr",
      image:"url(../../../../assets/img/product/product-1.jpg)"
    },
    {
      name:"button tweed blazer",
      ratting:5,
      price:450,
      currency:"inr",
      image:"url(../../../../assets/img/product/product-1.jpg)",
      label:"sale"
    },
    {
      name:"button tweed blazer",
      ratting:5,
      price:450,
      currency:"inr",
      image:"url(../../../../assets/img/product/product-1.jpg)",
      label:'stockout'
    },
    {
      name:"button tweed blazer",
      ratting:5,
      price:450,
      currency:"inr",
      image:"url(../../../../assets/img/product/product-1.jpg)",
      label:"new"
    },
  ]
}
