export type NewsletterBlock =
    | { type: 'heading'; id: string; content: string; level: 1 | 2 | 3 | 4 | 5 | 6; }
    | { type: 'paragraph'; id: string; content: string; }
    | { type: 'image'; id: string; url: string; alt: string; caption?: string; }
    | { type: 'link'; id: string; text: string; url: string; }
    | { type: 'divider'; id: string; }
    | { type: 'bulletList'; id: string; items: string[]; }
    | { type: 'notice'; id: string; text: string; url?: string; }

export type NewsletterContent = NewsletterBlock[];

export enum Tags {
  Frontend = 'frontend',
  Backend = 'backend',
  Fullstack = 'fullstack',
  DevOps = 'devops',
  Cloud = 'cloud',
  Cybersecurity = 'cybersecurity',
  DataScience = 'data science',
  MachineLearning = 'machine learning',
  ArtificialIntelligence = 'artificial intelligence',
  WebDevelopment = 'web development',
  MobileDevelopment = 'mobile development',
  GameDevelopment = 'game development',
  Blockchain = 'blockchain',
  Fintech = 'fintech',
  Biotech = 'biotech',
  UX = 'UX',
  UI = 'UI',
  ProductManagement = 'product management',
  Agile = 'agile',
  Scrum = 'scrum',
  Testing = 'testing',
  QA = 'QA',
  Databases = 'databases',
  APIs = 'APIs',
  OpenSource = 'open source',
  Startups = 'startups',
  Innovation = 'innovation',
  TechPolicy = 'tech policy',
  Privacy = 'privacy',
  Accessibility = 'accessibility',
  Sustainability = 'sustainability',
}

export type Result = {
  content: string,
  tag: Tags
}
