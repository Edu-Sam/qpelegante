import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./store/dashboard.component";
import {ProductDetailComponent} from "./store/products/product_detail.component";
import {ProductComponent} from "./store/products/products.component";

const routes: Routes = [
{path:'dashboard',component:DashboardComponent,
children:[
  {path:'products',component:ProductComponent},
  {path:'products/:mode/:id',component:ProductDetailComponent},
  {path:'products/:mode',component:ProductDetailComponent},
  {path:"**",redirectTo:'products'}
],},
{path:"**",redirectTo:'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
