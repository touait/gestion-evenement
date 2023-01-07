import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/components/model/event';
import { EventService } from 'src/app/services/eventService';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {


  event : Event;
  public data : any;
  constructor(private eventService: EventService,
              private route: Router,
              private currentRoute: ActivatedRoute
              )
              { }

  ngOnInit(): void {

  }




  save(data: any){
      this.eventService.addEvent(data).subscribe(
          // ()=>{console.log(data);
          // }
          () =>{this.route.navigate(['evenement'])}
        )
        console.log("formulaire data : "+ data);

  }



}
