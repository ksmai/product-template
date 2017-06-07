/* tslint:disable max-classes-per-file */
class GalleryImage {
  url: string;
  title: string;
  link: string;
  internal: boolean;
}

export class GalleryData {
  images: [GalleryImage, GalleryImage, GalleryImage, GalleryImage];
}
