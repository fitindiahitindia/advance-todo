import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations  } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './pages/website/layout/layout.component';
import { ProductsComponent } from './pages/website/products/products.component';
import { CartComponent } from './pages/website/cart/cart.component';
import { CheckoutComponent } from './pages/website/checkout/checkout.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RelatedProductComponent } from './pages/components/related-product/related-product.component';
import { TabViewModule } from 'primeng/tabview';
import { ToastrComponentlessModule, ToastrModule, provideToastr } from 'ngx-toastr';
import { ProductComponent } from './pages/website/product/product.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ProductCategoryComponent } from './pages/components/product-category/product-category.component';
import { WomenComponent } from './pages/website/women/women.component';
import { MenComponent } from './pages/website/men/men.component';
import { ContactComponent } from './pages/website/contact/contact.component';
import { AboutComponent } from './pages/website/about/about.component';
import { FaqComponent } from './pages/website/faq/faq.component';
import { LoginComponent } from './pages/website/login/login.component';
import { RegisterComponent } from './pages/website/register/register.component';
import { BlogsComponent } from './pages/website/blogs/blogs.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { ItemComponent } from './pages/components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    LandingComponent,
    RelatedProductComponent,
    ProductComponent,
    ProductCategoryComponent,
    WomenComponent,
    MenComponent,
    ContactComponent,
    AboutComponent,
    FaqComponent,
    LoginComponent,
    RegisterComponent,
    BlogsComponent,
    HeaderComponent,
    FooterComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    TabViewModule,
    LoadingBarModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    ToastrModule.forRoot({
    timeOut: 1000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
