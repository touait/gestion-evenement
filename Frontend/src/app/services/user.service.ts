import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { user } from '../components/model/user';
import { reclamation } from '../components/model/reclamation';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  Profil={
    role:''
  }
  helper= new JwtHelperService();
  constructor(private httpService: HttpClient) { }
  isloggedin:boolean=false;
  getrole(){
    let token:any =localStorage.getItem('token')
    let decodetoken= this.helper.decodeToken(token)
    return decodetoken.role
   }
  Login(data:any){
    return this.httpService.post('http://localhost:3000/users/login',data)
    }
   savedataprofil(token:any,role:any){
    localStorage.setItem('token', JSON.stringify(token))
  
    this.Profil.role=role
    this.isloggedin=true;
   }
   loggedIn(){
    let token:any=localStorage.getItem('token')
  
    if (!localStorage.getItem('token')){
      return false;
    }
    
    return true
   }
  Addrec(data:any) {
    
  return this.httpService.post('http://localhost:3000/reclamations/addrec',data,{responseType: 'text'})
  }

  updaterec(id:any, reclamation:reclamation){
    return this.httpService.put('http://localhost:3000/reclamations/updaterec/'+id,reclamation)
  }
  getAllRec(){
    return this.httpService.get<reclamation[]>('http://localhost:3000/reclamations/fetch')
  }
  getrecById(id:number){
    return this.httpService.get<reclamation>('http://localhost:3000/users/reclamation/'+id)
  }




  
  Register(data:any){
    return this.httpService.post('http://localhost:3000/users/register',data)

  }
  //form the backend Side
  getAllUser(){
    return this.httpService.get<user[]>('http://localhost:3000/users/fetch')
  }
  addUser(user: user){
    return this.httpService.post('http://localhost:3000/users/register',user)
  }
  deleteUser(id:number){
    return this.httpService.delete('http://localhost:3000/users/removeuser/'+id)
  }
  updateUser(user: user){
    return this.httpService.put('http://localhost:3000/users/updateuser/'+user.idU,user)
  }
  getById(id:number){
    return this.httpService.get<user>('http://localhost:3000/users/user/'+id)
  }
}

