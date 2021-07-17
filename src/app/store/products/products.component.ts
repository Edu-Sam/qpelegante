import {Component} from "@angular/core";
import {ModelModule} from "../../model/model.module";
import {ProductRepository} from "../../model/product.repository";
import {Cart} from "../../model/cart.model";
import {Router} from "@angular/router";

@Component({
selector: 'product-dashboard',
template:'products.component.html',
styleUrls: ['products.component.sass'],
})

export class ProductsComponent{
  constructor(private productRepository: ProductRepository,private cart:Cart,private router:Router){
  
  }


}
