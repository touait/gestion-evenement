import { Injectable } from '@angular/core';
import { Cart } from '../components/model/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Event } from '../components/model/event';
import { CartItem } from '../components/model/cartItem';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url='http://localhost:3000/orders/fetch'
  private cart: Cart = this.getCartFromLocalStorage();private cartSubject : BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor(private httpService : HttpClient) { }

getAllOrders(){
  return this.httpService.get(this.url);
}

addOrder(data:any){
  return this.httpService.post("http://localhost:3000/orders/orderr",data);
}

  addToCart(event : Event):void{
    let cartItem = this.cart.items.find(item => item.event.idE === event.idE);
    if(cartItem)
    return;
    this.cart.items.push(new CartItem(event));
    this.setCartToLocalStorage();
  }

  removeFromCart (eventId: string): void {
    this.cart.items =  this.cart.items.filter(item => item.event.idE != eventId);
    this.setCartToLocalStorage();
  }

  changeQuantity(eventId: string , quantity: number){
    let cartItem = this.cart.items.find(item => item.event.idE === eventId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.event.prix;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>
{
  return this.cartSubject.asObservable();
}

private setCartToLocalStorage(): void {
  this.cart.totalPrice = this.cart.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
  this.cart.totalCount = this.cart.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

  const cartJson = JSON.stringify(this.cart);
  localStorage.setItem('Cart', cartJson);
  this.cartSubject.next(this.cart);
}

private getCartFromLocalStorage(): Cart {
  const cartJson = localStorage.getItem('Cart');
  return cartJson ? JSON.parse(cartJson) : new Cart();
}
}
