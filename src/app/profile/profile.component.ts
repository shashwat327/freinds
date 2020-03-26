import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms';
import { HomepostService } from '../sevice/homepost.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  HomePostform:FormGroup;
  files=[];
  fileSize: boolean;

  constructor(    private router: Router ,
                  private formBuilder:FormBuilder,
                  private homepostservice: HomepostService) { }

ngOnInit(){
  this.HomePostform= this.formBuilder.group({

    postdata: new FormControl("",Validators.required),
    imgUpload: new FormControl("",Validators.required),
    
    });
}
 
Submitform(value){    
  var json1={  
    postdata:value.postdata,
    imgUpload:this.files,
  }

         this.homepostservice.homepostData(json1)
         .subscribe(data=> {
                               
                                console.log(data)
                           }
                    );
}

 gotoProfile(){
   this.router.navigate(['profile']);
 }

gotoHomepage(){
  this.router.navigate(['homepage']);
}

gotoChat(){
  this.router.navigate(['chat']);
}

gotoAbout()
{
  this.router.navigate(['about']); 
  console
}

gotoFreinds(){
  this.router.navigate(['freinds'])
}

gotoPhotos(){
  this.router.navigate(['photos'])
}
gotoEditProfile(){
  this.router.navigate(['edit_profile'])
}


fileChangeEvent(event: any): void {
  const reader = new FileReader();
  if (event.target.files && event.target.files.length) {
    const [file] = event.target.files;
    // this.files = event.target.files;
    for (let index = 0; index < event.target.files.length; index++) {
      let temp = event.target.files[index].name.split(".");
      let temptype = temp[temp.length - 1];

      event.target.files[index].customType = temptype;
      let b = event.target.files[index].size <= 1024 * 1024 * 5; //5242880 bytes = 5MB
      if (b == false) {
        this.fileSize = true;
        console.log("if");
      } else {
        this.files.push(event.target.files[index]);
        
      }
      console.log(this.files);
    }
  } 
 }
}
