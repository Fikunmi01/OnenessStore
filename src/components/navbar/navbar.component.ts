import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgClass, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  navMenu: boolean = false;
  mobileNav() {
    this.navMenu = !this.navMenu;
  }
}
