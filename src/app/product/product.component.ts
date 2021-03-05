import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'
import { Products } from '../classes/Product'
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.css' ]
})
export class ProductComponent implements OnInit, OnDestroy {

  public productList: Products[] = [
    {
      "id": "603face5f6b86429dc1b5333",
      "product_Id": "1",
      "productName": "Sample",
      "entryDate": "3-1-2021",
      "price": "2"
    },
    {
      "id": "603fad0bf6b86429dc1b5334",
      "product_Id": "2",
      "productName": "Sample2",
      "entryDate": "3-1-2021",
      "price": "4"
    },
    {
      "id": "603fad0bf6b86429dc1b5334",
      "product_Id": "2",
      "productName": "Sample2",
      "entryDate": "3-1-2021",
      "price": "4"
    },
    {
      "id": "603fad0bf6b86429dc1b5334",
      "product_Id": "2",
      "productName": "Sample2",
      "entryDate": "3-1-2021",
      "price": "4"
    }
  ];
  private unsubscribe: Subject<any> = new Subject<any>();
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadProductDetails();

  }
  private loadProductDetails() {
    // this.productService.getProducts().pipe(takeUntil(this.unsubscribe)).subscribe(resp => this.successCallBack(resp), err => this.errorCallBack(err));
  }
  public goToProductDetails(id: any) {
    this.router.navigate([ '/productdetails', id ])
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.unsubscribe();
  }

  /***
   * 
   * API Call back sections
   * 
   */
  private successCallBack(resp: any) {
    if (resp && resp.length > 0) {
      this.productList = resp;
    } else {
      this.productList = [];
    }
  }
  private errorCallBack(error: any) {
    alert(error);
  }

}
