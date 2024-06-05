export interface Image {
  url: string;
  lqip: string;
  caption: string;
  aspectRatio: string;
}

export interface Video {
  caption: string;
  url: string;
  thumbnail: Image;
}

export interface Children {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
}
export interface Bio {
  markDefs: any[];
  children: Children[];
  _type: string;
  style: string;
  _key: string;
}

export interface Bro {
  bio: Bio[];
  positions: string[];
  _key: string;
  image: Image;
  pillShapeText: string;
  _type: string;
  name: string;
}

export interface AboutPage {
  visionBody: string;
  _type: string;
  imagesDesktop?: Image;
  _rev: string;
  bros: Bro[];
  _id: string;
  title: string;
  visionTitle: string;
  imagesMobile?: Image[];
  _createdAt: string;
  _updatedAt: string;
  isActive: boolean;
  video?: Video;
}
