import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  
  
  state1="test1";
  state2: string;
  state3: string;
  state4: string;

  constructor(private router:Router) { }
  personalInfo:boolean =true;
  Security:boolean =false;
  changePassword:boolean =false;
  Logout:boolean =false;
  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['homepage'])
  }
  gotoPersonalInfo(){
    this.personalInfo= true;
    this.Security=false;
    this.changePassword=false;
    this.Logout=false;
    this.state1="test1";
    this.state2 ="false";
    this.state3 = "false";
    this.state4 ="false";
  }

  gotoChangePassword(){
    this.changePassword =true;
    this.Security=false;
    this.personalInfo=false;
    this.Logout=false;
    this.state2=  "test2";
    this.state1=  "false";
    this.state3 = "false";
    this.state4 ="false";
  }

  gotoSecurity(){
    this.changePassword =false;
    this.Security=true;
    this.personalInfo=false;
    this.Logout=false;
    this.state3=  "test3";
    this.state1=  "false";
    this.state2 ="false";
    this.state4 ="false";
  }

  gotoLogout(){
    this.changePassword =false;
    this.Security=false;
    this.personalInfo=false;
    this.Logout=true;
    this.state4=  "test4";
    this.state1=  "false";
    this.state2 ="false";
    this.state3 = "false";
  }

  
}
