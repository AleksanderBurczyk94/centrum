
export interface blogCard {
  id: number;
  seoData: seoData;
  webpImg: string;
  alterImg?: string;
  alt: string;
  title: string;
  date: string;
  shortDescription: string;
  illustration?: Illustration;
  sections: Sections[];
}

export interface seoData {
  title: string;
  metaDescription: string;
}

export interface Sections {
  id: number;
  title: string;
  contentArray?: string[];
  subsections?: Subsections[]
  lists?: ListItem[];
  illustration?: Illustration;

}
export interface Subsections {
  title: string;
  contentArray?: string[];
  lists?: ListItem[];
  illustration?: Illustration;
}

export interface ListItem {
  type: 'unordered' | 'ordered'; // Typ listy: punktowana (ul) lub numerowana (ol)
  items: string[];
}

export interface Illustration {
  webpImg: string;
  alterImg: string;
  alt: string;
}
