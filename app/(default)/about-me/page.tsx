import { Title } from '../../../Components/Title';
import { produceMetaData } from '../../../Utilities/produceMetaData';
import Image from 'next/image';

export const metadata = produceMetaData({
  title: 'About Me | John Farrell',
  description: 'Information about John Farrell',
});

export default function AboutMe() {
  return (
    <section className="page-center">
      <article>
        <Title title="About Me" className='mb-2-p' underlineClassName='mb-8-p' />

        <div className="block gap-[50px] lg:flex">
          <Image
            src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/about-me-trixie.jpeg"
            alt="Photo of my black cat Trixie"
            width={460}
            height={345}
            className="mx-auto h-auto max-w-[min(460px,100%)] shrink-0 rounded-md object-cover"
          />

          <div>
            <p className="leading-8">
              Hi, I'm John Farrell, a professional software engineer. I started programming in 2016 by teaching myself a
              little bit of coding following the completion of my BSc in Biomedical Science. It became my ambition to
              become a software engineer, so I enrolled in a master's degree in Computer Science at the University of
              Kent. After graduating, I worked at <a href="https://www.tcs.com/">Tata Consultancy Services</a>, where I
              had the opportunity to be involved in a large scale cloud industrialization project. I then became
              interested in web development and joined a consultancy called{' '}
              <a href="https://www.linkedin.com/showcase/caci-information-intelligence-group/">CACI IIG</a> where I
              worked on several web app projects. I then joined the <a href="https://www.madetech.com/">Made Tech</a>{' '}
              team which is also a consultancy and continued with a focus on developing web apps for the UK public.
            </p>

            <div className="flex flex-wrap gap-2">
              {techStack.map((item) => (
                <span
                  key={item.id}
                  className="inline-block rounded-md bg-zinc-200 p-2 text-sm uppercase tracking-wide text-gray-800"
                >
                  {item.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

const techStack = [
  {
    id: 1,
    title: 'JavaScript',
  },
  {
    id: 2,
    title: 'TypeScript',
  },
  {
    id: 3,
    title: 'React',
  },
  {
    id: 4,
    title: 'Node',
  },
  {
    id: 5,
    title: 'Java',
  },
  {
    id: 6,
    title: 'Spring',
  },
  {
    id: 7,
    title: 'C#',
  },
  {
    id: 8,
    title: '.NET',
  },
  {
    id: 9,
    title: 'AWS',
  },
];
