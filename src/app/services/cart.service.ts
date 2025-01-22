import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../../model/product/product.model';
import { debounceTime } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartItems = new BehaviorSubject<Product[]>([]);
  cartItems = this._cartItems.asObservable();

  cart = signal<Product[]>([]);
  cartUpdated = signal<number>(0);

  addToCart(product: Product) {
    const existingProduct = this.cart().find((p) => p.id === product.id);
    if (existingProduct) {
      this.cart.set(
        this.cart().map((item) =>
          item.id === product.id && item.quantity !== undefined
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      this.cart.set([...this.cart(), { ...product, quantity: 1 }]);
    }
    this.cartUpdated.set(this.cartUpdated() + 1);
    this._cartItems.next(this.cart());
  }

  removeFromCart(id: number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
    this.cartUpdated.set(this.cartUpdated() + 1);
    this._cartItems.next(this.cart());
  }

  updateQuantity(id: number, quantity: number) {
    const newQuantity = Math.max(quantity, 1); // Ensure quantity is at least 1
    this.cart.set(
      this.cart().map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    this._cartItems.next(this.cart());
  }

  incrementQuantity(id: number) {
    this.cart.set(
      this.cart().map((item) =>
        item.id === id && item.quantity !== undefined
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
    this._cartItems.next(this.cart());
  }

  decrementQuantity(id: number) {
    this.cart.set(
      this.cart().map((item) =>
        item.id === id && item.quantity !== undefined && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    this._cartItems.next(this.cart());
  }

  private quantityChange$ = new Subject<{ id: number; quantity: number }>();

  constructor() {
    this.quantityChange$
      .pipe(debounceTime(300))
      .subscribe(({ id, quantity }) => {
        this.updateQuantity(id, quantity);
      });
  }
}
