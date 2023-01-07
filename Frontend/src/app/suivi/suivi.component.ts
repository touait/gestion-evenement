import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,AbstractControl,ValidatorFn} from "@angular/forms";
import { reclamation } from '../components/model/reclamation';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit {
  searchnameFormControl= new  FormControl('', [Validators.required]);

  public list: reclamation[];
  constructor(private userservice:UserService) { }

  ngOnInit(): void {

    this.userservice.getAllRec().subscribe(
      (data:reclamation[])=>{this.list=data}
   );
  }

}
