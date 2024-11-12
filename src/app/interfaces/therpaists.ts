export interface Therapist {
  id: number;
  name: string;
  role: string;
  webpImg: string;
  alterImg?: string;
  assistance: string[];
  aboutMe: string;
  sections: Section[];
  qualifications: Qualifications;
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
