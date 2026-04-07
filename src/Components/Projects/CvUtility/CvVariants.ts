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
  'Playwright',
];

export type EmploymentInformation = {
  companyName: string;
  startDate: string;
  endDate: string;
  title: string;
  projects: { companyName: string; projectName: string; description: string; technologyUsed: string[] }[];
};

const cgi: EmploymentInformation = {
  companyName: 'CGI (Acquired from BJSS)',
  startDate: 'May 2023',
  endDate: 'Present',
  title: 'Senior Software Engineer',
  projects: [
    {
      projectName: 'Qualifications Scotland Web Platform',
      companyName: 'Qualifications Scotland',
      description:
        'Led an engineering team building a content management system for a national exam body. Created a system enabling content editors to build both headless content-driven pages and headful UI-editable pages. Built a component library ensuring WCAG compliance aligned with the Scottish Government design system. Upskilled 3 client engineers. Worked with key stakeholders to bridge the gap between technical delivery and business requirements.',
      technologyUsed: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Contentful'],
    },
    {
      projectName: 'Veterinary Medicines Directorate',
      companyName: 'Veterinary Medicines Directorate',
      description:
        'Delivered complex role-based React workflows and dynamic forms as part of a technology modernisation programme. Built and maintained CRUD API endpoints using Nest.js and MikroORM with PostgreSQL. Shared frontend expertise with team members, supporting adoption of modern React and TypeScript best practices.',
      technologyUsed: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Nest.js', 'PostgreSQL'],
    },
    {
      projectName: 'IAG AI On-Call Optimisation',
      companyName: 'IAG',
      description:
        'Ingested AI-generated on-call scheduling data from spreadsheets into a structured database. Built a React and Next.js web application to visualise the data and timesheets, enabling better decision making around on-call staffing and reducing unnecessary costs.',
      technologyUsed: ['React', 'Next.js', 'TypeScript'],
    },
    {
      projectName: 'British Airways',
      companyName: 'British Airways',
      description:
        "Rebuilt an airline's homepage using Next.js, improving Lighthouse score from 25 to approximately 90. Implemented reusable code patterns for data fetching from Adobe Experience Manager (AEM) that benefited engineers across the project. Integrated the homepage with APIs for live dynamic pricing data. Served as a code owner responsible for approving code merges and deployments.",
      technologyUsed: ['React', 'Next.js', 'TypeScript'],
    },
  ],
};

const aviva: EmploymentInformation = {
  companyName: 'Aviva',
  startDate: 'November 2022',
  endDate: 'May 2023',
  title: 'Senior Software Engineer',
  projects: [
    {
      projectName: 'Car Insurance Platform',
      companyName: 'Aviva',
      description:
        'Developed a greenfield car insurance platform with carbon offsetting capabilities. Implemented UI features using TypeScript and React. Built a claim management API using Go. Deployed on AWS using Lambdas and DynamoDB.',
      technologyUsed: ['React', 'TypeScript', 'Go', 'AWS', 'DynamoDB'],
    },
  ],
};

const madeTech: EmploymentInformation = {
  companyName: 'Made Tech',
  startDate: 'February 2021',
  endDate: 'July 2022',
  title: 'Senior Software Engineer',
  projects: [
    {
      companyName: 'Met Office',
      projectName: 'Met Office Prototype App',
      description:
        'Led the technical decision making on the tech stack, CI/CD and infrastructure. Built a PWA prototype of the Met Office app landing page. Won a £7 million contract over 2 years.',
      technologyUsed: ['React', 'Next.js', 'TypeScript', 'CSS'],
    },
    {
      companyName: 'Home Office',
      projectName: 'Homes for Ukraine',
      description:
        'Worked as part of a team to build forms that allowed individuals and organisations to express their interest in housing Ukrainian refugees. Over 120,000 successful submissions within the first 2 weeks of the service being online.',
      technologyUsed: ['Ruby on Rails'],
    },
    {
      companyName: 'Hackney Council',
      projectName: 'Hackney Social Care Services',
      description:
        'Led a five person engineering team. Worked with the product owner to understand requirements and communicate progress. Built out end to end features, infrastructure, frontend and backend API. Paired with junior engineers to help upskill individuals.',
      technologyUsed: ['TypeScript', 'React', 'Next.js', 'CSS', 'C#', 'AWS'],
    },
  ],
};

const caci: EmploymentInformation = {
  companyName: 'CACI IIG',
  startDate: 'April 2019',
  endDate: 'February 2021',
  title: 'Senior Software Engineer',
  projects: [
    {
      companyName: 'Airbus',
      projectName: 'Airbus Secure Communication',
      description:
        'Worked as a full-stack web developer implementing features to allow the configuration of secure communication devices.',
      technologyUsed: ['TypeScript', 'React', 'CSS', 'Java', 'Spring'],
    },
    {
      companyName: 'Highways England',
      projectName: 'Highways England',
      description:
        'Worked as a full-stack web developer implementing features that allowed the administration of roadway work proposals.',
      technologyUsed: ['TypeScript', 'Angular', 'CSS', 'Java', 'Spring'],
    },
  ],
};

const tcs: EmploymentInformation = {
  companyName: 'Tata Consultancy Services',
  startDate: 'November 2017',
  endDate: 'October 2018',
  title: 'Software Engineer',
  projects: [
    {
      companyName: 'EDF Energy',
      projectName: 'EDF Energy',
      description: 'Produced design specifications and support documentation for a cloud industrialisation project.',
      technologyUsed: [],
    },
  ],
};

const employmentHistory: EmploymentInformation[] = [cgi, aviva, madeTech, caci, tcs];

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
