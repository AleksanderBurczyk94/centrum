
export interface blogCard {
  id: number;
  seoData: seoData;
  webpImg: string;
  alterImg?: string;
  alt: string;
  title: string;
  date: string;
  shortDescription: string;
  sections: Sections[];
}

export interface seoData {
  title: string;
  metaDescription: string;
}

export interface Sections {
  id: number;
  title: string;
  content: string;
  subsections?: Subsections[]
}
export interface Subsections {
  title: string;
  content: string;
}
