import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/modules/admin/components/services/authadmin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
   dataRecived:any;
   messageerror:any;
  constructor(private authadminservice:AuthadminService, private route:Router) { 
    console.log(this.authadminservice.isloggedin)

    if (!localStorage.getItem('token')){
      this.route.navigate(['/loginadmin'])
    }
    if (this.authadminservice.loggedIn()==true){
      console.log('connected')
    }else{
       this.route.navigate(['/loginadmin'])
    }
  }

  ngOnInit(): void {
    
  }
  loginadmin(f:any){
let data=f.value
this.authadminservice.Loginadmin(data).subscribe({
   next: (response)=>{
  this.dataRecived=response
  this.authadminservice.savedataprofil(this.dataRecived.token)
 this.route.navigate(['/admin'])
  },error: (err: HttpErrorResponse) => {
    this.messageerror = "email/password Inccorect";
     }
  })
  }
}
