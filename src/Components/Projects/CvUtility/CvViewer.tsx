import { EmploymentInformation, PersonalInformation } from './CvVariants';

type CvViewerProps = {
  personalInformation: PersonalInformation;
  skills: string[];
  employmentHistory: EmploymentInformation[];
};

const TEAL = '#2caeba';

const sectionHeader = `text-[18px] font-bold m-0 p-0 mb-[4px] uppercase tracking-wide print:break-after-avoid`;

export function CvViewer({ personalInformation, skills, employmentHistory }: CvViewerProps) {
  return (
    <div className="bg-white border rounded p-6 print:border-0 print:p-0 print:rounded-none print:bg-white">
      <div className="flex flex-col gap-y-[20px]">
        <CvHeader {...personalInformation} />
        <Skills skills={skills} />
        <Experience employmentHistory={employmentHistory} />
        <Education />
      </div>
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
        <h1 className="text-[30px] font-bold text-center m-0 p-0 text-black">{name}</h1>
      </div>
      <div className="flex flex-col">
        <a className="text-right m-0 p-0" href={email.url}>
          {email.display}
        </a>
        <p className="text-right m-0 p-0 text-black">{phone}</p>
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
      <h2 className={sectionHeader} style={{ color: TEAL }}>
        Skills
      </h2>
      <hr className="mb-[10px] print:break-after-avoid" style={{ borderColor: TEAL }} />
      <div className={`grid ${columnsStyle} gap-x-[20px] text-[16px]`}>
        {columns.map((column, index) => (
          <div key={index} className="flex flex-col gap-y-[8px]">
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
    <section>
      <h2 className={sectionHeader} style={{ color: TEAL }}>
        Professional Experience
      </h2>
      <hr className="mb-[12px] print:break-after-avoid" style={{ borderColor: TEAL }} />
      <div className="flex flex-col gap-[14px]">
        {employmentHistory.map((job) => (
          <div key={job.companyName}>
            <div className="flex justify-between items-baseline mb-[6px]">
              <h3 className="text-[17px] font-bold m-0 p-0 leading-none text-black">
                {job.companyName} — {job.title}
              </h3>
              <p className="m-0 p-0 text-[15px] leading-none text-black">
                {job.startDate} – {job.endDate}
              </p>
            </div>
            <div className="flex flex-col gap-[8px] ml-[8px]">
              {job.projects.map((project) => (
                <div key={project.projectName}>
                  <p className="text-[15px] font-bold leading-none m-0 p-0 mb-[4px] text-black">
                    {project.projectName}
                    {project.technologyUsed.length > 0 && (
                      <span className="font-normal"> ({project.technologyUsed.join(', ')})</span>
                    )}
                  </p>
                  {project.description && (
                    <ul className="m-0 p-0 list-none flex flex-col gap-[3px]">
                      {project.description
                        .split('. ')
                        .filter(Boolean)
                        .map((point, i) => (
                          <li key={i} className="flex gap-[6px] text-[14px] text-black leading-snug">
                            <span>•</span>
                            <span>{point.replace(/\.$/, '')}</span>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="break-inside-avoid">
      <h2 className={sectionHeader} style={{ color: TEAL }}>
        Education
      </h2>
      <hr className="mb-[10px] print:break-after-avoid" style={{ borderColor: TEAL }} />
      <div className="flex justify-between items-center">
        <p className="m-0 p-0 text-[16px] leading-none text-black">MSc Computer Science — University of Kent (Merit)</p>
        <p className="m-0 p-0 text-[15px] leading-none text-black">2016 – 2017</p>
      </div>
    </section>
  );
}
