import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceclientService {

  constructor(private httpclient:HttpClient) { }

  getProducts():Observable<any>{

    return this.httpclient.get("https://localhost:44370/Product")

  }

  getProductDetails(id:string):Observable<any>{

    return this.httpclient.get("https://localhost:44370/Product/"+id)

  }
}
