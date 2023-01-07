import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { reclamation } from '../model/reclamation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  RegisterForm: FormGroup = new FormGroup({
    Subject : new FormControl('', Validators.required),
    Category : new FormControl('', Validators.required),
    
    msgreception : new FormControl('', Validators.required),
    msgenvoyer: new  FormControl('', [Validators.required])
  })
  reclamation: reclamation[] = [];
  msgreception : String;
  constructor(private userservice:UserService,private route:Router) {
  
   }

  ngOnInit(): void {
    this.msgreception='in process'
  }
  addrec(){
    
    this.reclamation = this.RegisterForm.value;
    this.userservice.Addrec(this.reclamation).subscribe(
      result => {
        //console.log(result);
          alert('Complaint completed successfully')
          this.route.navigate(['/suivi'])
        }
      
    )
  }



  
  }

 

