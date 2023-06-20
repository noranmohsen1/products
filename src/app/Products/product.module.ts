import { NgModule } from '@angular/core';
import { ProductListComponent } from './Product.list.component';
import { ProductDetailComponent } from './product-detail.component';
import { convertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    convertToSpacesPipe,
  ],
  imports: [
    RouterModule.forChild([
      {path: "Products", component : ProductListComponent},
      {path: "Products/:id",
      canActivate: [ProductDetailGuard],
      component: ProductDetailComponent },
    ]),
    SharedModule

  ]
})
export class ProductModule { }
