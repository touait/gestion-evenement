import { Component, OnInit } from '@angular/core';
import { Event } from '../model/event';
import { EventService } from 'src/app/services/eventService';



@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
public list: any;
public event: Event;
  constructor(private eventService: EventService,


    ) { }

  ngOnInit(): void {
    this.eventService.getAllEvent().subscribe({
      next : res => {
        this.list = res;
        console.log(res);

      },
      error : error => {
        console.log(error);

      }
    }

    );
  }


  }


