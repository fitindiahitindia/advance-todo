import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prime';
  date: Date | undefined;
  getRouter:any=undefined;
  constructor(private router:Router){}
  breadcrumb(){
   this.getRouter=this.router.url;
   console.log(this.getRouter)
  }
  ngOnInit(){
    this.breadcrumb();

  }
}
