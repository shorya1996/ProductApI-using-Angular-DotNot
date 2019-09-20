import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  itle="Edit Product Form";

  productidtoedit:any;

  editProductForm:FormGroup;

  producttoedit;

  constructor(private route :ActivatedRoute,private appservice:AppService,  private fb:FormBuilder, private router:Router)

   {  

    this.route.params.subscribe((data)=>{

      this.productidtoedit=data.id;

    })

    this.editProductForm=new FormGroup({

      ProductID:new FormControl(),

      Title:new FormControl(null),

      Price: new FormControl(null),

      Color:new FormControl(null),

      Quantity:new FormControl(null),

      InStock:new FormControl(null),

      Details:new FormControl(null),

      Rating:new FormControl(null),

      ExpiryDate:new FormControl(null),

      ImageURL:new FormControl(null)

    })

   }



  ngOnInit() {

    this.productbyid();


  }


prod;

  updateProduct()

  {

      this.appservice.putProduct(this.editProductForm.value).subscribe(data=>{

        this.prod=data;

        console.log(this.prod);

      })

      this.router.navigate(['home']);

  }

  productbyid(){

    this.appservice.getproductbyid(this.productidtoedit).subscribe(data=>{

      this.producttoedit=data;

      this.editProd(this.producttoedit);

    })

  }

  editProd(element){

    this.editProductForm=this.fb.group({

      ProductID:[element.ProductID],

      Title:[element.Title],

      Price: [element.Price],

      Color:[element.Color],

      Quantity:[element.Quantity],

      InStock:[element.inStock],

      Details:[element.Details],

      Rating:[element.Rating],

      ExpiryDate:[element.ExpiryDate],

      ImageURL:[element.ImageUrl]

    })

  }

  setDefault(){

    this.editProductForm.setValue({

      ProductID:this.producttoedit.ProductID,

      Title:this.producttoedit.Title,

      Price:this.producttoedit.Price,

      Color:this.producttoedit.Color,

      Quantity:this.producttoedit.Quantity,

      Details:this.producttoedit.Details,

      ExpiryDate:this.producttoedit.ExpiryDate,

      ImageURL:this.producttoedit.ImageUrl,

      InStock:this.producttoedit.inStock,

      Rating:this.producttoedit.Rating

        })



  }

  Goback():void{

    this.router.navigate(['home'])

  }



  

}
