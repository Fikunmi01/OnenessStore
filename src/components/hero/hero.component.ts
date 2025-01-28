import { Component, AfterViewInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FooterComponent, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit {
  countryArray = [] as Array<any>;
  currentIndex = 0;

  slides: Array<any> = [
    {
      text: 'The World of Perfume & Fragrances by Shawn Rae',
      img: '/assets/upper-center3.jpg',
    },
    // {
    //   text: 'Christmas & Roman CDs Available on Amazon & Itunes',
    //   img: '/assets/upper-center1.jpg',
    // },
    // {
    //   text: 'Christmas & Roman CDs Available on Amazon & Itunes',
    //   img: '/assets/upper-center2.jpg',
    // },
  ];

  ngAfterViewInit() {
    this.updateActiveItem();
  }

  updateActiveItem(): void {
    const items = document.getElementById('slideshow')?.children;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active-item');
      }
      items[this.currentIndex].classList.add('active-item');
    }
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
}
