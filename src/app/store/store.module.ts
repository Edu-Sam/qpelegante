import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from "@angular/router";
import {ModelModule} from "../model/model.module";
import {CheckoutComponent} from "./checkout/checkout.component";

@NgModule({
  imports:[BrowserModule,FormsModule,RouterModule,ModelModule],
  declarations:[DashboardComponent,CheckoutComponent],
  exports:[DashboardComponent],
})

export class StoreModule{

}
