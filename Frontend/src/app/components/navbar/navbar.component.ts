import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
cartQuantity = 0;
  constructor(private route:Router, private cartService :CartService ) { 
    cartService.getCartObservable().subscribe((newCart)=>{
      this.cartQuantity = newCart.totalCount;
    })
  }

  ngOnInit(): void {
  }

  islogin(){
   return localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/'])
  }
}
