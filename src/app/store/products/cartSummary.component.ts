import {Component} from "@angular/core";
import {Cart} from "../../model/cart.model";

@Component({
  selector:"cart-Summary",
  templateUrl:"cartSummary.component.html",
  styleUrls:["cartSummary.component.html"]
})

export class CartSummaryComponent{

  constructor(public cart:Cart){

  }
}
