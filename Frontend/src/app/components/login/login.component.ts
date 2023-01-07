import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataRecived:any;
  messageerror:any;
  public showPassword: boolean = false;
  loginForm: FormGroup = new FormGroup({
  email : new FormControl('', [Validators.required, Validators.email]),
  pwd : new  FormControl('', [Validators.required])});
  constructor(private userservice:UserService, private route:Router) {
    console.log(this.userservice.isloggedin)
    
    if (!localStorage.getItem('token')){
      this.route.navigate(['/login'])
    }
    if (this.userservice.loggedIn()==true){
      console.log('connected')
    }else{
       this.route.navigate(['/login'])
    }
  }

  ngOnInit(): void {

  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  login(){
    let data=this.loginForm.value
    this.userservice.Login(data).subscribe({
       next: (response)=>{
      this.dataRecived=response
      this.userservice.savedataprofil(this.dataRecived.token,this.dataRecived.role)
     this.route.navigate(['/'])
      },error: (err: HttpErrorResponse) => {
        this.messageerror = "email/password Inccorect";
         }
      })
    }
    
}
