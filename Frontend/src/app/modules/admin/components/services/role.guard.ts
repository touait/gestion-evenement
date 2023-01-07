import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthadminService } from './authadmin.service';


@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate {
  helper= new JwtHelperService();

  
constructor(private adminservice:AuthadminService){}
 getrole(){
  let token:any =localStorage.getItem('token')
  let decodetoken= this.helper.decodeToken(token)
  return decodetoken.role
 }
  canActivate() {

    let role = this.getrole()
    console.log(role);
    
    if (role=="admin"){
      return true;
    }
    alert("you don't have admin rights")
    return false;
  }
  
}
