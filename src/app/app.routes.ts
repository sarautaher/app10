import { Routes } from '@angular/router';
import { HomeComponent } from './compenent/home/home.component';
import { LoginComponent } from './compenent/login/login.component';
import { SinupComponent } from './compenent/sinup/sinup.component';
import { ProductsComponent } from './compenent/products/products.component';
import { ProductDetailsComponent } from './compenent/product-details/product-details.component';
import { CartComponent } from './compenent/cart/cart.component';
import { AddtoCartComponent } from './compenent/addto-cart/addto-cart.component';
import { NotFoundComponent } from './compenent/not-found/not-found.component';
import { authGuard } from './Guard/auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'}
    ,{path:'home',component:HomeComponent,canActivate:[authGuard], title:'home'},
    {path:'login', component:LoginComponent,title:'sinin'},
    {path:'Sinup', component:SinupComponent,title:'Sinup'},
    {path:'products', component:ProductsComponent,title:'Products',canActivate:[authGuard]},
    {path:'ProductDetails/:id', component:ProductDetailsComponent,title:'ProductDetails',canActivate:[authGuard]},
    {path:'cart', component:CartComponent,title:'Cart',canActivate:[authGuard]},
    {path:'AddTocart/:id', component:AddtoCartComponent,title:'AddTocart',canActivate:[authGuard]},
    {path:'**', component:NotFoundComponent,title:'NotFound',canActivate:[authGuard]}
];
