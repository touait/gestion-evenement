import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { user } from 'src/app/components/model/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup} from "@angular/forms";


import {FormControl, Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  @ViewChild('fileInput',{static:false}) fileInput:ElementRef

  
  onFileUpload(){
    const imageBlob = this.fileInput.nativeElement.files[0];
    const file = new FormData();
    file.set('file',imageBlob);
    this.http.post('http://localhost:3000/users/',file).subscribe(response =>{
   console.log(response);}
    )
  }




  public showPassword: boolean = false;
 
 
  RegisterForm: FormGroup = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    photo: new  FormControl('', [Validators.required]),
    nom: new  FormControl('', [Validators.required]),
    prenom: new  FormControl('', [Validators.required]),
    telephone: new  FormControl('', [Validators.required]),
    userControl : new FormControl(null, Validators.required),
    role : new FormControl('', Validators.required),
    pwd :new FormControl("", [Validators.required,Validators.pattern( "^((?=\\S*?[A-Z])(?=\\S*?[a-z])(?=\\S*?[0-9]).{8,255})\\S$")]),
   
    })
  user: user;
  title: String;
  //Router pour la navigation
  //Activated pour lire les paramètres dans l url actif
  constructor(private userservice:UserService,
                private route:Router,
                private currentRoute: ActivatedRoute , private http : HttpClient) { }
                public togglePasswordVisibility(): void {
                  this.showPassword = !this.showPassword;
                }
  ngOnInit(): void {
    
    let idU= this.currentRoute.snapshot.params['idU'];
    console.log(idU);
    if(idU==null){
      //add a new Product
    this.user= new user();
   
  }

    else{
      //update
      this.title='update the User with id: '+idU;
      this.userservice.getById(idU).subscribe(
        (data)=>this.user=data
        
      )
    }


  }
  Register(){
    if(this.user.idU==null){
    this.user = this.RegisterForm.value;
    this.userservice.Register(this.user).subscribe(
      result => {
        //console.log(result);
          alert('Registration completed successfully')
          this.route.navigateByUrl('/admin/user');
      }
      
    )
  }else{
    this.userservice.updateUser(this.user).subscribe(
      result => {
        //console.log(result);
          alert('Update completed successfully')
          this.route.navigateByUrl('/admin/user');
      }
      
    )
   }


}

  
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any[] = [];
  message: string[] = [];

  previews: string[] = [];
 


  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }

  
}
