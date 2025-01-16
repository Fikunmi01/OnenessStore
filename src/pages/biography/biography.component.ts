import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-biography',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss'],
})
export class BiographyComponent {
  activeTab: string | null = 'earlyLife';

  toggleTab(tab: string): void {
    if (this.activeTab === tab) {
      this.activeTab = tab;
    } else {
      this.activeTab = tab;
    }
  }

  earlyLife: boolean = true;
  education: boolean = false;
  career: boolean = false;
  accomplishment: boolean = false;
  personal: boolean = false;

  earlyLifeTab() {
    this.earlyLife = !this.earlyLife;
  }

  educationTab() {
    this.education = !this.education;
  }

  careerTab() {
    this.career = !this.career;
  }

  accomplishmentTab() {
    this.accomplishment = !this.accomplishment;
  }

  personalTab() {
    this.personal = !this.personal;
  }
}
