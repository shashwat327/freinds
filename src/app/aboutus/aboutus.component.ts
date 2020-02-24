import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
 
  testform:FormGroup;
  imageUploadUrl: any;

    constructor(private router: Router, 
    private formBuilder:FormBuilder, 
    private ngxService: NgxUiLoaderService,) { }

  ngOnInit() {

  }

  gotoProfile(){
    this.router.navigate(['profile']);
  }

  gotoAbout(){
    this.router.navigate(['about']);
  }

  gotoFreinds(){
    this.router.navigate(['freinds']);
  }

  gotoEditProfile(){
    this.router.navigate(['edit_profile']);
  }
  
  gotoPhotos(){
    this.router.navigate(['photos']);
  }
 
}
