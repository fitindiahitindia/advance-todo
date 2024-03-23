import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrl: './related-product.component.css'
})
export class RelatedProductComponent {
 @Input() relativeProObject:any;
 @Input() DataTitle:any;
 
}
