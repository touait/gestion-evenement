import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthadminService {
  private tokenKey = 'token';
  helper= new JwtHelperService();

  constructor(private http:HttpClient) { }
ProfilAdmin={
  role:''
}
stringifiedData:any;
isloggedin:boolean=false;


  Loginadmin(data:any){
  return this.http.post('http://localhost:3000/users/login',data)
  }

 savedataprofil(token:any){
  
  localStorage.setItem('token', JSON.stringify(token))

  //localStorage.setItem('token',token)
  //this.stringifiedData = JSON.stringify(token);  
  
  // localStorage.setItem('role',role)
  // this.ProfilAdmin.role=role
   //this.isloggedin=true;
 }
 getrole(){
  let token:any =localStorage.getItem('token')
  let decodetoken= this.helper.decodeToken(token)
  return decodetoken.role
 }
 loggedIn(){
  let token = localStorage.getItem(this.tokenKey);
  
 //return token != null && token.length > 0;
 
//  const token:any=localStorage.getItem("token")
//   this.stringifiedData = JSON.stringify(token);  
//  console.log(token)
  if (!localStorage.getItem("token")){
    return false;
   }
  
  return true
}
}

