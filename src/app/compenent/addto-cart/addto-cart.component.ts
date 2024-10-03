import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../Service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addto-cart',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './addto-cart.component.html',
  styleUrl: './addto-cart.component.css'
})
export class AddtoCartComponent {
  constructor(private _FormB:FormBuilder,private _CartService:CartService,private toastr: ToastrService){

  }
  @Input() productId: number | undefined;
  @Input() img: string | undefined;
 // productId:number|any
  Number:number[]=Array.from({length:2000},(_, index) => index + 1)
  date:any
  user: FormGroup|any;
  ngOnInit(): void {
    let datetime=new Date()
    this.date=datetime.toLocaleDateString()
this.user=new FormGroup({
  img:new FormControl(this.img),
  date: new FormControl(this.date),
  products:this._FormB.group({
    productId:new FormControl(this.productId),
    quantity:new FormControl(null,[Validators.required])
  })
})
}
  addnew(cart:FormGroup): void {
    console.log(cart.value)
    this._CartService.addToCart(cart.value).subscribe({
      next:(res)=>{
        this.toastr.success("Success Add to Cart")
console.log(res)
console.log(cart.value)
      }
      ,error:(err)=> {
        this.toastr.error(err)
      },
    })

}

}
