import { Component } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cart } from '../../model/cart';
import { CartService } from '../../Service/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isload:boolean=false
  cartlength:any
  constructor(private _Auth:AuthService,private _Cart:CartService){
    _Cart.Cartnum.subscribe({
      next:(res)=>{
this.cartlength=res
      }
    })
  _Auth.user.subscribe({
    next:()=>{
  if(_Auth.user.getValue() !==null){
  this.isload=true
  }else{
    this.isload=false;
  }
    }
  })
  }
  
  logOut(){
    this._Auth.logOut();
  }
  
}
