import ImageKit from 'imagekit';
import { ParsedQs } from 'qs';
import * as dotenv from 'dotenv';
dotenv.config();

export enum imagekitCategories {
  art = 'art',
  code = 'coding',
  favourites = 'fav',
}

export const imagekitArt = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || '',
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
  urlEndpoint: `${process.env.IMAGEKIT_URL}/${imagekitCategories.art}` || '',
});

export const imagekitCode = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || '',
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
  urlEndpoint: `${process.env.IMAGEKIT_URL}/${imagekitCategories.code}` || '',
});

export const imagekitFavourites = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || '',
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
  urlEndpoint:
    `${process.env.IMAGEKIT_URL}/${imagekitCategories.favourites}` || '',
});
