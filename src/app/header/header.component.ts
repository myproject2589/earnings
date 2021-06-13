import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarlist=true;
  constructor() { }

  ngOnInit(): void {
  }
  burgermenu(){
    if(this.navbarlist==true){
      this.navbarlist=false;
    }else{
      this.navbarlist=true;
    }
  }
}
