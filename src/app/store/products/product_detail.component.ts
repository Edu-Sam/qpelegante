import {Component} from "@angular/core";
import{Router,ActivatedRoute} from "@angular/router";
import {Product} from "../../model/product.model";
import {Size} from "../../model/product.model";
import {ProductRepository} from "../../model/product.repository";
import {Color} from "../../model/product.model";


@Component({
  selector: 'product_detail',
  templateUrl:'product_detail.component.html',
  styleUrls:['product_detail.component.sass']
})

export class ProductDetailComponent{
viewing: boolean=false;
product: Product=new Product();
public colors: Color=new Color();
selected_size:Size=new Size();

constructor(private repository: ProductRepository,private router: Router,activateRoute: ActivatedRoute){
  this.viewing=activateRoute.snapshot.params["mode"]=="view";
  if(this.viewing){
    Object.assign(this.product,repository.getProduct(activateRoute.snapshot.params['id']));
    this.colors=this.product.color;
  }
}

setProductContainerStyle(userProduct: String){
  return{
    'background':'url( ' + userProduct + ')' ,
//    'background-image': 'url(assets/images/dress3.jpg)',
    'background-size':'contain',
//    'background-size':'180px 210px',
    'background-position':'center',
    'background-repeat': 'no-repeat',
    'height':'300px',
    //'width':'250px',
    'align-items':'center'
  }
}

/*get getSizes(): Size[]{
  return this.product.sizes;
}

 get getcolors(): Color[]{
  return this.product.color;
}*/

setSize(size: Size){
 if(size!=undefined){
   this.selected_size=size;
 }
}

setContainerColor(color: String){
  return{
    'background-color':''+color+'',
    'width':'30px',
    'height':'30px',
  //  'box-shadow':'4px 8px 4px rgba(212,212,212,1)'
  }
}

}
