import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  subMenuState:boolean ;
  display: boolean =true;

  constructor(    private router: Router,
                  ){
                    document.body.style.background = '#f1f1f1';
                    
                  }
    
  ngOnInit() {}
    
  
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
 
  }

