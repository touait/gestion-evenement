import { Component, OnInit ,ViewChild} from '@angular/core';
import { user } from 'src/app/components/model/user';
import { UserService } from 'src/app/services/user.service';
import { adduser } from '../sidebar/nav-data';

@Component({
  selector: 'app-user-stat',
  templateUrl: './user-stat.component.html',
  styleUrls: ['./user-stat.component.css']
})
export class UserStatComponent implements OnInit {
 
  
  datarec = adduser;
  public list: user[];
  constructor(private userservice: UserService) { }


  ngOnInit(): void {
    this.userservice.getAllUser().subscribe(
      (data:user[])=>{this.list=data}
   );
 }
 

 deleteuser(user:user){
  if (confirm('are you sure to delete user ?')){
  let i= this.list.indexOf(user);
  if(i!=-1){
    this.userservice.deleteUser(user.idU).subscribe(()=> this.list.splice(i,1)
    )
  }
}}


}
