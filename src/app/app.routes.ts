import { Routes } from '@angular/router';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { FooterComponent } from '../components/footer/footer.component';
import { BiographyComponent } from '../pages/biography/biography.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'biography',
    component: BiographyComponent,
  },
];
