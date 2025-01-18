import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface JewelryItem {
  id: number;
  name: string;
  price: number;
  image: string;
}
@Component({
  selector: 'app-jewelries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jewelries.component.html',
  styleUrl: './jewelries.component.scss',
})
export class JewelriesComponent {
  jewelryItems: JewelryItem[] = [
    {
      id: 1,
      name: 'Diamond Ring',
      price: 999.99,
      image: '/api/placeholder/400/300',
    },
    {
      id: 2,
      name: 'Gold Necklace',
      price: 599.99,
      image: '/api/placeholder/400/300',
    },
    {
      id: 3,
      name: 'Pearl Earrings',
      price: 299.99,
      image: '/api/placeholder/400/300',
    },
  ];
}
