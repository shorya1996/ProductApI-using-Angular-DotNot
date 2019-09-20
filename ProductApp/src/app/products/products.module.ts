import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './Entities/addproduct/addproduct.component';
import { DelproductComponent } from './Entities/delproduct/delproduct.component';
import { EditproductComponent } from './Entities/editproduct/editproduct.component';
import { ProductComponent } from './Entities/product/product.component';
import { ProductService } from './product.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductFilterPipe } from './ProductFilterPipe.pipes';
import { AppService } from '../app.service';
import { ProductDetailsComponent } from './Entities/product-details/product-details.component';



const productroutes:Routes = [
  {path:'products',component:ProductComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'delproduct/:id',component:DelproductComponent},
  {path:'editproduct/:id',component:EditproductComponent},
  {path: 'details/:id',component:ProductDetailsComponent},
];

@NgModule({
  declarations: [AddproductComponent, DelproductComponent, EditproductComponent, ProductComponent,ProductFilterPipe, ProductDetailsComponent],
  imports: [
    CommonModule,
  RouterModule.forChild(productroutes),
  FormsModule,
  ReactiveFormsModule],
providers:[ProductService,AppService]
})
export class ProductsModule { }
