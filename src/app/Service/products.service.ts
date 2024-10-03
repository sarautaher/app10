import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }
  getProduct():Observable<any>{
    return this._HttpClient.get('https://fakestoreapi.com/products')
  }
  getProductCategoryAll():Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products/categories`)
  } 
  getProductCategory(category:any):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products/category/${category}`)
  }
  getProductDetails(id:number):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products/${id}`)
  }
}
