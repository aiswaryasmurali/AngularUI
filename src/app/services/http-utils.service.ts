import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpUtilsService {

  constructor(private httpclient: HttpClient) { }

  public doPost(url: string, req: any) {
    return this.httpclient.post(url, req).pipe(map(resp => {
      return resp;
    }));
  }

  public doGet(url: string) {
    return this.httpclient.get(url).pipe(map(resp => {
      return resp;
    }));
  }
}
