import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Products } from '../classes/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: [ './productdetails.component.css' ]
})
export class ProductdetailsComponent implements OnInit {

  public productdetails: any = null;
  private productId: any = null;
  private unsubscribe: Subject<any> = new Subject<any>();
  constructor(private actRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.getProductDetails(this.productId);
    })
  }

  private getProductDetails(productId: string) {
    //remove dummy ui
    this.productService.getProductDetails(productId).pipe(takeUntil(this.unsubscribe)).subscribe(resp => this.successCallBack(resp),
      error => this.errorCallBack(error));
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
    if (resp) {
      this.productdetails = resp.data;
    } else {
      this.productdetails = {};
    }
  }
  private errorCallBack(error: any) {
    alert(error);
  }
}
