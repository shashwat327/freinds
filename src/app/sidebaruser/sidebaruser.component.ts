import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebaruser',
  templateUrl: './sidebaruser.component.html',
  styleUrls: ['./sidebaruser.component.css']
})
export class SidebaruserComponent implements OnInit {
  @Input() subMenuState;
  // opened: boolean;
  // showMenu = true;
  // showMenu : boolean;
  constructor() { }

  ngOnInit() {
  }


  // toggleMenu() {
  //     this.showMenu = !this.showMenu;
  //  }
 

  ngOnChanges(){
    console.log("inside ngOnChanges with subMenuState in sidebaruser component: ",this.subMenuState );
    // this.showMenu = this.subMenuState;
  }
}
