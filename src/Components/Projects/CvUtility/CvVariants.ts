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
  'CSS',
  'Tailwind',
  'HTML',
  'C#/.NET',
  'Java',
  'Spring',
  'AWS',
  'CI/CD',
  'Git',
  'TDD',
  'Jest/Vitest',
];

export type EmploymentInformation = {
  companyName: string;
  startDate: string;
  endDate: string;
  title: string;
};

const cgi: EmploymentInformation = {
  companyName: 'CGI (Acquired from BJSS)',
  startDate: 'May 2023',
  endDate: 'Present',
  title: 'Senior SOftware Engineer',
};

const aviva: EmploymentInformation = {
  companyName: 'Aviva',
  startDate: 'November 2022',
  endDate: 'May 2023',
  title: 'Senior Software Engineer',
};

const madeTech: EmploymentInformation = {
  companyName: 'Made Tech',
  startDate: 'February 2021',
  endDate: 'July 2022',
  title: 'Senior Software Engineer',
};

const caci: EmploymentInformation = {
  companyName: 'CACI IIG',
  startDate: 'April 2019',
  endDate: 'February 2021',
  title: 'Senior Software Engineer',
};

const employmentHistory: EmploymentInformation[] = [cgi, aviva, madeTech, caci];

const DEFAULT_CV = {
  personalInformation,
  skills,
  employmentHistory,
};

export const CV_VARIANTS = [
  { id: 'default', label: 'Default CV', cv: DEFAULT_CV },
  { id: 'backend', label: 'Backend Engineer CV', cv: DEFAULT_CV },
  { id: 'frontend', label: 'Frontend Engineer CV', cv: DEFAULT_CV },
] as const;

export type CvVariantId = (typeof CV_VARIANTS)[number]['id'];
