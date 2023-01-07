import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { datareclamation } from '../sidebar/nav-data';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth =0;

  canShowSearhAsOverlay = false;

  datarec = datareclamation;
  constructor(private route:Router) { }

  @HostListener('window:resize',['$event'])
  onResize(event: any) {
    this.checkCanShowSearhAsOverlay(window.innerWidth);

  }

  ngOnInit(): void {
    this.checkCanShowSearhAsOverlay(window.innerWidth);
  }

  getHeadClass(): string {
     let styleClass ='';
     if(this.collapsed && this.screenWidth > 768){
      styleClass = 'head-trimmed';
     }else {
      styleClass='head-md-screen';
     }
     return styleClass;
  }

  checkCanShowSearhAsOverlay (innerWidth: number) : void{
    if(innerWidth < 845){
      this.canShowSearhAsOverlay = true;
    }else {
      this.canShowSearhAsOverlay = false;
    }
  }
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/loginadmin'])
  }
}
