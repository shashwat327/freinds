import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  innerWidth: number;

  constructor( private router:Router) { }

  ngOnInit(){
    this.innerWidth = window.innerWidth;
    console.log("width="+this.innerWidth);
  }

  gotoMobOrDesktop()
  {
    if(this.innerWidth < 992)
    {
    this.router.navigate(['mobile_chat']);
    }
    else{
      
    }
  }
}