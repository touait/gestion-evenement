import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { rejects } from 'assert';
import { resolve } from 'dns';

import { Observable } from 'rxjs';
import { AuthadminService } from './authadmin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private AuthadminService: AuthadminService) { }
  canActivate(
    route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return new Promise((resolve,rejects)=>{
  if(this.AuthadminService.loggedIn()==true){
   resolve(true)
   }else{
   this.router.navigate(['/loginadmin'])
    resolve(false)
  }

     })
  }
  

}