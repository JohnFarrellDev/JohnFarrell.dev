import Link from 'next/link'
import React from 'react'
import { SectionTitle } from '../../../Utilities/SectionTitle'
import Image from 'next/image'
import styles from './LessonsLearned.module.css'

export const LessonsLearned = () => {
  return (
    <>
      <SectionTitle id="lessons-learned">Lessons learned</SectionTitle>
      <p>
        By the time I got into web development the rise of the frameworks
        (Angular, Vue, React) had occurred, and I missed out on working with
        jQuery and vanilla JS. The frameworks are great but it is good to
        understand APIs offered by the browser and how to write vanilla JS to
        interact with the DOM (display object model). Working with UserScripts
        gives me some insight into web development without frameworks.
      </p>
      <p>
        An example from the code I wrote in these two scripts is that I utilised
        the{' '}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver">
          Mutation Observer
        </Link>{' '}
        class for the first time. Initially, when I first wrote this code I was
        utilising setTimeout and setInterval which felt hacky, I am far happier
        with the Mutation Observer implementation and it was a good tool to
        learn about.
      </p>
      <p>
        I also learned when using the mutation observer that is triggering a
        function that edits the HTML you need to ignore your own HTML changes or
        you'll cause infinite recursion and crash your browser :p
      </p>
      <p>
        When doing something like this I often think about the classic XKCD for
        time saved vs time spent. I think it is important to also value the
        learning experience, if I ever need to do something like this again I
        could now do it very quickly.
      </p>
      <div className={styles.imageContainer}>
        <Image
          src="https://imgs.xkcd.com/comics/is_it_worth_the_time.png"
          alt="Is It Worth the Time?"
          width={600}
          height={600}
        />
      </div>
    </>
  )
}
