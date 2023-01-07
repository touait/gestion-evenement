import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { EventService } from 'src/app/services/eventService';
import { Cart } from '../model/cart';
import { CartItem } from '../model/cartItem';
import { Event } from '../model/event';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  event:Event
  cart : Cart;
  cartitem : CartItem;
  
  constructor(private eventService : EventService,
    private cartService : CartService,
    private route : Router,
    private currentRoute : ActivatedRoute) {
      this.cartService.getCartObservable().subscribe((cart)=>{
        this.cart = cart ;
      })
      
     }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.params['id'];
    this.eventService.getById(id).subscribe(
     (data)=> this.event = data
     
    )
    console.log(this.cart.items);
  }

}
