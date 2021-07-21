import {Component} from "@angular/core";
import {Product} from "../model/product.model";
import {ProductRepository} from "../model/product.repository";
import {Cart } from "../model/cart.model";
import {Router} from "@angular/router";



@Component({
selector: "dashboard",
templateUrl:"dashboard.component.html",
styleUrls:['dashboard.component.sass']
})

export class DashboardComponent{
  public selectedCategory: string | undefined;
  public productsPerPage=4;
  public selectedPage=1;

  constructor(private repository: ProductRepository,private cart: Cart,private router: Router){}

  get products():Product[]{
  /**  return this.repository.getProducts();
      return this.repository.getProducts(this.selectedCategory);**/
      let pageIndex=(this.selectedPage - 1) * this.productsPerPage
      return this.repository.getProducts(this.selectedCategory).slice(pageIndex,pageIndex + this.productsPerPage);
  }

  get categories():string[]{
    return this.repository.getCategories();
  }

  changeCategory(newCategory?:string){
    if(newCategory!=undefined){
      this.selectedCategory=newCategory;
    }
    else{
      this.selectedCategory='';
    }
  }

  changePage(newPage: number){
    this.selectedPage=newPage;
  }

  changePageSize(newSize: number){
    this.productsPerPage=Number(newSize);
    this.changePage(1);

  }

  get pageCount():number{
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage)
  }

  /**get pageNumbers():number[]{
    return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage))
           .fill(0).map((x,i)=>i + 1);
  }**/

  addProductToCart(product:Product){
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }
}
