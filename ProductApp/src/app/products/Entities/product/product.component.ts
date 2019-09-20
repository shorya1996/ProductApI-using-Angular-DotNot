import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable,BehaviorSubject } from "rxjs";
import { Router,Routes } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {

    setTimeout(( )=>this.appservice .getProducts().subscribe(data => {this.products=data;}),200

  )
  }

  name = "shorya";
  title="Products";
  imageWidth= 50;
  imageMargin = 2;

  products: any = [];

  constructor(public appservice:AppService, private router:Router) {

    //this.products = sc.getProducts();

  }
  

  ngOnInit() {

    this.appservice.getProducts().subscribe(data =>{

      this.products=data;

    });
}
editproduct(id):void{
  this.router.navigate(['editproduct',id]);
}

DeleteProd(id):void{
  this.router.navigate(['delproduct',id]);
}

DetailsProduct(id){
  this.router.navigate(['details',id]);
}
}
