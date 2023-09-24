import { Image } from './image';
import { Link } from './link';

export interface TextAndImageData {
  header: string;
  text: string;
  link?: Link;
  image?: Image;
}
