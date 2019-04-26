import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ipro } from '../product-list/product.model';

@Component({
  selector: 'app-proadd',
  templateUrl: './proadd.component.html',
  styleUrls: ['./proadd.component.css']
})
export class ProaddComponent implements OnInit {

  constructor(private ps:ProductService) { }
productItem =new ipro(null,null,null,null,null,null,null,null);
  ngOnInit() {
  }
addproduct(){
  console.log(this.productItem)
  this.ps.newProducts(this.productItem);
  alert("success")
}
}
