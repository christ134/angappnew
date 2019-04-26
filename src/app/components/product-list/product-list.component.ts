import { Component, OnInit } from '@angular/core';
import { ipro } from './product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]
})
export class ProductListComponent implements OnInit {

  title:string="PRODUCT MANAGEMENT";
  imageWidth:number=50;
  imageMargin:number=1;
  showImage:boolean=false;  
  
  products:ipro[];
  constructor(private ps:ProductService) { }

  ngOnInit():void {
    this.ps.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
        })
  }


imagetoggle():void{
  this.showImage=!this.showImage;
  

}
}

