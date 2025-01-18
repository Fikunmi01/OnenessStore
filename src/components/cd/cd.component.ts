import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface CD {
  id: number;
  title: string;
  artist: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-cd',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cd.component.html',
  styleUrl: './cd.component.scss',
})
export class CDComponent {
  cds: CD[] = [
    {
      id: 1,
      title: 'Greatest Hits',
      artist: 'Classic Band',
      price: 19.99,
      image: '/api/placeholder/400/300',
    },
    {
      id: 2,
      title: 'New Album',
      artist: 'Modern Artist',
      price: 24.99,
      image: '/api/placeholder/400/300',
    },
    {
      id: 3,
      title: 'Live Concert',
      artist: 'Rock Group',
      price: 22.99,
      image: '/api/placeholder/400/300',
    },
  ];
}
