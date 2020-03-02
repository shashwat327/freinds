import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  

  constructor(private router: Router ) { }

ngOnInit(){ }

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

}
