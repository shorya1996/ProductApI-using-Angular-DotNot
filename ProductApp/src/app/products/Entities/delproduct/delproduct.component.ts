import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.entity';
import { AppService } from 'src/app/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delproduct',
  templateUrl: './delproduct.component.html',
  styleUrls: ['./delproduct.component.css']
})
export class DelproductComponent implements OnInit {


  constructor(public appservice:AppService, private route :ActivatedRoute,private router:Router){ }

  ngOnInit() {
  }
  prod:Product;

  

  deleteProduct(){

    this.route.params.subscribe((data)=>{

      this.appservice.deleteProduct(data.id).subscribe(data=>{

      this.prod=data;

      console.log(this.prod);

    });

    })

    this.router.navigate(['home']);

  }

  Goback():void{

    this.router.navigate(['home'])

  }




}
