import {Component} from "@angular/core";
import{Router,ActivatedRoute} from "@angular/router";
import {Product} from "../../model/product.model";
import {ProductRepository} from "../../model/product.repository";


@Component({
  selector: 'product_detail',
  templateUrl:'product_detail.component.html',
  styleUrls:['product_detail.component.sass']
})

export class ProductDetailComponent{
viewing: boolean=false;
product: Product=new Product();

constructor(private repository: ProductRepository,private router: Router,activateRoute: ActivatedRoute){
  this.viewing=activateRoute.snapshot.params["mode"]=="view";
  if(this.viewing){
    Object.assign(this.product,repository.getProduct(activateRoute.snapshot.params['id']));
  }
}
}
