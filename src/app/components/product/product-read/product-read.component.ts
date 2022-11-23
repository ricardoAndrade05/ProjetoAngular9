import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.read().subscribe({
      next: products => {
        this.products = products;
      }
    })
  }

}
