import { Component, OnDestroy, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { productService } from "./product.service";
import { Subscription } from "rxjs";

@Component({

  templateUrl: './Product.list.component.html',
  styleUrls: ["./Product.list.component.css"]
})
export class ProductListComponent implements OnInit, OnDestroy {
pageTitle: string ="product list";
imageWidth: number= 50;
imageMargin: number= 2;
showImage: boolean =false;
errorMessage:string="";
  sub!: Subscription ;
private _listFilter: string ="";
get listFilter(): string{
  return this._listFilter;
}
set listFilter(value: string){
   this._listFilter = value;
   console.log("In setter:", value);
   this.filterProducts = this.performFilter(value);

}
filterProducts: IProduct[] = [];
products: IProduct[] = [];

constructor(private productService: productService) {

}

performFilter(filterBy:string): IProduct[]{
  filterBy= filterBy.toLocaleLowerCase();
  return this.products.filter((product : IProduct)=>
  product.productName.toLocaleLowerCase().includes(filterBy))
}
toggleImage(): void{
  this.showImage = !this.showImage;
}
ngOnInit(): void {
this.productService.getProducts().subscribe({
  next: products => {
    this.products = products;
    this.filterProducts = this.products;
  },
  error: err => this.errorMessage=err
   });
}


ngOnDestroy() {
this.sub?.unsubscribe();
}

// ngOnDestroy() {
//   if (this.sub) {
//       this.sub.unsubscribe();
//   }
// }


onRatingClicked(message: string): void{
  this.pageTitle = "product list:"+ message;
}
}
