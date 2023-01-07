import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators,AbstractControl,ValidatorFn} from "@angular/forms";
import { user } from './../model/user';
import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { matchValidator } from './matshpwd';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any[] = [];
  message: string[] = [];

  previews: string[] = [];
  imageInfos?: Observable<any>;

  public showPassword: boolean = false;
  
  public showPassword1: boolean = false;
  RegisterForm: FormGroup = new FormGroup({
  email : new FormControl('', [Validators.required, Validators.email]),
  photo: new  FormControl('', [Validators.required]),
  nom: new  FormControl('', [Validators.required]),
  prenom: new  FormControl('', [Validators.required]),
  telephone: new  FormControl('', [Validators.required]),
  userControl : new FormControl(null, Validators.required),
  role : new FormControl('', Validators.required),
  pwd :new FormControl("", [Validators.required,Validators.pattern( "^((?=\\S*?[A-Z])(?=\\S*?[a-z])(?=\\S*?[0-9]).{8,255})\\S$"), matchValidator('confirmPassword', true)]),
  confirmPassword : new FormControl("", [Validators.required, matchValidator('pwd')])
  })
  

  user: user[] = [];
  constructor(private userservice:UserService, private route:Router) {
  }

  ngOnInit(): void {
   
  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  public toggleRepeatPasswordVisibility(): void {
    this.showPassword1 = !this.showPassword1;
  }

  Register(){
  this.user = this.RegisterForm.value;
  this.userservice.Register(this.user).subscribe(
    result => {
      //console.log(result);
        alert('Registration completed successfully')
        this.route.navigateByUrl('/login');
      }
    
  )
}


  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }

 
}
