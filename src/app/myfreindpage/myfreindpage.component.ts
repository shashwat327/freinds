import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myfreindpage',
  templateUrl: './myfreindpage.component.html',
  styleUrls: ['./myfreindpage.component.css']
})
export class MyfreindpageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoFreindProfile(){
    this.router.navigate(['freind_profile']);
  }
}
