import { Component } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isload:boolean=false
  constructor(private _Auth:AuthService){
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
