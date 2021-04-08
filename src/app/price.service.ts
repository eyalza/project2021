import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PriceService {
  private url = "https://rhmjqolgv2.execute-api.us-east-1.amazonaws.com/beta";

  //categories:object = {0:'Business', 1:'Entertainment', 2:'Politics', 3:'Sport', 4:'Tech'};

  predict(text:string){
    let json = {'data':[
      {????}
    ]}
    let body = JSON.stringify(json);
    return this.http.post<any>(this.url, body).pipe(
      map(res => {
        console.log(res); 
      })
    )
  }

  constructor(private http:HttpClient) { }
}
