import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/components/model/event';
import { EventService } from 'src/app/services/eventService';


@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.css']
})
export class EventTableComponent implements OnInit {
  public list: any;
  public event: Event;
  constructor(private eventService: EventService,) { }

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

  Delete(event:any){
      this.eventService.deleteEvent(event.idE).subscribe(()=> {
        console.log("Event deleted succefly");

      }

      )

}

}
