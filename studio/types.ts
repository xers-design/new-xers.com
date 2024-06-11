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

export interface Testimonial {
  image: Image;
  quote: string;
  _type: string;
  name: string;
  position: string;
  _key: string;
}

export interface Platform {
  _type: string;
  name: string;
  _key: string;
  imagesDesktop: Image;
  imagesMobile: Image[];
}

export interface Highlight {
  number: string;
  _type: string;
  verb: string;
  noun: string;
  _key: string;
}

export interface Challenge {
  solution: string;
  _type: string;
  challenge: string;
  _key: string;
}

export interface Slug {
  current: string;
  _type: string;
}

export interface Project {
  name: string;
  slug: Slug;
  description: string;
  cardImage: Image;
  homeCardImage: Image;
}

export interface ProjectDetail {
  featuredImage: Image;
  featuredImageMobile: Image;
  intro?: string;
  _updatedAt: string;
  _type: string;
  testimonials?: Testimonial[];
  _createdAt: string;
  name: string;
  challengeImage?: Image;
  platforms: Platform[];
  highlights?: Highlight[];
  challenges: Challenge[];
  _id: string;
  _rev: string;
  outroImage: Image;
  logo: Image;
  slug: Slug;
  slogan: string;
  description: string;
  devPartner: string;
  client: string;
  market: string;
  previousProject: {
    name: string;
    slug: Slug;
  };
  nextProject: {
    name: string;
    slug: Slug;
  };
  firstProject: {
    name: string;
    slug: Slug;
  };
}

export interface Service {
  title: string;
  description: string;
  desktopImage: Image;
  mobileImage: Image;
}

export interface HomePage {
  _updatedAt: string;
  logos: Image[];
  isActive: boolean;
  videoTwo: Video;
  projects: Project[];
  services: Service[];
  videoOne: Video;
  highlights: Highlight[];
  _createdAt: string;
  title: string;
  _rev: string;
  _type: string;
  _id: string;
}
