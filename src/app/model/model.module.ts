import {NgModule} from "@angular/core";
import {Cart} from "./cart.model";
import {ProductRepository} from "./product.repository";
import {StaticDataSource} from "./static.datasource";


@NgModule({
  providers:[Cart,ProductRepository,StaticDataSource]
})

export class ModelModule{
  
}
