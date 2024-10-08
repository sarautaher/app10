import { Cart } from './../model/cart';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Cartnum=new BehaviorSubject(null);

  userId:any
  constructor( private _HttpClient:HttpClient) {
   }
   getcart():Observable<Cart[]>{
    return this._HttpClient.get<Cart[]>("http://localhost:3000/Cart")
   }
   addToCart(user: object):Observable<Cart[]>{
    return this._HttpClient.post<Cart[]>("http://localhost:3000/Cart",user)
   }
  
  getveiw(id:number):Observable<Cart[]>{
    return this._HttpClient.get<Cart[]>(`http://localhost:3000/Cart/${id}`)
  }
  Deletecart(id:any):Observable<Cart[]>{
    return this._HttpClient.delete<Cart[]>(`http://localhost:3000/Cart/${id}`)
  }
 

}
