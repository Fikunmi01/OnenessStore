import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

interface PhotoItem {
  id: number;
  img: string;
  description: string;
  fullDescription: string;
  thumbnail: string;
}

@Component({
  selector: 'app-id',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FooterComponent],
  templateUrl: './id.component.html',
  styleUrl: './id.component.scss',
})
export class IdComponent implements OnInit {
  photoId: number | null = null;
  selectedPhoto: PhotoItem | null = null;
  photosArray: PhotoItem[] = [
    {
      id: 1,
      img: '/assets/firstImg.jpg',
      description:
        'Shawn recording in the studio with World Class Producer & Arranger Charles Chello',
      fullDescription:
        'In the studio with Arranger/Producer Charles Calello. Mr. Calello has had more hit records and worked with more recording artists than probably any other Arranger in the Music Industry (his many credits include 30 Top Ten Hits). He has Arranged and/or Produced music, for example, for such well known personages as Frank Sinatra, Barbra Streisand, Ray Charles, Stevie Wonder, Neil Diamond, Kenny Rogers, Bruce Springsteen, Frankie Valli, The Four Seasons, Natalie Cole, B.B. King, Dionne Warwick, Gladys Knight, Luther Vandross, Liza Minelli, Randi Travis, Michael Bolton, Michael McDonald, Vince Gil, Patti Page and Juice Newton.To describe Shawn Rae, the person and the performer, Calello uses such words as “charismatic, bright, innovative, courageous and certainly in a class by himself.” He describes Shawn’s voice as “having rich lustrous and euphonious qualities, incredible range and depth, giving the songs that Shawn chooses a sensual and romantic quality.” About his unique style of vocal interpretation and ability to convey emotion, Calello marvels at “Shawn’s ability to paint a vocal picture that imparts a story in the listener’s mind rather than just a song – distinctive, yet, reminiscent of other greats,” that Charles has been privileged to work with.',
      thumbnail: '/assets/tinyimg/lower-left1.jpg', // Add your value here
    },
    {
      id: 2,
      img: '/assets/secondImg.jpg',
      description: 'Shawn Rae Challenge Yourself award',
      fullDescription:
        'Shawn with contingent of over 60 veterans and active duty personnel from all branches of the military, awarding the impressive, four foot high trophy – “Challenge Yourself…Award” to Claire Sylvia and Jerry Mulcahy. Claire is the world’s longest surviving recipient of a heart and lung transplant. Her life story is the subject of a movie starring actress, Jane Seymour. Jerry, recently saved Claire’s life by donating one of his kidneys. Shawn is announcing the Award during his, “A Night for Heroes” extravaganza.',
      thumbnail: '/assets/tinyimg/lower-center1.jpg', // Add your value here
    },
    {
      id: 3,
      img: '/assets/thirdImg.jpg',
      description: 'With General Alexander Haig',
      fullDescription: `'Shawn with General Alexander Haig, former Secretary of State, NATO Supreme Commander, and Chief of Staff for President Nixon. He was responsible for delivering Nixon's resignation letter to President Ford, Henry Kissinger and the United States Congress. General Haig had invited Shawn to an Acacemy Awards function for Drug Free America, and had asked him to speak on his behalf on National Prisoner of War Recognition Day.'`,
      thumbnail: '/assets/tinyimg/lower-right1.jpg', // Add your value here
    },
    {
      id: 4,
      img: '/assets/fourthImg.jpg',
      description: 'Shawn With the legendary Ray Charles',
      fullDescription:
        'Shawn appearing in concert with the legendary Ray Charles. Ray Charles was one of the finest jazz singers in the world. Incredible as it may be, he was also one of the greatest blues, R&B, soul, country and western, and pop vocalists who ever lived. Born into extreme poverty, and blinded by glaucoma by the age of seven, Ray Charles has a Star on Hollywood Boulevard’s Walk of Fame, a bronze bust in the Playboy Hall of Fame, a bronze medallion presented by the French Republic, and is in the Hall of Fame of almost all the musical genres previously mentioned. As a national American treasure, Ray Charles also produced dozens of gold records and received 12 Grammy Awards in his lifetime.',
      thumbnail: '/assets/tinyimg/upper-left2.jpg', // Add your value here
    },
    {
      id: 5,
      img: '/assets/fifthImg.jpg',
      description: 'Shawn With Nyhl Henson (Nyhl with Pres.Clinton)',
      fullDescription:
        'Shawn with Associate & Advisor Nyhl Henson former Chairman & CEO of Country Music Television (Nyhl with President Bill Clinton). Mr. Henson, a veteran of the communications industry, founding figure of Nickelodeon, MTV, and other cable networks, has pioneered the pay-per-view genre with events such as the Rolling Stones in concert, and created TelAuction, the industry’s first significant home shopping venture. Mr. Henson has been a consultant in a wide range of disciplines such as real estate development, which includes the development of several land-based entertainment complexes in several states, film production, the catalog industry, politics, and was media advisor to rock bands such as, the WHO. A quote from the legendary industry leader, Ted Turner, summed up the many achievements of Nyhl Henson when he referred to him as, “The smartest man in cable television.”',
      thumbnail: '/assets/tinyimg/upper-center2.jpg', // Add your value here
    },
    {
      id: 6,
      img: '/assets/sixthImg.jpg',
      description: 'Shawn Rae with Don King',
      fullDescription:
        'Shawn with Don King, world famous Boxing Promoter, while helping to raise money for the Children’s Miracle Network through Boxing for Miracles title fights. Don King has been on the cover of magazines such as Time Magazine, Sports Illustrated, Ebony and numerous others. Several cities have honored him with “Don King Day”. He has been included in the New York Times published list as among 100 African Americans who have helped shape U.S. history during the last Century. Don is tireless in his philanthropic works. The Don King Foundation has donated millions of dollars. Don’s “Turkey Tour” has given away hundreds of thousands of turkey dinners to needy families in cities across the United States. Don has said that he would like his epitaph to read, “He worked for the day when all people would be clothed in dignity”.',
      thumbnail: '/assets/tinyimg/upper-right2.jpg', // Add your value here
    },
    {
      id: 7,
      img: '/assets/seventhImg.jpg',
      description:
        'Shawn in the ring announcing boxing match for ShowTime Television World Broadcast',
      fullDescription:
        'Shawn in the ring announcing boxing match for ShowTime Television World Broadcast.',
      thumbnail: '/assets/tinyimg/lower-left2.jpg', // Add your value here
    },
    {
      id: 8,
      img: '/assets/eightImg.jpg',
      description: 'Shawn Rae with the Legendary Angelo Dundee',
      fullDescription:
        'Shawn was speaking at a Boxing Press Conference along with Angelo Dundee for an upcoming World Title Bout. Angelo Dundee, known as “ The Great Ambassador for Boxing”, has trained some of the greatest fighters in history, including 15 World Champions. His name has always been intertwined with that of the great Muhammad Ali, because he persuaded Ali back into the ring when Ali wanted to quit after the first time he beat Sonny Liston. After a 21-year partnership, which impacted the far reaches of the world, both names will always be indelibly linked. Angelo Dundee is also known for his kindness and extraordinary human qualities. Howard Cosell once said about Dundee, “He is the only man in boxing to whom I would entrust my own son.”',
      thumbnail: '/assets/tinyimg/lower-center2.jpg', // Add your value here
    },
    {
      id: 9,
      img: '/assets/ninthImg.jpg',
      description: 'Shawn Rae performing for World Broadcast',
      fullDescription:
        'Shawn performing his nationally acclaimed, new arrangement of “The Star-Spangled Banner,” for World Broadcast.',
      thumbnail: '/assets/tinyimg/lower-right2.jpg', // Add your value here
    },
    {
      id: 10,
      img: '/assets/tenthImg.jpg',
      description:
        'Shawn Rae with Rock & Roll Hall of Fame Legend Frenkie Valli',
      fullDescription:
        'Shawn Rae in concert with Rock and Roll Hall of Fame inductee, Frankie Valli. Frankie Valli is best known as lead singer of the “The Four Seasons,” one of the biggest music acts of the 1960’s, who were not derailed by the Beatles invasion in 1964. Valli scored over 25 top 40 hits with, “The Four Seasons.” and had 10 top 40 hits, as a solo act in the late 1960’s, and again in the late 1970’s. Valli is also popularly known for his title track of the best-selling movie sound track, “Grease,” and “Big Girls Don’t Cry,” for one of the most beloved and popular films of 1987, “Dirty Dancing.”',
      thumbnail: '/assets/tinyimg/upper-left3.jpg', // Add your value here
    },
    {
      id: 11,
      img: '/assets/elevenImg.jpg',
      description:
        'Shawn with peace activist Arun Gandhi (Martin Luther King, Jr. Mahatama Gandhi)',
      fullDescription: `'Shawn being recognized by keynote speaker, world renowned, peace activist, Arun Gandhi, at the Martin Luther King, Jr. Tribute. Arun Gandhi is the grandson of Mahatama Gandhi, who was the philosophical mentor of Rev. Dr. Martin Luther King, Jr.
Bambi had included Martin Luther King, Jr.’s, "I have a dream", speech sample in his nationally acclaimed arrangement of “The Star-Spangled Banner".
The photograph (inset) above is of Martin King Luther, Jr., dining with his wife Coretta Scott King and their children. The Baptist minister has Mahatama Gandhi's picture on the wall right above his dinner table. Even though MLK, Jr., said his grace to God in the name of Jesus, Gandhi's picture, even though he was a Hindu and perceived to believe in Idolatry, was ever present right above MLK, Jr.'s, dinner table. Therefore, when Martin Luther King, Jr., said, "I have a dream, that one day Blacks and Whites, Jews and Gentiles, Protestants and Catholics will sit down together and sing the old Negro spiritual, free at last, free at last, thank God Almighty we're free at last", it can be easily surmised that he translated his words into deeds, and therefore, meant what he said in his real life.'`,
      thumbnail: '/assets/tinyimg/upper-center3.jpg', // Add your value here
    },
    {
      id: 12,
      img: '/assets/twelveImg.jpg',
      description: 'Shawn on Leaders Panel with “Famous Amos”',
      fullDescription:
        'Shawn Rae on Leaders Panel at press conference with Who’s Who of American Business, which included Wally Amos, founder of internationally known, “Famous Amos Products,” moderated by Entrepreneurial Edge Magazine. Sponsors included, BellSouth, Okidata, and Princeton Capital.Wally Amos is an American icon. His name is a household word. He is the founder of “Famous Amos Cookies,” and Father of the gourmet chocolate chip cookie industry. He is an author and an entrepreneur, a great motivational speaker, has graced the covers of numerous magazines, and has won many awards and accolades. In his honor, his shirt and Panama hat have been included in the Smithsonian Institution Business Americana Collection.',
      thumbnail: '/assets/tinyimg/lower-right3.jpg', // Add your value here
    },
    {
      id: 13,
      img: '/assets/thirteenImg.jpg',
      description: 'Shawn Rae with Chubby Checker',
      fullDescription:
        'Shawn with the “King of Twist,” Chubby Checker. Chubby Checker popularized the first official Rock “N” Roll dance, “The Twist.” He soared to international fame with the “Twist,” which is the only record ever to reach #1 twice in music history. In 1988, he recorded “Yo Twist,” which made the Top 20 in the U.S., and #1 in Europe. He is also the only artist ever to have 9, two-sided, hit records.Chubby was discussing with Shawn his current project of putting Chubby Checker products in the market all over the U.S. and internationally.',
      thumbnail: '/assets/tinyimg/lower-left3.jpg', // Add your value here
    },
    {
      id: 14,
      img: '/assets/fourteenImg.jpg',
      description:
        'Shawn Rae with the fabulous Swing Sisters that have performed at White House Functions',
      fullDescription:
        'The Swing Sisters have appeared on television and radio and have an album to their many credits. Their performances include, many national functions, from a White House ceremony, singing for three First Ladies, performing for a celebration of Astronaut/Senator John Glenn’s lifetime achievements, the 57th Anniversary ceremony of the Battle of the Bulge Veterans and traveling internationally to promote America. The Swing Sisters have performed with national and international acts such as Rosemary Clooney, The Ink Spots, Tex Beneke Orchestra, Connie Haines, The Shawn Rae Show, The Del Vikings, and have performed with Dick Clark as Master of Ceremonies for a Tribute to Bob Hope, just to name a few. The Swing Sisters music themes of love, separation, homecoming and patriotism have a broad appeal to many audiences who find their brand of “feel great” songs and wonderful sweet harmonies unforgettable wherever they perform.',
      thumbnail: '/assets/tinyimg/lower-center3.jpg', // Add your value here
    },
    {
      id: 15,
      img: '/assets/fifteenthImg.jpg',
      description: 'Shawn with Bruce Hornsby',
      fullDescription:
        'Shawn Rae with performer Bruce Hornsby. Hornsby is best known for playing keyboards with Greatful Dead, and for his involvement in such post-Dead projects as the Further Festival. He is an incomparable keyboard wizard whose skills are widely admired. Hornsby while recording with his band, “The Range” has spawned a trio of hit singles including “Mandolin Rain,” “Every Little Kiss,” and of course, the No.1 smash, “The Way It Is”.',
      thumbnail: '/assets/tinyimg/lower-right3.jpg', // Add your value here
    },
    {
      id: 16,
      img: '/assets/sixteenthImg.jpg',
      description: 'Shawn Rae with Tony Orlando',
      fullDescription: `'Tony Orlando & Shawn Rae. Tony writes: "You look like my brother, and you are from now on. Please read for the Tony Orlando Story, a film for T.V. – I'll let you know when they will be casting – you sure look like the Tony I was." -- Tony Orlando
Tony Orlando’s brother came up to Shawn Rae a few years ago and told him that Tony would like to invite him to see him. Shawn met Tony and his entire family at his concert. Tony and his family were extremely gracious and wonderful, a lot of photographs were taken and Shawn was made to feel like he was a long lost member of his loving American family. It was a moving experience for Shawn having been born and raised till he was eighteen in the Far East, and having come to the U.S. at the invitation of the U.S. State Department, from Asia as an exchange student.
Tony Orlando is one of America’s best-loved personalities. As one of America's most endearing and enduring stars, Tony Orlando bring to the stage a warm and exhilarating energy that electrifies audiences. From million selling records (five number one hits), a very popular and highly rated weekly Television variety series Tony Orlando and Dawn Rainbow Hour on CBS which ran for four seasons (1974 to 1977), Movies and Broadway, Tony Orlando has conquered every facet of show business. In 2008, he is going to mark his 11th year as the New York Host of the Jerry Lewis MDA Labor Day Telethon Broadcast. He has been the recipient of three American Music Awards and a People’s Choice Award. For his outstanding achievements in the entertainment industry, Tony was awarded a Star on the Hollywood Walk of Fame in 1990. Tony has played to packed arenas and for five Presidents and his universal appeal has bridged many a generation gap.'`,
      thumbnail: '/assets/tinyimg/upper-left4.jpg', // Add your value here
    },
    {
      id: 17,
      img: '/assets/eighteenthImg.jpg',
      description: 'Shawn with Philip Michael Thomas of Miami Vice',
      fullDescription:
        'Shawn with Philip Michael Thomas discussing his new play “Sacha”, a beautiful, children’s play that he has written with Sandy Morais. Although Philip is best known for his role in Miami Vice, he is best remembered for his portrayal of Stix in the cult favorite, Sparkle (1976). He is a great musician, an incredible singer, and has owned a recording studio. Shawn, in his discussions with him, found him to be an extremely humble personality, who has great love and regard for children, and for the fate of mankind.',
      thumbnail: '/assets/tinyimg/upper-center4.jpg', // Add your value here
    },
    {
      id: 18,
      img: '/assets/ninteenthImg.jpg',
      description: 'Shawn Rae with Edwin McCain',
      fullDescription:
        'Shawn with Platinum Plus recording artist, Edwin McCain, whose Top 40 hit song “I Could Not Ask For More,” was featured in the movie “Message In A Bottle.” Shawn finds Edwin’s lyrics and songs both written and sung from the heart, and describes Edwin as being a “real person,” who “walks the walk.”',
      thumbnail: '/assets/tinyimg/upper-right4.jpg', // Add your value here
    },
    {
      id: 19,
      img: '/assets/twentyImg.jpg',
      description: 'Shawn Rae with Oprah Winfrey nominee, Kevin Jones',
      fullDescription:
        'Shawn with Associate and advisor, Kevin Jones, Founder and CEO of Hometown Heroes International, an affiliate of Habitat for Humanity. Hometown Heroes International partners with local hometown heroes and celebrities from their hometown or home state to bring awareness, and to provide financial assistance to a specific community need. Kevin Jones has been nominated for the Oprah Winfrey “Use Your Life Award,” the WYFFTV Jefferson Award, the United Way “Golden Rule Award,” and the prestigious Governor’s Volunteer of the Year Award. He is the author of the upcoming book, “Finding the Hero in You.”',
      thumbnail: '/assets/tinyimg/lower-left4.jpg', // Add your value here
    },
    {
      id: 20,
      img: '/assets/twentyOneImg.jpg',
      description:
        'Shawn chosen as Top 10 Speaker by US Dept. Of Commerce on "AMERICAN INGENUITY',
      fullDescription:
        'Shawn was chosen by the U.S. Department of Commerce, the United States Patent and Trademark Office and Walt Disney/Epcot to be one of the featured speakers selected from throughout the United States of America at the conference on "American Ingenuity". The event included topics such as funding, intellectual, property law as well as developing the latest state-of-the-art innovations and technologies throughout the world.',
      thumbnail: '/assets/tinyimg/lower-center4.jpg', // Add your value here
    },
    {
      id: 21,
      img: '/assets/twentyTwoImg.jpg',
      description:
        'Shawn nominated as a Judge by Intellectual Property Association',
      fullDescription:
        'Shawn was nominated and selected as one of four judges in the United States to evaluate, examine and select those innovations having the potential of making significant contributions to society and mankind as a whole. His election as a judge was made by the "Intellectual Property Owners Association" (IPO) based on his extensive knowledge and expertise in business, innovation, commercialization, and technology transfers throughout the world. The IPO includes such prestigious members as IBM, General Electric Co., AT&T, Dow Chemical Co., Coca Cola, Motorola, General Motors, Eastman Kodak Co., and other major corporate and multinational leaders.',
      thumbnail: '/assets/tinyimg/lower-right4.jpg', // Add your value here
    },
    {
      id: 22,
      img: '/assets/twentyThreeImg.jpg',
      description: 'Shawn with Countess Henrietta de Hoernle & Barbara Bonard',
      fullDescription:
        'Shawn with Philanthropist, Countess Henrietta de Hoernle, and Barbara Bonard, Associate and advisor, and Founder of the Barbara L. Bonard Foundation, which funds research and development of natural health and beauty programs. The Countess has given away millions of dollars towards charitable organizations, which include the American Red Cross, the Blood Bank, and a major university. The Countess attended Shawn’s “A Night For Heroes” tribute.',
      thumbnail: '/assets/tinyimg/lower-left1.jpg', // Add your value here
    },
    {
      id: 23,
      img: '/assets/twentyFourImg.jpg',
      description: 'Shawn With Jorge Guzman.',
      fullDescription:
        'Shawn with multi-talented Advisor, Jorge Guzman, with whom Shawn consults with regarding Latin rhythms, exotic sounds, and musical instruments from around the world.',
      thumbnail: '/assets/tinyimg/lower-center1.jpg', // Add your value here
    },
    {
      id: 24,
      img: '/assets/twentyFiveImg.jpg',
      description:
        'Shawn, playing guitar with childhood overseas band at age 16.',
      fullDescription:
        'Shawn, at center, playing guitar at age sixteen with his overseas band at a diplomatic function.',
      thumbnail: '/assets/tinyimg/lower-right1.jpg', // Add your value here
    },
    {
      id: 25,
      img: '/assets/twentySixImg.jpg',
      description: 'Shawn, with sitar player Stephen Mikes & Patricia Young',
      fullDescription: `'Shawn with American sitar player Stephan Mikes, at recording studio
for Shawn’s CD, along with Director, Producer, and song-writer Patricia Young.'`,
      thumbnail: '/assets/tinyimg/upper-left2.jpg', // Add your value here
    },
    {
      id: 26,
      img: '/assets/twentySevenImg.jpg',
      description: 'Shawn, In Israel at the Wailing Wall',
      fullDescription:
        'Shawn, In Israel with Rabbi paying his respects at the Wailing Wall.',
      thumbnail: '/assets/tinyimg/upper-center2.jpg', // Add your value here
    },
    {
      id: 27,
      img: '/assets/twentyEightImg.jpg',
      description:
        'Shawn, at Christian site at the site of Jesus CrossShawn, at Christian site at the site of Jesus Cross',
      fullDescription:
        'Shawn, at Christian site, paying his respect by putting his hand in the ground where Jesus Christ was put on the cross.',
      thumbnail: '/assets/tinyimg/upper-right2.jpg', // Add your value here
    },
    {
      id: 28,
      img: '/assets/twentyNineImg.jpg',
      description: 'Shawn with Priest, at Vatican City.',
      fullDescription:
        'Shawn with Priest, at St. Peter’s Cathedral, Vatican City, Rome.',
      thumbnail: '/assets/tinyimg/lower-left2.jpg', // Add your value here
    },
    {
      id: 29,
      img: '/assets/thirtyImg.jpg',
      description: 'Shawn, at Islamic holy site',
      fullDescription:
        'Shawn, paying his respect at the third holiest Islamic site in the world.',
      thumbnail: '/assets/tinyimg/lower-center2.jpg', // Add your value here
    },
    {
      id: 30,
      img: '/assets/thirtyOneImg.jpg',
      description: 'Shawn, performing on stage',
      fullDescription: 'Shawn performing on stage.',
      thumbnail: '/assets/tinyimg/lower-right2.jpg', // Add your value here
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.photoId = Number(params.get('id'));
      this.selectedPhoto =
        this.photosArray.find((photo) => photo.id === this.photoId) || null;
    });
  }
}
