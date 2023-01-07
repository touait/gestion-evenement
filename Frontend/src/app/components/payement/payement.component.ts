import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { EventService } from 'src/app/services/eventService';
import { Cart } from '../model/cart';
import { Event } from '../model/event';
import { Payement } from '../model/pay';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {
  pay : Payement;
  event : Event;
  cart : Cart;
  constructor(private eventService : EventService,
    private cartService : CartService,
    private route : Router,
    private currentRoute : ActivatedRoute) {
      this.pay= new Payement();
      this.cartService.getCartObservable().subscribe((cart)=>{
        this.cart = cart ;
      })
     }

  ngOnInit(): void {
   
    // let id = this.currentRoute.snapshot.params['id'];
    // this.eventService.getById(id).subscribe(
    //  (data)=> this.event = data
    // )
    let id = this.currentRoute.snapshot.params['id'];
 this.eventService.getById(id).subscribe(
  (data)=> this.event = data
 )
  }
  send(id:any){
    console.log(id,"ssssssssssssssssssssssssssssssss");
    
    this.cartService.addOrder({userId:28,evenements : [{"id":3,"incart":1}]}).subscribe({
      next : res=>{
        this.route.navigate(['/ticket'],{ queryParams: { id: id }})
        console.log(res);
        
      },
      error : error=>{
        console.log(error);
        
      }
    })
  }

}
