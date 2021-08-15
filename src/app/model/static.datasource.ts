import {Injectable} from "@angular/core";
import {Product} from "./product.model";
import {Observable,from} from "rxjs";
import {Color} from './product.model';
import {Size} from './product.model';
//import { Order } from "./order.model";

@Injectable()
export class StaticDataSource{
private products:Product[]=[
new Product(1,"dress1","dresses","assets/images/dress1.jpg","Dresses 1(dresses)",
new Color('blue',false,true),new Size('XL',false,true),100),
new Product(2,"dress2","dresses","assets/images/dress2.jpg","Dresses 2(dresses)",
new Color("brown",false,true),new Size('L',false,true),100),
new Product(3, "dress3", "dresses","assets/images/dress3.jpg", "Dresses 3(Dresses)",
new Color('red',false,true),new Size('XL',false,true), 100),
new Product(4, "dress4", "dresses","assets/images/dress4.jpg", "Dresses 4(dresses)",
new Color('orange',false,true) ,new Size('M',false,true,),100)
];
getProducts(): Observable<Product[]>{
  return from([this.products]);
}

/*saveOrder(order: Order):Observable<Order>{
  console.log(JSON.stringify(order));
  return from([order]);
}*/

}
