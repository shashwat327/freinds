import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  
  gotoFreinds(){
    this.router.navigate(['freinds'])
  }
  gotoAbout(){
    this.router.navigate(['about'])
  }
  gotoProfile(){
    this.router.navigate(['profile'])
  }
  gotoPhotos(){
    this.router.navigate(['photos'])
  }
}
