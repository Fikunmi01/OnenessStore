import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
    this.logYear();
  }
  date = new Date();
  year = this.date.getFullYear();
  logYear(): void {
    console.log(this.year, );
  }
}
