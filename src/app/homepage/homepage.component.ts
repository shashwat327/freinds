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

  constructor(    private router: Router,
                  private formBuilder:FormBuilder,
                  private homepostservice: HomepostService
                  ){
                    document.body.style.background = '#f1f1f1';
                  }
    
  ngOnInit() {
    this.HomePostform= this.formBuilder.group({

      postdata: new FormControl("",Validators.required),
      
      });
  }
    
  HomePostSubmitForm(value){    
    var json1={  postdata:value.postdata}

           this.homepostservice.homepostData(json1)
           .subscribe(data=> {
                                 
                                  console.log(data)
                             }
                      );
}

  
  burgerClicked(evnt){
    this.subMenuState = evnt;
    console.log("inside homepage component with showMenu =", this.subMenuState);
    this.display=this.subMenuState;
    console.log("display="+this.display);
  }

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

  }

