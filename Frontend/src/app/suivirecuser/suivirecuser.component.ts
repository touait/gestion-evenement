import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { reclamation } from '../components/model/reclamation';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-suivirecuser',
  templateUrl: './suivirecuser.component.html',
  styleUrls: ['./suivirecuser.component.css']
})
export class SuivirecuserComponent implements OnInit {
  idRec:any;
  public list: reclamation[];
reclamation:reclamation;
  constructor(private userservice:UserService,private route:Router, private currentRoute:ActivatedRoute){ }

  ngOnInit(): void {
     this.idRec= this.currentRoute.snapshot.params['idRec'];
    this.userservice.getAllRec().subscribe(
      (data:reclamation[])=>{this.list=data}
   );
  }




  
update(){
  if(this.idRec===undefined){
  this.userservice.updaterec(this.idRec,this.reclamation).subscribe(
    ()=>this.route.navigate(['/admin/reclamationData'])
  )
}}
}
