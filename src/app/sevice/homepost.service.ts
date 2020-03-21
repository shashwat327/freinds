import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomepostService {

  constructor( private http: HttpClient) { }

  homepostData(data){
    console.log("data in homepage ")
    return this.http.post<any>("https://jsonplaceholder.typicode.com/posts", data
    );
  };

}
