import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs/Observable';
import {  HttpModule,  Http } from '@angular/http';
import { Headers, Response, RequestOptions, RequestMethod, URLSearchParams, Request  } from '@angular/http';
import 'rxjs';

@Injectable()

export class HttpService {

  constructor(private http:Http) { }

  public send($method: any, $url: string, $data: any = null){
    let submitedData: any = $data;
    let requestOptions: RequestOptions = new RequestOptions({
      method: $method,
      url: $url,
      body: submitedData
    });
    return this.http.request(new Request(requestOptions)).toPromise()
      .then(res => {
        return res;
      })
      .catch(rej => {
        return rej;
      });
  }

}
