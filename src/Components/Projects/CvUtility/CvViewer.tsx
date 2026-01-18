import { Divide } from 'lucide-react';

import React from 'react';

import { PersonalInformation } from './CvVariants';

type CvViewerProps = {
  personalInformation: PersonalInformation;
  skills: string[];
};

export function CvViewer({ personalInformation, skills }: CvViewerProps) {
  return (
    <div className="bg-white border rounded p-6">
      <CvContainer>
        <CvHeader {...personalInformation} />

        <hr className="my-[12px]" />

        <Skills skills={skills} />

        <Experience />
        {/* Placeholder sections */}
        <section className="mb-4">
          <h2 className="font-semibold mb-1">Experience</h2>
          <p className="text-sm text-gray-400 italic">Experience will appear here…</p>
        </section>

        <section>
          <h2 className="font-semibold mb-1">Education</h2>
          <p className="text-sm text-gray-400 italic">Education will appear here…</p>
        </section>
      </CvContainer>
    </div>
  );
}

function CvContainer({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

type CvHeaderProps = {
  name: PersonalInformation['name'];
  email: PersonalInformation['email'];
  phone: PersonalInformation['phone'];
  github: PersonalInformation['github'];
  website: PersonalInformation['website'];
};

function CvHeader({ name, email, phone, github, website }: CvHeaderProps) {
  return (
    <header className="grid grid-cols-3">
      <div className="flex flex-col gap-[4px]">
        <a className="m-0 p-0" href={github.url}>
          {github.display}
        </a>
        <a className="m-0 p-0" href={website.url}>
          {website.display}
        </a>
      </div>
      <div>
        <h1 className="text-[30px] font-medium text-center m-0 p-0">{name}</h1>
      </div>
      <div className="flex flex-col">
        <a className="text-right m-0 p-0" href={email.url}>
          {email.display}
        </a>
        <p className="text-right m-0 p-0">{phone}</p>
      </div>
    </header>
  );
}

const SKILLS_PER_COLUMN = 4;

function Skills({ skills }: { skills: string[] }) {
  const columns = skills.reduce(
    (prev, skill) => {
      const lastColumn = prev.at(-1);

      if (!lastColumn) return prev;

      if (lastColumn.length >= SKILLS_PER_COLUMN) {
        prev.push([skill]);
      } else {
        lastColumn.push(skill);
      }

      return prev;
    },
    [[]] as string[][]
  );

  const numberOfColumns = columns.length;

  const mapNumberOfColumnsToGridColumns: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  };

  const columnsStyle = mapNumberOfColumnsToGridColumns[numberOfColumns];

  return (
    <section>
      <h2 className="text-[24px] m-0 p-0 mb-[8px]">Skills</h2>
      <div className={`grid ${columnsStyle} gap-x-[24px] text-[16px]`}>
        {columns.map((column, index) => (
          <div key={index} className="flex flex-col gap-[4px]">
            {column.map((skill) => (
              <p className="m-0 p-0">{skill}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <div>
      <p>Experience</p>
    </div>
  );
}
