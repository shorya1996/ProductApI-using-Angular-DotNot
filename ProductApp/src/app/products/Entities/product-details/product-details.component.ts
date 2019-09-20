import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productidtoedit:any;

  producttoedit;

  constructor(private route :ActivatedRoute,private appservice:AppService,private router:Router) { 

    this.route.params.subscribe((data)=>{

      this.productidtoedit=data.id;

    })

    this.appservice.getproductbyid(this.productidtoedit).subscribe(data=>{

      this.producttoedit=data;

     

    })

  }

  Goback():void{

    this.router.navigate(['home'])

  }

  ngOnInit() {

  }



}

