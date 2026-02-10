
export type Language = 'en' | 'de' | 'ar' | 'tr';

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface SkillItem {
  category: string;
  items: string[];
}

export interface PortfolioPageContent {
  badge: string;
  title: string;
  description: string;
  stats: string[];
  timelineTitle: string;
  timelineHeading: string;
  timeline: Array<{
    title: string;
    desc: string;
  }>;
  categoriesTitle: string;
  categoriesHeading: string;
  categories: Array<{
    title: string;
    desc: string;
  }>;
  viewProjects: string;
  expertiseTitle: string;
  expertiseHeading: string;
  tableHeaders: string[];
  expertiseTable: Array<{
    domain: string;
    value: string;
    tools: string;
  }>;
  techStackTitle: string;
  techStackHeading: string;
  ctaBadge: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
  ctaSecondary: string;
  footer: string;
}

export interface Content {
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    contact: string;
    portfolio: string;
  };
  hero: {
    greeting: string;
    role: string;
    summary: string;
    downloadCv: string;
    contactMe: string;
  };
  portfolioPage: PortfolioPageContent;
  sectionTitles: {
    experience: string;
    skills: string;
    languages: string;
    contact: string;
    hobbies: string;
  };
  experience: ExperienceItem[];
  skills: SkillItem[];
  languages: {
    language: string;
    level: string;
  }[];
  hobbies: string[];
  contact: {
    address: string;
    phone: string;
    email: string;
  };
}

export type Translations = Record<Language, Content>;
