import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from "@angular/router";
import {ModelModule} from "../model/model.module";
import {CheckoutComponent} from "./checkout/checkout.component";
import {ProductDetailComponent} from "./products/product_detail.component";
import {ProductComponent} from "./products/products.component";
import {CartSummaryComponent} from "./products/cartSummary.component";

@NgModule({
  imports:[BrowserModule,FormsModule,RouterModule,ModelModule],
  declarations:[DashboardComponent,CheckoutComponent,ProductDetailComponent,ProductComponent,
  CartSummaryComponent],
  exports:[DashboardComponent,ProductDetailComponent,ProductComponent],
})

export class StoreModule{

}
