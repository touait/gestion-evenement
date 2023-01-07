import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicite } from 'src/app/components/model/publicite';
import { PubliciteService } from 'src/app/services/publicite.service';

@Component({
  selector: 'app-ajout-publicite',
  templateUrl: './ajout-publicite.component.html',
  styleUrls: ['./ajout-publicite.component.css']
})
export class AjoutPubliciteComponent implements OnInit {
  publicite: Publicite;
  title: String;
  constructor(private publiciteService:PubliciteService,
    private route:Router,
    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //add a new Publicite
  }

  add(data:any){
    
    this.publiciteService.addPublicite(data).subscribe(
      ()=>{console.log("succes");}
    )
   
 }

}
