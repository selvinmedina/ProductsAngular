import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.css']
})
// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {
  public product: Product[];
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService
      .getAllProducts()
      .subscribe(products => {
        this.product = products.Result;
      });
  }
}
