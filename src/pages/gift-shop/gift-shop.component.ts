import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { JewelriesComponent } from '../../components/jewelries/jewelries.component';
import { CDComponent } from '../../components/cd/cd.component';
import { CommonModule } from '@angular/common';

interface JewelryItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CD {
  id: number;
  title: string;
  artist: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-gift-shop',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    JewelriesComponent,
    CommonModule,
    CDComponent,
  ],
  templateUrl: './gift-shop.component.html',
  styleUrls: ['./gift-shop.component.scss'],
})
export class GiftShopComponent {
  selectedTab: string = 'jewelries';
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
  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  cds: CD[] = [
    {
      id: 1,
      title: 'Bambi With Love',
      artist: 'Shawn Rae',
      price: 18.98,
      image: '/assets/albumImg2.jpg',
    },
    {
      id: 2,
      title: 'Tribute Album',
      artist: 'Shawn Rae',
      price: 18.98,
      image: '/assets/albumImg1.jpg',
    },
    {
      id: 3,
      title: 'Oneness',
      artist: 'Shawn Rae',
      price: 13.98,
      image: '/assets/bambiAlbum.jpg',
    },
    {
      id: 3,
      title: 'The Star - Spangled Banner',
      artist: 'Shawn Rae',
      price: 8.98,
      image: '/assets/albumImg3.jpg',
    },
    {
      id: 3,
      title: 'A World Christmas, Love Knows No Borders',
      artist: 'Shawn Rae',
      price: 19.98,
      image: '/assets/cdGrid2.jpg',
    },
    {
      id: 3,
      title: 'A World of Romance, A Time To Fall In Love',
      artist: 'Shawn Rae',
      price: 19.98,
      image: '/assets/cdGrid.jpg',
    },
  ];
}
