import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartall:any[]=[]
  cartveiw:any
constructor( private _CartService:CartService,private toastr: ToastrService){}
ngOnInit(): void {
    this.getcartAll()
}
getcartAll(){
  document.getElementById('cart')?.classList.remove("d-none")
  document.getElementById('Veiw')?.classList.add("d-none")
 this._CartService.getcart().subscribe({
  next:(res)=>{
    this.cartall=res
  },error:(err)=>{
console.log(err)
  }
 })
}
DeleteCart(id:any){
  this._CartService.Deletecart(id).subscribe({
    next:(res)=>{
this.toastr.success("Success Delete in Cart")
console.log(res)
    }
  })
}

}
