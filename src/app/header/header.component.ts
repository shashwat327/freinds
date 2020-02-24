import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router) { }

 
 
  ngOnInit() {}

  gotoHomepage(){
    this.router.navigate(['homepage'])
  }
  gotoChat(){
    this.router.navigate(['chat'])
  }
  gotoProfile(){
    this.router.navigate(['profile'])
  }
  gotoRecoverPassword(){
    this.router.navigate(['recover_password']);
  }
  gotoListuser(){
    this.router.navigate(['list_user']);
  }
  gotoPhotos(){
    this.router.navigate(['photos']);
  }
  gotoFreinds(){
    this.router.navigate(['freinds']);
  }
  gotoAbout(){
    this.router.navigate(['about']);
  }
  gotoUserDirectory(){
    this.router.navigate(['user_directory']);
  }
  gotoEditProfile(){
    this.router.navigate(['edit_profile']); 
  }
  gotoNotification(){
    this.router.navigate(['notification']);
  }
  gotoBlankCover(){
    this.router.navigate(['blank_cover']);
  }
  gotoRegistrationEmail(){
    this.router.navigate(['registration_email']);
  }
  gotoGridPost(){
    this.router.navigate(['grid_post']);
  }
}