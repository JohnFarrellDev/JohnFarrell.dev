export const jobs = [
  {
    id: 6,
    companyName: 'BJSS',
    startDate: 'May 2023',
    endDate: 'Present',
    position: 'Senior Software Engineer',
    responsibilities: [
      {
        id: 1,
        description:
          'Worked with British Airways to launch a site wide transformation with a particular focus from myself on a new homepage',
        technology: ['TypeScript', 'React', 'Next.js'],
      },
    ],
  },
  {
    id: 5,
    companyName: 'Aviva',
    startDate: 'November 2022',
    endDate: 'May 2023',
    position: 'Software Engineer',
    responsibilities: [
      {
        id: 1,
        description: 'Working as part of the support team to fix bugs impacting our customers',
        technology: ['TypeScript', 'React', 'Next.js', 'Go', 'AWS'],
      },
    ],
  },
  {
    id: 4,
    companyName: 'DAZN',
    startDate: 'August 2022',
    endDate: 'October 2022',
    position: 'Software engineer',
    responsibilities: [
      {
        id: 1,
        description: 'Content Discovery Team - Developed APIs to deliver a personalised content feed to users',
        technology: ['TypeScript', 'Node', 'AWS'],
      },
    ],
  },
  {
    id: 3,
    companyName: 'Made Tech',
    startDate: 'February 2021',
    endDate: 'July 2022',
    position: 'Senior software engineer',
    responsibilities: [
      {
        id: 3,
        description: 'Built a prototype of the Met Office weather app as part of a bid',
        technology: ['JavaScript', 'TypeScript', 'React', 'next.js', 'vercel'],
      },
      {
        id: 2,
        description:
          'Worked on Homes for Ukraine with DLUHC to build forms that allowed UK residents to express their interest in offering any spare bedrooms to Ukrainian refugees',
        technology: ['Ruby', 'Ruby on Rails'],
      },
      {
        id: 1,
        description:
          'Worked with Hackney social care to build a web application for social care workers to facilitate their work within the community',
        technology: ['JavaScript', 'TypeScript', 'React', 'next.js', 'C#', '.NET', 'AWS'],
      },
    ],
  },
  {
    id: 2,
    companyName: 'CACI IIG',
    startDate: 'April 2019',
    endDate: 'January 2021',
    position: 'Junior/Senior software engineer',
    responsibilities: [
      {
        id: 1,
        description:
          'Developed a project management application that integrated with Jira’s ' +
          'API to allow for ticket management between multiple teams',
        technology: ['JavaScript', 'TypeScript', 'React'],
      },
      {
        id: 2,
        description:
          'Designed and developed the frontend of a web application that tested the performance of regular expressions',
        technology: ['JavaScript', 'TypeScript', 'React', 'Adobe XD'],
      },
      {
        id: 3,
        description: 'Developed an application that allowed the configuration of communication devices',
        technology: ['JavaScript', 'TypeScript', 'React', 'Java', 'Spring', 'SNMP'],
      },
      {
        id: 4,
        description:
          'Developed a web app that gave government contractors a collaborative online platform to create work proposals',
        technology: ['JavaScript', 'TypeScript', 'Angular', 'Java', 'Spring', 'SQL'],
      },
      {
        id: 5,
        description: 'Developed an internal web app so that all new-joiners could take a required security quiz',
        technology: ['JavaScript', 'TypeScript', 'Vue', 'Java', 'Spring'],
      },
    ],
  },
  {
    id: 1,
    companyName: 'TCS',
    startDate: 'December 2017',
    endDate: 'August 2018',
    position: 'Junior software engineer',
    responsibilities: [
      {
        id: 1,
        description: 'Worked on a large scale cloud industrialisation project',
        technology: ['C#, AWS'],
      },
    ],
  },
] as const
