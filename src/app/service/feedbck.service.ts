import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbckService {

  constructor( private http: HttpClient ) { }

  postFeedbackData(data){
    console.log("data inside ")
    return this.http.post<any>("https://jsonplaceholder.typicode.com/posts", data
    );
  }
}
