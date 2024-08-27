import Link from 'next/link'
import { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { Title } from '../Utilities/Title/Title'
import { Button } from '../Utilities/Button/Button'
import { jobs } from './Constants/jobs'

export const Experience = () => {
  const [value, setValue] = useState(0)
  const { position, startDate, endDate, responsibilities } = jobs[value]

  return (
    <section className="py-8">
      <Title title="experience" />
      <div className="mx-auto w-[80vw] max-w-[1170px] lg:grid lg:w-[90vw] lg:grid-cols-[200px_1fr] lg:gap-16">
        <div className="mb-8 flex flex-row overflow-auto lg:flex-col">
          {jobs.map((job, index) => (
            <button
              key={job.id}
              onClick={() => setValue(index)}
              className={`mx-2 my-0 cursor-pointer border-none bg-transparent px-0 py-1 text-xl capitalize leading-none tracking-[var(--spacing)] transition-all hover:text-primary-200 hover:shadow-[0_2px_var(--clr-primary-2)] lg:mb-4 lg:hover:shadow-[-2px_0_var(--clr-primary-5)] ${
                index === value
                  ? 'text-primary-200 shadow-[0_2px_var(--clr-primary-2)] lg:shadow-[-2px_0_var(--clr-primary-5)]'
                  : ''
              }`}
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
                <FaAngleDoubleRight className="text-primary-500" />
                <p className="mb-0 text-grey-300">{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
      <Link href="/about-me">
        <Button className="mx-auto block w-48 uppercase">More Info About Me</Button>
      </Link>
    </section>
  )
}
