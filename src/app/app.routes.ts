import { Routes } from '@angular/router';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { FooterComponent } from '../components/footer/footer.component';
import { BiographyComponent } from '../pages/biography/biography.component';
import { PhotosComponent } from '../pages/photos/photos.component';
import { MusicComponent } from '../pages/music/music.component';
import { GiftShopComponent } from '../pages/gift-shop/gift-shop.component';
import { ContactComponent } from '../contact/contact.component';
import { CartComponent } from '../components/cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'biography',
    component: BiographyComponent,
  },
  {
    path: 'photos',
    component: PhotosComponent,
  },
  {
    path: 'music',
    component: MusicComponent,
  },
  { path: 'gift-shop', component: GiftShopComponent },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
