import { Component, OnInit } from '@angular/core';
import { Product } from './shared/product.model';
import { ProductsService } from './shared/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productsService.getAll().then((res:any) => {
      this.products = res.map((e:any) => {
        return {
          ...e.payload.doc.data() as {}
        } as Product;
      });
    });
  }

}
