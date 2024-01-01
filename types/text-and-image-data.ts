import type { Image } from './image';
import type { Link } from './link';

export interface TextAndImageData {
  header: string;
  text: string;
  link?: Link;
  image?: Image;
}
