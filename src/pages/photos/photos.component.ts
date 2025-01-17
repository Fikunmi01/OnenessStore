import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss',
})
export class PhotosComponent implements OnInit {
  photosArray = [
    {
      img: '/assets/firstImg.jpg',
      description:
        'Shawn recording in the studio with World Class Producer & Arranger Charles Chello',
    },
    {
      img: '/assets/secondImg.jpg',
      description: 'Shawn Rae Challenge Yourself award',
    },

    {
      img: '/assets/thirdImg.jpg',
      description: 'With General Alexander Haig',
    },
    {
      img: '/assets/fourthImg.jpg',
      description: 'Shawn With the legendary Ray Charles',
    },
    {
      img: '/assets/fifthImg.jpg',
      description: 'Shawn With Nyhl Henson (Nyhl with Pres.Clinton)',
    },
    {
      img: '/assets/sixthImg.jpg',
      description: 'Shawn Rae with Don King',
    },
    {
      img: '/assets/seventhImg.jpg',
      description:
        'Shawn in the ring announcing boxing match for ShowTime Television World Broadcast',
    },
    {
      img: '/assets/eightImg.jpg',
      description: 'Shawn Rae with the Legendary Angelo Dundee',
    },
    {
      img: '/assets/ninthImg.jpg',
      description: 'Shawn Rae performing for World Broadcast',
    },
    {
      img: '/assets/tenthImg.jpg',
      description:
        'Shawn Rae with Rock & Roll Hall of Fame Legend Frenkie Valli',
    },
    {
      img: '/assets/elevenImg.jpg',
      description:
        'Shawn with peace activist Arun Gandhi (Martin Luther King, Jr. Mahatama Gandhi)',
    },
    {
      img: '/assets/twelveImg.jpg',
      description: 'Shawn on Leaders Panel with “Famous Amos”',
    },
    {
      img: '/assets/thirteenImg.jpg',
      description: 'Shawn Rae with Chubby Checker',
    },
    {
      img: '/assets/fourteenImg.jpg',
      description:
        'Shawn Rae with the fabulous Swing Sisters that have performed at White House Functions',
    },
    {
      img: '/assets/fifteenthImg.jpg',
      description: 'Shawn with Bruce Hornsby',
    },
    {
      img: '/assets/sixteenthImg.jpg',
      description: 'Shawn Rae with Tony Orlando',
    },
    {
      img: '/assets/eighteenthImg.jpg',
      description: 'Shawn with Philip Michael Thomas of Miami Vice',
    },
    {
      img: '/assets/ninteenthImg.jpg',
      description: 'Shawn Rae with Edwin McCain',
    },
    {
      img: '/assets/twentyImg.jpg',
      description: 'Shawn Rae with Oprah Winfrey nominee, Kevin Jones',
    },
    {
      img: '/assets/twentyOneImg.jpg',
      description:
        'Shawn chosen as Top 10 Speaker by US Dept. Of Commerce on "AMERICAN INGENUITY',
    },
    {
      img: '/assets/twentyTwoImg.jpg',
      description:
        'Shawn nominated as a Judge by Intellectual Property Association',
    },
    {
      img: '/assets/twentyThreeImg.jpg',
      description: 'Shawn with Countess Henrietta de Hoernle & Barbara Bonard',
    },
    {
      img: '/assets/twentyFourImg.jpg',
      description: 'Shawn With Jorge Guzman.',
    },
    {
      img: '/assets/twentyFiveImg.jpg',
      description:
        'Shawn, playing guitar with childhood overseas band at age 16.',
    },

    {
      img: '/assets/twentySixImg.jpg',
      description: 'Shawn, with sitar player Stephen Mikes & Patricia Young',
    },

    {
      img: '/assets/twentySevenImg.jpg',
      description: 'Shawn, In Israel at the Wailing Wall',
    },

    {
      img: '/assets/twentyEightImg.jpg',
      description:
        'Shawn, at Christian site at the site of Jesus CrossShawn, at Christian site at the site of Jesus Cross',
    },

    {
      img: '/assets/twentyNineImg.jpg',
      description: 'Shawn with Priest, at Vatican City.',
    },
    {
      img: '/assets/thirtyImg.jpg',
      description: 'Shawn, at Islamic holy site',
    },

    {
      img: '/assets/thirtyOneImg.jpg',
      description: 'Shawn, performing on stage',
    },
    // Ta@ld80Tinu
    // Gerald.Esekhegbe@ambank.com
  ];
  visiblePhotosArray: { img: string; description: string }[] = [];
  itemsToLoad = 8;
  currentIndex = 0;

  ngOnInit() {
    this.loadMore();
  }

  loadMore() {
    const nextIndex = this.currentIndex + this.itemsToLoad;
    this.visiblePhotosArray = this.photosArray.slice(0, nextIndex);
    this.currentIndex = nextIndex;
  }
}
