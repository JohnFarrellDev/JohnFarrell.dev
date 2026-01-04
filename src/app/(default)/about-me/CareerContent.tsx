import { Modal } from '@/Components/Modal';
import { Button } from '@/Components/Button';
import { Chevron } from '@/Components/icons/Chevron';
import { ReactNode } from 'react';

interface CareerContentProps {
  dialogIndex: number | null;
  setDialogIndex: (index: number) => void;
  closeDialog: () => void;
}

interface CareerSection {
  title: string;
  content: ReactNode;
}

const careerSections: CareerSection[] = [
  {
    title: 'BSc in Biomedical Science',
    content: (
      <>
        <p>
          Biology (particularly human biology) and chemistry were major interests of mine during my A-levels, which
          naturally led me to study Biomedical Science. As the degree progressed, I realised my interests were shifting
          away from the biomedical field.
        </p>
        <p>
          While I sometimes wish I had chosen computer science from the start, I don't regret my time at Keele
          University and the path it helped set me on.
        </p>
      </>
    ),
  },
  {
    title: 'Self Teaching Code',
    content: (
      <>
        <p>
          Began self-directed learning in programming, starting with Python, and built small projects to practice core
          programming fundamentals.
        </p>
        <p>This was the turning point that led me to pursue formal study and a career in web development.</p>
      </>
    ),
  },
  {
    title: 'MSc in Computer Science',
    content: (
      <>
        <p>
          Completed a one-year MSc Computer Science conversion at the University of Kent covering Java, algorithms,
          systems design, web development, and machine learning.
        </p>
        <p>
          Group projects provided practical experience with version control, architectural trade-offs, and delivering
          software under time constraints.
        </p>
      </>
    ),
  },
  {
    title: 'Joining TCS',
    content: (
      <>
        <p>Joined TCS as a junior software engineer and worked on a large scale cloud industrialisation programme.</p>
        <p>
          The role provided early exposure to enterprise delivery, large organisations, and cloud environments, while
          also highlighting the importance of role fit and seeking hands on development opportunities early in a career.
        </p>
      </>
    ),
  },
  {
    title: 'Working at CACI',
    content: (
      <>
        <p>
          Joined CACI IIG and progressed from junior to senior engineer, working primarily as a full stack developer on
          multiple enterprise projects for our clients.
        </p>
        <p>
          Delivered applications including secure device configuration tools, government proposal platforms, internal
          tooling, and integrations with systems such as Jira. Work spanned frontend and backend development on security
          conscious systems.
        </p>
        <p className="mt-3">Tech: TypeScript, React, Java, Spring, Angular, Postgres.</p>
      </>
    ),
  },
  {
    title: 'Working at Made Tech',
    content: (
      <>
        <p>
          I joined Made Tech as a senior engineer, where I worked on a range of public sector projects, mostly focused
          on building modern, user centred digital services.
        </p>
        <p>
          The largest project I worked on was for Hackney's social care services team, where I led a five person
          engineering team. I worked closely with the product owner to understand requirements and communicate progress,
          while also building end to end features across infrastructure, frontend, and backend APIs.
        </p>
        <p>
          I also worked on the Homes for Ukraine service, where I was part of a team building a simple website with
          forms that allowed individuals and organisations to register their interest in housing Ukrainian refugees. The
          service saw over 120,000 successful submissions within the first two weeks of going live.
        </p>
        <p>
          One of my biggest personal wins of mine was that I worked on a prototype for the Met Office app. I led a lot
          of the technical decision making around the tech stack, CI/CD, and infrastructure, and helped build a PWA
          prototype of the app. The work ultimately contributed to Made Tech winning a £7 million contract over two
          years with the Met Office.
        </p>
        <p>
          A big part of my role at Made Tech was supporting other engineers. I regularly paired with junior engineers to
          help them develop their skills.
        </p>
      </>
    ),
  },
  {
    title: 'Working at Aviva',
    content: (
      <>
        <p>Worked at Aviva as a software engineer supporting a large scale car insurance platform.</p>
        <p>
          Contributed to resolving production issues affecting customers and worked across frontend and backend services
          in a cloud first microservice environment.
        </p>
      </>
    ),
  },
  {
    title: 'Working at BJSS + CGI',
    content: (
      <>
        <p>
          Joined BJSS as a senior software engineer (later acquired by CGI), working across a wide variety of client
          projects in different domains.
        </p>
        <p>Led development on a major British Airways homepage rebuild and CMS integration.</p>
        <p>Helped to deliver AI enabled tooling for IAG to assist with improve staff scheduling.</p>
        <p>Developed the frontend of an internal AI assisted tool to improve efficiency when bidding for new work.</p>
        <p>
          Worked with a large public exam body to modernise their website by integrating with a new CMS as well as
          building a custom UI library. Responsibilities also included setting up CI/CD and cloud infrastructure. Also
          worked closely with their junior engineers to up-skill their engineers.
        </p>
      </>
    ),
  },
];

export function CareerContent({ dialogIndex, setDialogIndex, closeDialog }: CareerContentProps) {
  const dialogContent = careerSections.at(dialogIndex ?? -1);

  const atFirstSection = dialogIndex === 0;
  const atLastSection = careerSections.length - 1 === dialogIndex;

  return (
    <Modal isOpen={typeof dialogIndex === 'number'} onClose={closeDialog}>
      <Modal.Title title={dialogContent?.title ?? ''} />
      <Modal.Content>{dialogContent?.content ?? ''}</Modal.Content>

      <Modal.Footer className="flex justify-between">
        <button
          className="text-primary-800 disabled:text-gray-500"
          disabled={atFirstSection}
          aria-disabled={atFirstSection}
          type="button"
          onClick={() => dialogIndex !== null && setDialogIndex(dialogIndex - 1)}
          aria-label={atFirstSection ? 'Disabled - no section before this' : 'Go to previous career item'}
          title={atFirstSection ? 'Disabled - no section before this' : 'Go to previous career item'}
        >
          <Chevron className="h-[60px] w-[60px]" aria-hidden={true} />
        </button>
        <Button type="submit">Close</Button>
        <button
          className="text-primary-800 disabled:cursor-not-allowed disabled:text-gray-500"
          disabled={atLastSection}
          aria-disabled={atLastSection}
          type="button"
          onClick={() => dialogIndex !== null && setDialogIndex(dialogIndex + 1)}
          aria-label={atLastSection ? 'Disabled - no section after this' : 'Go to next career item'}
          title={atLastSection ? 'Disabled - no section after this' : 'Go to next career item'}
        >
          <Chevron className="h-[60px] w-[60px] rotate-180" aria-hidden={true} />
        </button>
      </Modal.Footer>
    </Modal>
  );
}
