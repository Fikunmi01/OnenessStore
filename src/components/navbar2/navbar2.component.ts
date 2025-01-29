import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar2',
  standalone: true,
  imports: [RouterLink, NgClass, CommonModule],

  templateUrl: './navbar2.component.html',
  styleUrl: './navbar2.component.scss',
})
export class Navbar2Component {
  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  navMenu: boolean = false;
  mobileNav() {
    this.navMenu = !this.navMenu;
  }
}
