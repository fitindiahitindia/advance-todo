import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/website/layout/layout.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { ProductsComponent } from './pages/website/products/products.component';
import { CartComponent } from './pages/website/cart/cart.component';
import { CheckoutComponent } from './pages/website/checkout/checkout.component';
import { ProductComponent } from './pages/website/product/product.component';
import { WomenComponent } from './pages/website/women/women.component';
import { MenComponent } from './pages/website/men/men.component';
import { ContactComponent } from './pages/website/contact/contact.component';
import { AboutComponent } from './pages/website/about/about.component';
import { LoginComponent } from './pages/website/login/login.component';
import { RegisterComponent } from './pages/website/register/register.component';
import { BlogsComponent } from './pages/website/blogs/blogs.component';

const routes: Routes = [
  {path:'', component:LayoutComponent,children:[
    {path:'',component:LandingComponent, title:"Vicky Store", pathMatch:"full"},
    {path:'product/:id',component:ProductComponent , title:"Product"},
    {path:'products',component:ProductsComponent , title:"Products"},
    {path:'cart',component:CartComponent, title:"Cart"},
    {path:'checkout',component:CheckoutComponent, title:"Checkout"},
    {path:'women',component:WomenComponent, title:"Women"},
    {path:'men',component:MenComponent, title:"Men"},
    {path:'contact',component:ContactComponent, title:"Contact"},
    {path:'about',component:AboutComponent, title:"About"},
    {path:'login',component:LoginComponent, title:"Login"},
    {path:'register',component:RegisterComponent, title:"Register"},
    {path:'blogs',component:BlogsComponent, title:"Blogs"},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
