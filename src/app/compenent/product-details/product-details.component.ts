import { Component } from '@angular/core';
import { ProductsService } from '../../Service/products.service';
import { ActivatedRoute } from '@angular/router';
import { AddtoCartComponent } from '../addto-cart/addto-cart.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [AddtoCartComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  id:any;
  ProductDetails:any
  constructor(private _ProductsService:ProductsService, private _ActivatedRoute:ActivatedRoute){
    
  }
ngOnInit(): void {
   this._ActivatedRoute.paramMap.subscribe((params)=>{
    this.id=params.get('id')
   }) 
   this.getDetails(this.id)
  }
  getDetails(id:any){
   this._ProductsService.getProductDetails(id).subscribe({
    next:(res)=>{
      this.ProductDetails=res;
    },error:(err)=>{
      console.log(err)
    }
   })
  }
}
