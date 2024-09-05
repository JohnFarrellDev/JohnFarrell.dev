'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Title } from '../Title';
import { Button } from '../Button';
import { jobs } from './Constants/jobs';
import { cn } from '../../lib/utils';
import { ChevronsRight } from 'lucide-react';

export function Experience() {
  const [value, setValue] = useState(0);
  const { position, startDate, endDate, responsibilities } = jobs[value];

  return (
    <section className="bg-white py-8">
      <Title title="experience" />
      <div className="mx-auto mt-6 w-[80vw] max-w-[1170px] lg:grid lg:w-[90vw] lg:grid-cols-[200px_1fr] lg:gap-16">
        <div className="mb-8 flex flex-row gap-8 overflow-auto lg:flex-col lg:gap-4">
          {jobs.map((job, index) => (
            <button
              key={job.id}
              onClick={() => setValue(index)}
              className={cn(
                'cursor-pointer border-none bg-transparent px-0 py-1 text-xl capitalize leading-none tracking-[var(--spacing)] transition-all hover:text-primary-200 hover:shadow-[0_2px_var(--clr-primary-2)] lg:hover:shadow-[-2px_0_var(--clr-primary-5)]',
                {
                  'text-primary-200 shadow-[0_2px_var(--clr-primary-2)] lg:shadow-[-2px_0_var(--clr-primary-5)]':
                    index === value,
                }
              )}
            >
              {job.companyName}
            </button>
          ))}
        </div>
        <article>
          <h3 className="font-normal">{position}</h3>
          <p className="tracking-[var(--spacing)]">{`${startDate} - ${endDate}`}</p>
          <div className="grid grid-cols-1 gap-4">
            {responsibilities.map((item) => (
              <div key={item.id} className="flex items-center gap-8">
                <ChevronsRight className="shrink-0 text-primary-500" />
                <p className="mb-0 text-grey-300">{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
      <Link href="/about-me" className="mx-auto mt-6 block w-fit">
        <Button className="w-48 rounded-lg uppercase">More Info About Me</Button>
      </Link>
    </section>
  );
}
