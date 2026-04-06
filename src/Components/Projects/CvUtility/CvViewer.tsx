import { EmploymentInformation, PersonalInformation } from './CvVariants';

type CvViewerProps = {
  personalInformation: PersonalInformation;
  skills: string[];
  employmentHistory: EmploymentInformation[];
};

export function CvViewer({ personalInformation, skills, employmentHistory }: CvViewerProps) {
  return (
    <div className="bg-white border rounded p-6 print:border-0 print:p-0 print:rounded-none print:bg-transparent">
      <CvHeader {...personalInformation} />

      <hr className="my-[12px]" />

      <Skills skills={skills} />

      <Experience employmentHistory={employmentHistory} />

      <Education />
    </div>
  );
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
    <section className="mb-[24px] leading-none">
      <h2 className="text-[24px] m-0 p-0 mb-[12px] text-black">Skills</h2>
      <div className={`grid ${columnsStyle} gap-x-[20px] text-[16px]`}>
        {columns.map((column, index) => (
          <div key={index} className="flex flex-col grow gap-y-[8px]">
            {column.map((skill) => (
              <p className="m-0 p-0 leading-none text-black" key={skill}>
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
    <section className="mb-[24px]">
      <h2 className="text-[24px] m-0 p-0 mb-[16px] leading-none text-black">Experience</h2>
      <div>
        {employmentHistory.map((job) => (
          <div key={job.companyName}>
            <div className="flex justify-between items-center mb-[8px]">
              <h3 className="text-[18px] m-0 p-0 leading-none text-black">{job.companyName}</h3>
              <p className="m-0 p-0 text-[16px] leading-none text-black">
                {job.startDate} - {job.endDate}
              </p>
            </div>
            <ul className="ml-[16px]">
              {job.projects.map((project) => (
                <li key={project.projectName} className="flex gap-[8px]">
                  <div>
                    <p className="text-[16px] leading-none m-0 p-0 mb-[4px] text-black">
                      {project.projectName} - {project.description}
                    </p>
                    <div className="m-0 p-0">
                      <p className="leading-none text-black"></p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section>
      <h2 className="text-[24px] m-0 p-0 mb-[8px] leading-none text-black">Education</h2>
    </section>
  );
}
