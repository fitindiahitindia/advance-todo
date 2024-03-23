import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    center:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  constructor(private toastr: ToastrService,private activeRoute:ActivatedRoute,private _product:ProductService){}
  activeIndex:number=0;
  // addToCart(){
  //   this.toastr.success('Add To Cart',);
  // }

  relativeProObj=[
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

  getProductByIdVar:any=[];
  proQuan:number = 1;
  isLoading:boolean=false;
  isStatus:boolean=true;
  isCartSuccess:boolean=false;
  math=Math
  isProductLoader:boolean=true;
  getProductRouterId:any=""
  productDetail={
    "_id":"",
    "pId":"",
    "name":"",
    "type":"",
    "image":"",
    "quantity":"",
    "price":0,
    "oldPrice":0,
    "noItems":1,
    "discount":0
  }
  product_Quantity='100g'
 getRouteId(){
    const productId= this.activeRoute.snapshot.paramMap.get('id');
    this.getProductRouterId = productId;
    return productId;
  }
  getProduct():void{
   this.getProductByIdVar=this._product.get_product();
  } 
  getSingleProduct(){
    let getId=this.getRouteId();
    this._product.get_singleproduct(getId).subscribe((res:any)=>{
      this.isProductLoader=false;
      this.getProductByIdVar=res.data;
      this.productDetail._id=this.getProductByIdVar._id
      this.productDetail.pId=this.getProductByIdVar.pId
      this.productDetail.name=this.getProductByIdVar.name
      this.productDetail.type=this.getProductByIdVar.type
      this.productDetail.image=this.getProductByIdVar.image
      this.productDetail.price=this.getProductByIdVar.price
      this.productDetail.quantity=this.getProductByIdVar.quantity
      this.productDetail.oldPrice=this.getProductByIdVar.oldPrice
      this.productDetail.discount=this.getDiscount()
    });
  }
  changeVarity(varity:number){
    let produtVarity;
    produtVarity=this.getProductByIdVar.p_u[varity];

    this.productDetail.quantity=produtVarity.quan;
    this.productDetail.price=produtVarity.price;
    this.productDetail.oldPrice=produtVarity.oldPrice;
  }
  
  // addToCart(){
  //  this.isLoading=true;
  //  this.isCartSuccess=true;
  //  this._product.localCart(this.productDetail);
  //  this.isLoading=false;
  //  setTimeout(() => {
  //    this.isCartSuccess=false;
    
  //  }, 3000);
  // }

  // increase and decrease quantity
  manageQuan(arg:string){
    if(arg=='plus'){
     this.proQuan++;
    }else if(arg=='minus' && this.proQuan > 1){
     this.proQuan--;
    }
  }

  getDiscount(){
    let discount=( this.productDetail.oldPrice -  this.productDetail.price) /  this.productDetail.oldPrice;
    this.productDetail.discount = discount*100;
    return discount * 100; 
  }
  
 
 isReviewMsg:boolean = false;
 rattingArr:number[]=[1,2,3,4,5];
 reviewMessage:string="";
//  submitReview(values:review){
//   const reviewObj:review={
//     productId:this.getRouteId(),
//     name:values.name,
//     email:values.email,
//     phone:values.phone,
//     ratting:values.ratting,
//     rattingMsg:values.rattingMsg,
//   }
//   this._product.setReview(reviewObj).subscribe((res:any)=>{
//     this.reviewMessage=res.message;
//     this.isReviewMsg=true;
//     setTimeout(() => {
//       this.isReviewMsg=false;
//     }, 4000);
//   },(error)=>{this.reviewMessage=error.error;})
  
//  }


  ngOnInit(){
   this.getRouteId()
   this.getProduct()
   this.getSingleProduct();
   this.getDiscount();
  }
}
