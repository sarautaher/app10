import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  userId:any
  constructor( private _HttpClient:HttpClient) {
   }
   getcart():Observable<any>{
    return this._HttpClient.get("http://localhost:3000/Cart")
   }
   addToCart(user: object):Observable<any>{
    return this._HttpClient.post("http://localhost:3000/Cart",user)
   }
  
  getveiw(id:number):Observable<any>{
    return this._HttpClient.get(`http://localhost:3000/Cart/${id}`)
  }
  Deletecart(id:any):Observable<any>{
    return this._HttpClient.delete(`http://localhost:3000/Cart/${id}`)
  }
 

}
