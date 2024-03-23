import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { item } from '../../interface/item';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };

  getrandomid() {
    let random = Math.floor( Math.random()  * 9999999999);
    return random;  
  }

  itemObj:item[] = [
    {
      id:500,
      image: 'url(../../../../assets/img/product/product-1.jpg)',
      name: 'Buttons tweed blazer',
      price: 100,
      quantity:1,
      status:true,
    },
    {
      id:874,
      image: 'url(../../../../assets/img/product/product-2.jpg)',
      name: 'Flowy striped skirt',
      price: 200,
      quantity:1,
      status:true,
    },
    {
      id:352,
      image: 'url(../../../../assets/img/product/product-3.jpg)',
      name: 'Slim striped pocket shirt',
      price: 300,
      quantity:1,
      status:true,
    },
    {
      id:987,
      image: 'url(../../../../assets/img/product/product-4.jpg)',
      name: 'Slim striped pocket shirt',
      price: 400,
      quantity:1,
      status:true,
    },
    {
      id:524,
      image: 'url(../../../../assets/img/product/product-5.jpg)',
      name: 'Fit micro corduroy shirt',
      price: 200,
      quantity:1,
      status:true,
    },

  ];
}
