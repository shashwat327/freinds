import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  display:boolean = false;
  show:boolean = true;

  constructor( private router: Router){}

  ngOnInit() {}

  gotoRegisterForm()
  {
    this.display=true;
    this.show=false;
  }

  gotoLoginForm(){
    this.display=false;
    this.show=true;
  }

  gotoHomepage(){
    this.router.navigate(['homepage']);
  }

}
