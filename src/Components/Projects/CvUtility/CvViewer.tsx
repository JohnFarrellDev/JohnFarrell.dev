import { EmploymentInformation, PersonalInformation } from './CvVariants';

type CvViewerProps = {
  personalInformation: PersonalInformation;
  skills: string[];
  employmentHistory: EmploymentInformation[];
};

export function CvViewer({ personalInformation, skills, employmentHistory }: CvViewerProps) {
  return (
    <div className="bg-white border rounded p-6">
      <CvContainer>
        <CvHeader {...personalInformation} />

        <hr className="my-[12px]" />

        <Skills skills={skills} />

        <Experience employmentHistory={employmentHistory} />

        <Education />
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
    <section className="mb-[16px]">
      <h2 className="text-[24px] m-0 p-0 mb-[16px]">Skills</h2>
      <div className={`grid ${columnsStyle} gap-x-[24px] text-[16px]`}>
        {columns.map((column, index) => (
          <div key={index} className="flex flex-col gap-[4px]">
            {column.map((skill) => (
              <p className="m-0 p-0" key={skill}>
                {skill}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience({ employmentHistory }: { employmentHistory: EmploymentInformation[] }) {
  return (
    <section className="mb-[16px]">
      <h2 className="text-[24px] m-0 p-0 mb-[16px]">Experience</h2>
      <div>
        {employmentHistory.map((job) => (
          <div key={job.companyName}>
            <div className="flex justify-between items-center">
              <h3 className="text-[18px] m-0 p-0 leading-none">{job.companyName}</h3>
              <p className="m-0 p-0 text-[14px] leading-none">
                {job.startDate} - {job.endDate}
              </p>
            </div>
            <p>Projects</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section>
      <h2 className="text-[24px] m-0 p-0 mb-[8px]">Education</h2>
    </section>
  );
}
