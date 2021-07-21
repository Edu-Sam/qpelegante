import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from "@angular/router";
import {ModelModule} from "../model/model.module";

@NgModule({
  imports:[BrowserModule,FormsModule,RouterModule,ModelModule],
  declarations:[DashboardComponent],
  exports:[DashboardComponent],
})

export class StoreModule{

}
