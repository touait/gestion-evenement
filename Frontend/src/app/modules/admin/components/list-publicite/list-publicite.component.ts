import { Component, OnInit } from '@angular/core';
import { Publicite } from 'src/app/components/model/publicite';
import { PubliciteService } from 'src/app/services/publicite.service';
import { ajoutpub } from '../sidebar/nav-data';

@Component({
  selector: 'app-list-publicite',
  templateUrl: './list-publicite.component.html',
  styleUrls: ['./list-publicite.component.css']
})
export class ListPubliciteComponent implements OnInit {
  datarec = ajoutpub;
  public liste: Publicite[];
  constructor(private publiciteService: PubliciteService) { }

  ngOnInit(): void {
    this.publiciteService.getAllPublicite().subscribe(
      (d)=>{this.liste=d;
        console.log(d);}
   );
  }

  deletePublicite(publicite:Publicite) {
    console.log(publicite.idP)
    this.publiciteService.deletePublicite(publicite.idP).subscribe(()=>{
    console.log('remouved')});
  }


    updatePublicite(){

    }

}
