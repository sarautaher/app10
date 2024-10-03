import { Component } from '@angular/core';
import { ProductsService } from '../../Service/products.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AddtoCartComponent } from '../addto-cart/addto-cart.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,AddtoCartComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  Category:any[]=[]
  products:any[]=[];
 
  ngOnInit(): void {
   this.getproducts();
   this.getprodctsCategoryAll();
  }
  

  constructor(private _ProductsService:ProductsService,private toaster:ToastrService){}
  getproducts(){
    this._ProductsService.getProduct().subscribe({
      next:(res)=>{
        this.products=res
      },error:(err)=>{
      this.toaster.error(err)
      }
    })
  }
  getCategory(category:any){
    this._ProductsService.getProductCategory(category).subscribe({
      next:(res)=>{ 
        this.products=res
      } ,error:(err)=>{
        this.toaster.error(err)
      }
    })
  }
getCategoryone(event:any){
let category=event.target.value;
(category=='All')?this.getproducts():this.getCategory(category)
 }
  getprodctsCategoryAll(){
    this._ProductsService.getProductCategoryAll().subscribe({
      next:(res)=>{ console.log(res)
        this.Category=res;
      }
      ,error:(err)=>{
        this.toaster.error(err)
      }
    })
  }
}
