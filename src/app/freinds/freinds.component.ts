import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freinds',
  templateUrl: './freinds.component.html',
  styleUrls: ['./freinds.component.css']
})
export class FreindsComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
  gotoChat(){
    this.router.navigate(['chat']);
  }
  gotoHomepage(){
    this.router.navigate(['homepage']);
  }
  gotoProfile(){
    this.router.navigate(['profile']);
  }
  gotoFreindProfile(){
    this.router.navigate(['freind_profile']);
  }
}
