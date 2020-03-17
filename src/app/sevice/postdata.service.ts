import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {

  constructor( private http: HttpClient) { }

  postRegisterData(data){
    console.log("data inside ")
    return this.http.post<any>("https://jsonplaceholder.typicode.com/posts", data
    );
  };

  postLoginData(data){
    console.log("data inside login ")
    return this.http.post<any>("https://jsonplaceholder.typicode.com/posts", data
    );
  }

}
