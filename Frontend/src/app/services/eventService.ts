import { HttpClient } from '@angular/common/http';
import { Event } from 'src/app/components/model/event';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class EventService {

  // url='http://localhost:3000/events/'


  constructor(private httpService: HttpClient) { }

  getAllEvent(){
    return this.httpService.get<Event[]>("http://localhost:3000/events/ShowAllEvents");
  }
  addEvent(data: Event){
    return this.httpService.post("http://localhost:3000/events/addEvent",data);
  }
  deleteEvent(idE:Number){
     return this.httpService.delete("http://localhost:3000/events/delete/"+idE);
  }
  updateEvent(event: Event){
    return this.httpService.put("http://localhost:3000/events/update/"+event.idE,event);
  }
  getById(idE:Number){
    return this.httpService.get<Event>("http://localhost:3000/events/showEvent/"+idE);
  }
}


