import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/components/model/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-ticket-stat',
  templateUrl: './ticket-stat.component.html',
  styleUrls: ['./ticket-stat.component.css']
})
export class TicketStatComponent implements OnInit {


  public list : any;
  constructor(private cartService :CartService) { }

  ngOnInit(): void {
    this.cartService.getAllOrders().subscribe({
      next : res=>{
        this.list = res
        console.log(res);
        
      },
      error : error=>{
        console.log(error);
        
      }
    })
  }

}
