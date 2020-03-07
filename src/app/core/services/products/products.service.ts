import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { environment } from 'src/environments/environment';
import { ResultList } from '@core/models/result.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<ResultList<Product>>(`${environment.url_api}/Productos`);
  }
}
