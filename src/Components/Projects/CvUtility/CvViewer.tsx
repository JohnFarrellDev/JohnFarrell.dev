import { EmploymentInformation, PersonalInformation } from './CvVariants';

type CvViewerProps = {
  personalInformation: PersonalInformation;
  skills: string[];
  employmentHistory: EmploymentInformation[];
};

const sectionHeader = `text-lg print:text-[18px] font-bold m-0 p-0 mb-[4px] uppercase tracking-wide text-teal-600`;

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
    <header className="flex flex-col items-center gap-2 sm:grid sm:grid-cols-3 print:grid print:grid-cols-3">
      <div className="flex flex-col gap-[4px] items-center sm:items-start print:items-start">
        <a className="m-0 p-0" href={github.url}>
          {github.display}
        </a>
        <a className="m-0 p-0" href={website.url}>
          {website.display}
        </a>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center m-0 p-0 text-black print:text-[30px]">{name}</h1>
      </div>
      <div className="flex flex-col items-center sm:items-end print:items-end">
        <a className="m-0 p-0" href={email.url}>
          {email.display}
        </a>
        <p className="m-0 p-0 text-black">{phone}</p>
      </div>
    </header>
  );
}

function Skills({ skills }: { skills: string[] }) {
  return (
    <section>
      <h2 className={sectionHeader}>Skills</h2>
      <hr className="mb-[12px] border-teal-600" />
      <div className="columns-1 min-[400px]:columns-2 md:columns-4 print:columns-4 gap-x-[20px] text-[16px]">
        {skills.map((skill) => (
          <p className="m-0 p-0 leading-none text-black mb-[8px]" key={skill}>
            {skill}
          </p>
        ))}
      </div>
    </section>
  );
}

function Experience({ employmentHistory }: { employmentHistory: EmploymentInformation[] }) {
  return (
    <section>
      <h2 className={sectionHeader}>Professional Experience</h2>
      <hr className="mb-[12px] border-teal-600" />
      <div className="flex flex-col gap-[14px]">
        {employmentHistory.map((job) => (
          <div key={job.companyName} className="break-inside-avoid">
            <div className="flex justify-between items-baseline mb-[6px]">
              <h3 className="text-[17px] font-bold m-0 p-0 leading-none text-black">
                {job.companyName}
                <span className="hidden sm:inline print:inline"> — {job.title}</span>
              </h3>
              <p className="m-0 p-0 text-[15px] leading-none text-black hidden sm:block print:block">
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
      <h2 className={sectionHeader}>Education</h2>
      <hr className="mb-[12px] border-teal-600" />
      <div className="flex justify-between items-center">
        <p className="m-0 p-0 text-[16px] leading-none text-black">MSc Computer Science — University of Kent (Merit)</p>
        <p className="m-0 p-0 text-[15px] leading-none text-black">2016 – 2017</p>
      </div>
    </section>
  );
}
