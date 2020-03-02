import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freindrequest',
  templateUrl: './freindrequest.component.html',
  styleUrls: ['./freindrequest.component.css']
})
export class FreindrequestComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoAddFreindPage(){
    this.router.navigate(['add_freind']);
  }
}
