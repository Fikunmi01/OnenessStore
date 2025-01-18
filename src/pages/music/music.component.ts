import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MusicPreviewComponent } from '../../components/music-preview/music-preview.component';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,MusicPreviewComponent],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {

}
