import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user=new BehaviorSubject(null);
  token:string|any
  constructor(private _HttpClient:HttpClient, private _Router:Router ) { 
    const token = localStorage.getItem('uesrToken');
   
    if (token !== null) {
      this.decodeUser();
    }
  }
  decodeUser(){
    this.token = localStorage.getItem('uesrToken'); 
    this.user.next(this.token)
    // if (token) {
    //   let decodedUserData: any = jwtDecode(token);  
    //   this.user.next(decodedUserData); 
    // } else {
    //   console.error("No valid token found");
    // }
  }

  login(user:object):Observable<any>{
    return this._HttpClient.post('http://localhost:3000/Login',user)
  }
  sinup(user:object):Observable<any>{
    return this._HttpClient.post('http://localhost:3000/sinup',user)
  }
  logOut(){
    localStorage.removeItem('uesrToken');
    localStorage.removeItem('uesrToke');
    this.user.next(null);
this._Router.navigate(['/login'])
  }
 
}
