import { Component } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sinup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './sinup.component.html',
  styleUrl: './sinup.component.css'
})
export class SinupComponent {
  err:string='';
  constructor(private _AuthService:AuthService,private _FormB:FormBuilder,private toastr: ToastrService){
  
  
  }
  user: FormGroup = this._FormB.group({
    email: new FormControl(null, [Validators.required, Validators.email]),
    username: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(3)]),
    password: new FormControl(null, [Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]),
    name: this._FormB.group({
      firstname: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(3)]),
      lastname: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(3)])
    }),
    address: this._FormB.group({
      city: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(3)]),
      street: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z]*$/)]),
      number: new FormControl(null, [Validators.required]),
      zipcode: new FormControl(null, [Validators.required]),
      geolocation: this._FormB.group({
        lat: new FormControl(null, [Validators.required]),
        long: new FormControl(null, [Validators.required])
      })
    }),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  });
  sinUp(user:FormGroup){
    if(user.value){
    this._AuthService.sinup(user.value).subscribe({
      next:(res)=>{ 
        localStorage.setItem('uesrToke',res.id);
        this.toastr.success(`Suesss Add To User${res.id}!`);
      
      }
      ,error:(err)=>{
        this.toastr.error(err.message)
      }
    })}
  }
}
