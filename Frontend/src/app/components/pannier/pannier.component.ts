import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestScheduler } from 'rxjs/testing';
import { CartService } from 'src/app/services/cart.service';
import { EventService } from 'src/app/services/eventService';
import { Cart } from '../model/cart';
import { CartItem } from '../model/cartItem';
import { Event } from '../model/event';

@Component({
  selector: 'app-pannier',
  templateUrl: './pannier.component.html',
  styleUrls: ['./pannier.component.css']
})
export class PannierComponent implements OnInit {
  event : Event;
  cart : Cart;
  cartitem : CartItem;
  public list : Event[];
  
  
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
  }

  removeFromCart(cartItem : CartItem){
    this.cartService.removeFromCart(cartItem.event.idE);
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.event.idE, quantity);
  }
  
  


  // incrementLike(event: Event){
  //   let i= this.list.indexOf(event);
  //  if(i!=-1){
  //   this.list[i].quantity++;
  //   console.log(i)
  //  }
  //  }
  // incrementdown(event : Event){
  //   let i = this.list.indexOf(event);
  //   if(i!=-1){
  //     this.list[i].quantity--;
  //     console.log(i);
     
  //   }
  // }
//   displayVal='';
//   getValue(val: string):number {
//     console.warn(val)
//     this.displayVal= val
//     var test= parseInt(this.displayVal)
//    // console.log(test)
//     return test * this.event.prix;
    
//   }
// test=parseInt(this.displayVal)
//   calculeFinalPrix(event :Event):number{
//     var final = this.test * event.prix
//     console.log(final)
//   return final;
//   }
  
  // calculePrixFinal (event : Event ){
  //   event.prix * 
  // }
}
