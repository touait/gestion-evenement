import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/components/model/event';
import { CartService } from 'src/app/services/cart.service';
import { EventService } from 'src/app/services/eventService'



@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: Event;
  constructor(private route: ActivatedRoute,
    private eventService: EventService,
    private cartService: CartService, 
    private router : Router

    ) { }

  ngOnInit(): void {


    let id= this.route.snapshot.params['id'];
     console.log(id);
     this.event= new Event();
     this.eventService.getById(id).subscribe(
      (data)=>this.event=data
     )



  }

  addToCart(){
    this.cartService.addToCart(this.event);
    this.router.navigateByUrl('cart-page')
  }
}
