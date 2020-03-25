import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms';
import { HomepostService } from '../sevice/homepost.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  HomePostform:FormGroup;
  subMenuState:boolean ;
  display: boolean =true;
  ReplyBoxShow:boolean=false;
  ShowReply:boolean=false;
  files=[];
  fileSize: boolean;

  constructor(    private router: Router,
                  private formBuilder:FormBuilder,
                  private homepostservice: HomepostService
                  ){
                    document.body.style.background = '#f1f1f1';
                  }
    
  ngOnInit() {
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

  
  // burgerClicked(evnt){
  //   this.subMenuState = evnt;
  //   console.log("inside homepage component with showMenu =", this.subMenuState);
  //   this.display=this.subMenuState;
  //   console.log("display="+this.display);
  // }

  gotoProfile(){
    this.router.navigate(['profile'])
  }
  gotoChat()
  {
    this.router.navigate(['chat'])
  }
 gotoReplyBox(){
   this.ReplyBoxShow = ! this.ReplyBoxShow
 }
 gotoShowReply(){
   this.ShowReply = true;
   this.ReplyBoxShow = false;
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

