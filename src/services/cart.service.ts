import { Injectable } from '@angular/core';
// ...existing code...

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  // ...existing code...

  addToCart(item: any) {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...item, quantity: 1 });
    }
  }

  getCart() {
    return this.cart;
  }

  removeFromCart(itemId: number) {
    this.cart = this.cart.filter(item => item.id !== itemId);
  }

  incrementQuantity(itemId: number) {
    const item = this.cart.find(cartItem => cartItem.id === itemId);
    if (item) {
      item.quantity += 1;
    }
  }

  decrementQuantity(itemId: number) {
    const item = this.cart.find(cartItem => cartItem.id === itemId);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.removeFromCart(itemId);
    }
  }

  // ...existing code...
}
