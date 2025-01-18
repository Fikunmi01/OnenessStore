import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

interface Track {
  id: number;
  title: string;
  duration: string;
  previewUrl: string;
}

interface Album {
  id: number;
  title: string;
  year: string;
  coverUrl: string;
  tracks: Track[];
}

interface Artist {
  name: string;
  albums: Album[];
}

@Component({
  selector: 'app-music-preview',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './music-preview.component.html',
  styleUrl: './music-preview.component.scss',
})
export class MusicPreviewComponent implements OnInit, OnDestroy {
  artist: Artist = {
    name: 'Tribute Album',
    albums: [
      {
        id: 1,
        title: 'Tribute Album',
        year: '2013',
        coverUrl: '/assets/albumImg1.jpg',
        tracks: [
          {
            id: 1,
            title: 'Celine Dion – The Power Of Love',
            duration: '1:12',
            previewUrl: 'https://www.shawnrae.com/files/t1b.mp3',
          },
          {
            id: 2,
            title: 'Tom Jones – Delilah',
            duration: '1:03',
            previewUrl: 'https://www.shawnrae.com/files/t2b.mp3',
          },
          {
            id: 3,
            title: 'Take the Time',
            duration: '1:33',
            previewUrl: 'https://www.shawnrae.com/files/t3b.mp3',
          },
          {
            id: 4,
            title: 'Al Jarreau – After All',
            duration: '1:14',
            previewUrl: 'https://www.shawnrae.com/files/t4b.mp3',
          },
          {
            id: 5,
            title: 'Whitney Houston – Greatest Love',
            duration: '1:11',
            previewUrl: 'https://www.shawnrae.com/files/t5b.mp3',
          },
          {
            id: 6,
            title: 'Bette Midler – From A Distance',
            duration: '1:17',
            previewUrl: 'https://www.shawnrae.com/files/t6b.mp3',
          },
          {
            id: 7,
            title: 'Engelbert – Les Bicyclettes…',
            duration: '1:01',
            previewUrl: 'https://www.shawnrae.com/files/t6b.mp3',
          },
          {
            id: 8,
            title: 'Carlos Santana – Flor De Luna',
            duration: '1:21',
            previewUrl: 'https://www.shawnrae.com/files/t8b.mp3',
          },
          {
            id: 9,
            title: 'Carlos Santana – Europa',
            duration: '1:39',
            previewUrl: 'https://www.shawnrae.com/files/t9b.mp3',
          },
          {
            id: 10,
            title: 'Carlos Santana – Samba Pati',
            duration: '1:14',
            previewUrl: 'https://www.shawnrae.com/files/t8b.mp3',
          },
        ],
      },
      {
        id: 2,
        title: 'Shawn Rae With Love - Songs To Fall In Love... Again',
        year: '2013',
        coverUrl: 'assets/albumImg2.jpg',
        tracks: [
          {
            id: 1,
            title: 'Where You Are',
            duration: '1:15',
            previewUrl: 'https://www.shawnrae.com/files/f2b.mp3',
          },
          {
            id: 2,
            title: 'Meant To Be',
            duration: '1:38',
            previewUrl: 'https://www.shawnrae.com/files/f2b.mp3',
          },
          {
            id: 3,
            title: 'Groove Me',
            duration: '1:18',
            previewUrl: 'https://www.shawnrae.com/files/f3b.mp3',
          },
          {
            id: 4,
            title: 'One In A Million',
            duration: '1:18',
            previewUrl: 'https://www.shawnrae.com/files/f4b.mp3',
          },
          {
            id: 5,
            title: 'Two Amazing',
            duration: '1:14',
            previewUrl: 'https://www.shawnrae.com/files/f5b.mp3',
          },
          {
            id: 6,
            title: 'Love Is What Happens',
            duration: '1:30',
            previewUrl: 'https://www.shawnrae.com/files/f6b.mp3',
          },
          {
            id: 7,
            title: 'Crazy In Love',
            duration: '1:37',
            previewUrl: 'https://www.shawnrae.com/files/f7b.mp3',
          },
          {
            id: 8,
            title: `You're All I Ever Needed`,
            duration: '0:59',
            previewUrl: 'https://www.shawnrae.com/files/f8b.mp3',
          },
          {
            id: 9,
            title: `Woman's Touch`,
            duration: '1:30',
            previewUrl: 'https://www.shawnrae.com/files/f9b.mp3',
          },
          {
            id: 10,
            title: 'Two Amazing / Dance Mix',
            duration: '1:08',
            previewUrl: 'https://www.shawnrae.com/files/f10b.mp3',
          },
        ],
      },
      {
        id: 3,
        title: 'Shawn Rae - In The Spirit Of ONENESS',
        year: '2013',
        coverUrl: 'assets/albumImg4.jpg',
        tracks: [
          {
            id: 1,
            title:
              'After All / The Power Of Love / The Greatest Love Of All / From A Distance',
            duration: '1:10',
            previewUrl: 'https://www.bambiwithlove.com/b.mp3',
          },
        ],
      },
      {
        id: 4,
        title: 'Shawn Rae - The Star-Spangled Banner',
        year: '2013',
        coverUrl: 'assets/albumImg3.jpg',
        tracks: [
          {
            id: 1,
            title: 'The Star-Spangled Banner',
            duration: '1:15',
            previewUrl: 'https://www.bambiwithlove.com/d.mp3',
          },
        ],
      },
    ],
  };

  currentlyPlaying: Track | null = null;
  isPlaying: boolean = false;
  playbackProgress: number = 0;
  private audioElement: HTMLAudioElement | null = null;
  private progressInterval: any;

  ngOnInit() {
    this.audioElement = new Audio();
    this.audioElement.addEventListener('ended', () => {
      this.isPlaying = false;
      this.playbackProgress = 0;
      this.clearProgressInterval();
    });
  }

  togglePlay(track: Track) {
    if (this.currentlyPlaying?.id === track.id) {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    } else {
      this.startNewTrack(track);
    }
  }

  private startNewTrack(track: Track) {
    if (this.audioElement) {
      this.audioElement.src = track.previewUrl;
      this.currentlyPlaying = track;
      this.playbackProgress = 0;
      this.play();
    }
  }

  private play() {
    this.audioElement?.play();
    this.isPlaying = true;
    this.startProgressInterval();
  }

  private pause() {
    this.audioElement?.pause();
    this.isPlaying = false;
    this.clearProgressInterval();
  }

  private startProgressInterval() {
    this.clearProgressInterval();
    this.progressInterval = setInterval(() => {
      if (this.audioElement) {
        this.playbackProgress = (this.audioElement.currentTime / 30) * 100; // Assuming 30-second preview
      }
    }, 100);
  }

  private clearProgressInterval() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }

  ngOnDestroy() {
    this.clearProgressInterval();
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement = null;
    }
  }
}
