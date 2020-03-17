import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuState = new EventEmitter();

  showMenu = false; /* false by default, since hidden */

  constructor(private router: Router) { }
  ngOnInit() {}

 
  toggleMenu() { 
      console.log("inside toggleMenu in header component");
      this.showMenu = !this.showMenu;
      console.log("showMenu="+this.showMenu)
      this.menuState.emit(this.showMenu);
   }

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
  gotoFreindRequest(){
    this.router.navigate(['freind_request']);
  }
  gotoSearch(){
    this.router.navigate(['search']);
  }
  gotoSettings(){
    this.router.navigate(['setting']);
  }
}
