import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports:[BrowserModule,FormsModule,RouterModule],
  declarations:[DashboardComponent],
  exports:[DashboardComponent],
})

export class StoreModule{

}
