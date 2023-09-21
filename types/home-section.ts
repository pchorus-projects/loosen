import { Image } from '~/types/image';
import { Link } from '~/types/link';

export interface HomeSection {
  header: string;
  text: string;
  image: Image;
  link?: Link;
}
