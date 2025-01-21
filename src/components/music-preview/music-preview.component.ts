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
  description: string; // New property
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
        description: `'The Tribute Album is the first of many upcoming Shawn’s Salutes to some of the worlds greatest Singers and Musicians, in a Collection of beautifully Arranged and Orchestrated eclectic songs. The songs chosen for this Album are Celine Dion’s “The Power Of Love”, Tom Jones’s “Delilah”, Santana’s three instrumentals, including “Europa”, Engelbert Humperdinck’s “After The Loving” and "Les Bicyclettes De Belsize", Whitney Houston’s and George Benson’s “The Greatest Love Of All”, Al Jarreau’s “After All”, and Bette Midler’s “From A Distance”.All of Shawn's vocals and orchestral arrangements by Charles Calello (please click on Photo #1 on PHOTOS page for more info. on Mr. Calello), with the exception of three Santana instrumentals arranged by Eli Naim, with Shawn playing the Lead Guitar.“Charismatic, bright, innovative, courageous and certainly in a class by himself... having rich lustrous and euphonious qualities, incredible range and depth, giving the songs that Shawn chooses a sensual and romantic quality... Shawn’s ability to paint a vocal picture that imparts a story in the listener’s mind rather than just a song – distinctive, yet, reminiscent of other greats.”
Charles Calello (World famous Producer/Arranger - 30 Top Ten Hits)

"Shawn's voice has such a sincere quality and he sings with such great feeling that I can feel his spirituality in all of his music." L.S.

"As someone who was referred to Shawn's music, I find his singing very pure, warm, and compelling. It makes me feel very loved and special as a person." J.M.

"All of the famous stars on the Tribute Album should be honored that Shawn has such enormous love and respect for them and their incredible abilities. He has definitely done justice to the songs, and has also, respectfully, given each one a hint of his unique and original signature." P.Y.

"Shawn's lead guitar playing is a beautiful blend of technique and feeling. He captures in the Santana Tribute all the beauty of Santana's mysterious, and soulful feelings. Shawn makes the guitar sing, just like he vocalizes songs - a rare and winning combination in a singer." K.C.
', `,
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
        description: `
This eclectic mix of songs of true love and romance contains 10 new originals. No matter what our age, the message of true love and romance is the same for us all. Whether sung fast or slow, in contemporary fashion or as a perennial classic - love is the glue that binds us all and gives us a common ground that can be translated into any language.

"There are three kinds of people who will thrill to the sounds of “Shawn Rae With Love”; those who are looking for love, those who are in love, and yes, even those who have regretfully decided love isn’t worth the trouble. It’s not just Shawn’s breathtaking voice that thrills the heart of the listener, but his choice of songs; ten of them brand new originals, that recreate the most universal yet personal and uplifting spirit of love at its very pinnacle. How refreshing that nowhere in this masterful synthesis of orchestration, emotion, lyric and voice is there ever a hint of cynicism or expression of love’s agony. The entire work is at once uplifting, exciting, and deeply sensual..." Magazine Review (Please click on News & Events page above for complete review).

"When I played Shawn's CD at work, his voice was so peaceful and full of love that everyone at work listened to it, and it made everyone happy and mellow..." M.B.

"Shawn's voice is very soothing - it is like liquid gold being poured into a glass." W.P.`,
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
        description: `A truly inspiring Message of Love, Hope, and Peace with
Beautiful Songs & Words from the Heart.

"Our world of today definitely needs to hear what this grand message by Shawn, with its beautiful and inspirational music, has to say." N.A.

"I just loved it! It put me in a meditative state!" D.C.

"Shawn's talking voice is so soothing, so gentle,and so sincere, and Wow, can he sing!" A.K.'`,
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
        description: `"A nationally acclaimed arrangement made by Shawn
from an immigrant’s perspective.

"Shawn's arrangement coming from an immigrant's perspective is fantastic."
Charles Calello

"Makes us realize, especially with the voice samples of little children reciting the Pledge Of Allegiance, John F. Kennedy's speech sample of, "Ask not what your country can do for you, but what you can do for your country", and Martin Luther King, Jr.'s speech sample of "I Have A Dream", that America is truly a melting pot and the beacon of light for the world.

Shawn, I would like to thank you as an American for your sincerity and respect for the country you live in, which has made all things possible for you. You are truly a thankful immigrant who we welcome, and are proud to have you here." J.K.
`,
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
