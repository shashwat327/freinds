import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
  gotoProfile(){
    this.router.navigate(['profile'])
  }
  gotoHomepage(){
    this.router.navigate(['homepage'])
  }
  gotoChat(){
    this.router.navigate(['chat'])
  }
}
