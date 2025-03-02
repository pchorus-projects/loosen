import { HomeSection } from '~/types/home-section';
import { YoutubeVideo } from '~/types/youtube-video';

export const SITE_TITLE = 'Loosen Schaustellerbetrieb';
export const SITE_URL = 'https://loosen.ac';

export const homeSections: HomeSection[] = [
  {
    header: 'Schaustellerbetrieb in 8.&nbsp;Generation',
    text: 'Wir sind die Schaustellerfamilie Loosen aus Würselen bei Aachen. Mit unserem Autoscooter und diversen Gastronomiebetrieben sind wir auf Volksfesten in der Region vertreten. Stöbern Sie auf unserer Seite und hinterlassen Sie uns gerne eine Nachricht. Für aktuelle Infos, Spielpläne und zahlreiche Impressionen können Sie uns auf Instagram folgen.',
    image: {
      altText: 'Familie Loosen',
      path: '/images/home/familie01.jpg',
    },
  },
  {
    header: 'Autoscooter seit 1928',
    text: 'Seit über 90 Jahren sind wir mit unserem Autoscooter auf der Reise. Besuchen Sie unser beliebtes Fahrgeschäft für die ganze Familie auf verschiedenen Volksfesten in Aachen, Düren, Krefeld und anderen Orten in NRW. Dabei stehen aktuellste Technik und höchste Sicherheit für uns an erster Stelle.',
    image: {
      altText: 'Autoscooter',
      path: '/images/home/autoscooter03.jpg',
    },
    link: {
      text: 'mehr erfahren',
      to: '/autoscooter/',
    },
  },
  {
    header: 'Gastronomie',
    text: 'Kulinarisch sind wir breit aufgestellt. Wir bieten gastronomische Stände verschiedener Größen und mit unterschiedlichsten Speise- und Getränkeangeboten von vegetarischen Spezialitäten bis zu den Klassikern wie Bratwurst, Pommes Frites und Schaschlik.',
    image: {
      altText: 'Ardennen-Grill',
      path: '/images/home/ardennen-grill01.jpg',
    },
    link: {
      text: 'mehr erfahren',
      to: '/gastronomie/',
    },
  },
  {
    header: 'Greifer, Kirmesorgel und mehr',
    text: 'Vervollständigt wird unser Angebot für Volksfeste mit einem klassichen Greiferspiel, an dem jeder sein Können beweisen kann. Für die richtige Stimmung sorgt unsere liebevoll restaurierte, mehr als 100 Jahre alte Kirmesorgel.',
    image: {
      altText: 'Greiferspiel "Las Vegas"',
      path: '/images/home/greifer.jpg',
    },
    link: {
      text: 'mehr erfahren',
      to: '/ergaenzende-angebote/',
    },
  },
];

export const youtubeVideos: YoutubeVideo[] = [
  { embedUrl: 'https://www.youtube.com/embed/3hNICBHdR98?si=kjWq0aR8Eef_IGH3' },
  { embedUrl: 'https://www.youtube.com/embed/xiw0tYQQf74?si=xQxXuCCuctkDSlkh' },
  { embedUrl: 'https://www.youtube.com/embed/HPpN3VzGMxU?si=SIMupiirO-YN9aRB' },
  { embedUrl: 'https://www.youtube.com/embed/TkD8k53eHMM?si=CrkN5qki-l3Up83R' },
  { embedUrl: 'https://www.youtube.com/embed/r_2IZocIcU0?si=uO3ghseN2cEMbNc4' },
  { embedUrl: 'https://www.youtube.com/embed/TqTnS11ru_E?si=-YaRJkBQYAWz8KxS' },
  { embedUrl: 'https://www.youtube.com/embed/j3VVETLDsyI?si=tyDaadC3GGGjD7oX' },
];
