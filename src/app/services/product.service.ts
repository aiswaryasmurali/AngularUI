import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpUtilsService } from './http-utils.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpUtils: HttpUtilsService) { }

  getProducts(): Observable<any> {
    // return this.httpUtils.doGet("https://localhost:44370/Product");
    return this.httpUtils.doGet('./assets/productList.json');
  }

  getProductDetails(id: string): Observable<any> {
    // return this.httpUtils.doGet("https://localhost:44370/Product/" + id);
    return this.httpUtils.doGet('http://dummy.restapiexample.com/api/v1/employee/1');

  }
}
