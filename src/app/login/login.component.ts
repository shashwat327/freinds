import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms';
import { PostdataService } from '../sevice/postdata.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Registerform:FormGroup;
  Loginform:FormGroup;
  display:boolean = false;
  show:boolean = true;
  // json1: { firstname: string; lastname: string; mobile: number; email:string;
  //           password1:string; password2:string; birthdate:string;gender:string};

  // json2: { loginemail: string; lloginpassword: string;};

  constructor( private router: Router, 
               private formBuilder:FormBuilder,
               private postservice:PostdataService,
               private ngxService: NgxUiLoaderService  ){}

  ngOnInit() 
  {
     this.Registerform= this.formBuilder.group({

      firstname: new FormControl("",Validators.required),
      lastname: new FormControl("",Validators.required),
      mobile: new FormControl("",Validators.required),
      email: new FormControl("",Validators.required),
      password1: new FormControl("",Validators.required),
      password2: new FormControl("",Validators.required),
      birthdate: new FormControl("",Validators.required),
      gender: new FormControl("",Validators.required),
      
      });

      this.Loginform= this.formBuilder.group({
        loginemail: new FormControl("",Validators.required),
        loginpassword: new FormControl("",Validators.required),
      });
  }

  RegisterSubmitform(value){
    this.ngxService.start();     
    var json1={
                        firstName:value.firstname,
                        lastnameName:value.lastname,
                        mobile: value.mobile,
                        email: value.email,
                        password1: value.password1,
                        password2: value.password2,
                        birthdate: value.birthdate,
                        gender: value.gender             
           }


           this.postservice.postRegisterData(json1)
           .subscribe(data=> {
                                 
                                  console.log(data)
                             }
                      );
      this.ngxService.stop();
     this.router.navigate(['homepage'])
}



 LoginSubmitform(value){
  this.ngxService.start(); 
            var json2={
                         loginemail: value.loginemail,
                         loginpassword: value.loginpassword,
                     }

                     this.postservice.postLoginData(json2)
                     .subscribe(data=> {
                                           
                                            console.log(data)
                                       }
                                );
  this.ngxService.stop(); 
}

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
  gotoTerms(){
    this.router.navigate(['terms']);
  }
  gotoPolicy(){
    this.router.navigate(['policy']);
  }
  gotoFeedback(){
    this.router.navigate(['feedback']);
  }

}
