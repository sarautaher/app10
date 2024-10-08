import { Component } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _AuthService:AuthService ,private _Router:Router,private toastr: ToastrService){

  }
 User:FormGroup=new FormGroup({
    username:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z]/)]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]),
  });
login(user : FormGroup){
  if(user.valid){
    this._AuthService.login(user.value).subscribe({
      next:(res)=>{
          localStorage.setItem('uesrToken',res.id);
          this._AuthService.decodeUser()
          this._Router.navigate(['/products'])
          this.toastr.success(`Helle in webstie`)
      },
    error:(err)=>{
      this.toastr.error(err);

    }
  }
 )
  }}
}
