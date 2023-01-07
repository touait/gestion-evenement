import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
@Input() collapsed = false;
@Input() screenWidth = 0;
  constructor() { }

  ngOnInit(): void {
  }

  getBodyClass(): string  {
    let stylClass='';
    if (this.collapsed && this.screenWidth > 768){
      stylClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth >0){
      stylClass = 'body-md-screen'
    }
    return stylClass;
  }
}