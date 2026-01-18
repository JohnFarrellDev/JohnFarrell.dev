type Link = {
  url: string;
  display: string;
};

export type PersonalInformation = {
  name: string;
  email: Link;
  phone: string;
  github: Link;
  website: Link;
};

const personalInformation: PersonalInformation = {
  name: 'John Farrell',
  email: { url: 'mailto:johnfarrell@fastmail.com', display: 'johnfarrell@fastmail.com' },
  phone: '+447932355833',
  github: { url: 'https://github.com/JohnFarrellDev/', display: 'github.com/JohnFarrellDev/' },
  website: { url: 'https://www.johnfarrell.dev/', display: 'JohnFarrell.dev' },
};

const skills: string[] = [
  'JavaScript/TypeScript',
  'React',
  'Next.js',
  'HTML',
  'CSS',
  'Tailwind',
  'C#/.NET',
  'Java',
  'Spring',
  'AWS',
  'CI/CD',
  'TDD',
  'Git',
  'Jest/Vitest',
];

const DEFAULT_CV = {
  personalInformation,
  skills,
};

export const CV_VARIANTS = [
  { id: 'default', label: 'Default CV', cv: DEFAULT_CV },
  { id: 'backend', label: 'Backend Engineer CV', cv: DEFAULT_CV },
  { id: 'frontend', label: 'Frontend Engineer CV', cv: DEFAULT_CV },
] as const;

export type CvVariantId = (typeof CV_VARIANTS)[number]['id'];
