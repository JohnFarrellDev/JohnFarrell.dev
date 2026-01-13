'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Title } from '@/Components/Title';
import { Button } from '@/Components/Button';
import { jobs } from './Constants/jobs';
import { cn } from '@/Utilities/cn';
import { ChevronsRight } from 'lucide-react';
import { PageWidthContainer } from '@/Components/Layout/PageWidthContainer';
import { PageContentContainer } from '@/Components/Layout/PageContent';

export function Experience() {
  const [value, setValue] = useState(0);
  const { position, startDate, endDate, responsibilities } = jobs[value];

  return (
    <PageWidthContainer className="bg-white">
      <PageContentContainer as="section" className="py-8">
        <Title title="experience" as="h2" />
        <div className="mt-6 lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
          <div className="mb-8 flex flex-row flex-wrap justify-center gap-8 overflow-auto lg:flex-col lg:justify-start lg:gap-4">
            {jobs.map((job, index) => (
              <button
                key={job.id}
                onClick={() => setValue(index)}
                className={cn(
                  'cursor-pointer border-none bg-transparent px-0 py-1 text-xl capitalize leading-none tracking-(--spacing) transition-all hover:text-primary-900 hover:shadow-[0_2px_var(--clr-primary-900)] lg:hover:shadow-[-2px_0_var(--clr-primary-600)]',
                  {
                    'text-primary-900 shadow-[0_2px_var(--clr-primary-900)] lg:shadow-[-2px_0_var(--clr-primary-600)]':
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
            <p className="tracking-(--spacing)">{`${startDate} - ${endDate}`}</p>
            <div className="grid grid-cols-1 gap-4">
              {responsibilities.map((item) => (
                <div key={item.id} className="flex items-center gap-8">
                  <ChevronsRight className="shrink-0 text-primary-600" />
                  <p className="mb-0 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
        <Link href="/about-me" className="mx-auto mt-6 block w-fit">
          <Button className="w-48 rounded-lg uppercase">More Info About Me</Button>
        </Link>
      </PageContentContainer>
    </PageWidthContainer>
  );
}
