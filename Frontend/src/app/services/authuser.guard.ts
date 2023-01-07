import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthuserGuard implements CanActivate {
  constructor(private router: Router,private userservice: UserService) { }
  canActivate(
    route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return new Promise((resolve,rejects)=>{
  if(this.userservice.loggedIn()==true){
   resolve(true)
   }else{
   this.router.navigate(['/login'])
    resolve(false)
  }

     })
  }
}
  



  


