export interface Therapist {
  id: number;
  seoData: seoData;
  name: string;
  role: string;
  webpImg: string;
  alterImg?: string;
  assistance: string[];
  aboutMe: string;
  sections: Section[];
  qualifications: Qualifications;
  znanyLekarz?: string;
}

export interface Section {
  title: string;
  content: string;
}

export interface Qualifications {
  education: string[];
  certificates?: string[];
  specialistTrainings?: string[];
  sensoryIntegrationTrainings?: string[];
}

export interface seoData {
  title: string;
  metaDescription: string;
}
