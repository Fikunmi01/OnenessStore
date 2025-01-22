import { ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CartService } from '../../services/cart.service';
import { Product } from '../../model/product/product.model';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, OrderSummaryComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() item!: Product;

  cartService = inject(CartService);
  private cdr = inject(ChangeDetectorRef);

  incrementQuantity(id: number) {
    this.cartService.incrementQuantity(id);
    this.cdr.markForCheck();
  }

  decrementQuantity(id: number) {
    this.cartService.decrementQuantity(id);
    this.cdr.markForCheck();
  }

  getCart() {
    return this.cartService.getCart();
  }

  getTotalQuantity() {
    return this.cartService.getCart().reduce((total, item) => total + (item.quantity ?? 0), 0);
  }
}
