import {Component} from "@angular/core";
import {Cart} from "../../model/cart.model";

@Component({
selector:'checkout',
templateUrl:'checkout.component.html',
styleUrls:['checkout.component.sass']
})

export class CheckoutComponent{
  constructor(public cart:Cart){}


}
