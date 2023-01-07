import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,AbstractControl,ValidatorFn} from "@angular/forms";
import { user } from '../model/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  public list: user[];
  myScriptElement:HTMLScriptElement;
  myScriptElementtchat:HTMLScriptElement;

  
  public showPassword: boolean = false;
  
  firstnameFormControl= new  FormControl('', [Validators.required]);
  lastnameFormControl= new  FormControl('', [Validators.required]);
  telephoneFormControl= new  FormControl('', [Validators.required]);
  RoleFormControl= new  FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  password = new FormControl("", [
    Validators.required,
    Validators.pattern(
      "^((?=\\S*?[A-Z])(?=\\S*?[a-z])(?=\\S*?[0-9]).{8,255})\\S$"
    )
  ]);
  
  
  constructor() { 
    this.myScriptElement=document.createElement("script");
    this.myScriptElement.src="assets/js/upload.js"
    document.body.appendChild(this.myScriptElement);
    this.myScriptElementtchat=document.createElement("script");
    this.myScriptElementtchat.src="assets/js/tchat.js"
    document.body.appendChild(this.myScriptElementtchat);
  }

  ngOnInit() {
 
    this.list=[ 
      { 
        "nom": "erdtfyu",
        "role":"aaaaaaa",
        "pwd":"aaaaaaaa",
        "prenom": "sdfghj",
        "telephone": 521112,
        "email": "aaaa@dddd.com",
        "photo": "https://static.remove.bg/remove-bg-web/221525818b4ba04e9088d39cdcbd0c7bcdfb052e/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
        "idU": 1
    }]
  }

  
}

