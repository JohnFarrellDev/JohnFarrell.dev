import styles from './LessonsLearned.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { SectionTitle } from '../../../Utilities/SectionTitle/SectionTitle'
import { Paragraph } from '../../../Utilities/Paragraph/Paragraph'

export const LessonsLearned = () => {
  return (
    <>
      <SectionTitle id="lessons-learned">Lessons learned</SectionTitle>
      <Paragraph>
        By the time I got into web development the rise of the frameworks (Angular, Vue, React) had occurred, and I
        missed out on working with jQuery and vanilla JS. The frameworks are great but it is good to understand APIs
        offered by the browser and how to write vanilla JS to interact with the DOM (display object model). Working with
        UserScripts gives me some insight into web development without frameworks.
      </Paragraph>
      <Paragraph>
        An example from the code I wrote in these two scripts is that I utilised the{' '}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver">Mutation Observer</Link> class
        for the first time. Initially, when I first wrote this code I was utilising setTimeout and setInterval which
        felt hacky, I am far happier with the Mutation Observer implementation and it was a good tool to learn about.
      </Paragraph>
      <Paragraph>
        I also learned when using the mutation observer that is triggering a function that edits the HTML you need to
        ignore your own HTML changes or you'll cause infinite recursion and crash your browser :p
      </Paragraph>
      <Paragraph>
        When doing something like this I often think about the classic <Link href="https://xkcd.com/">XKCD</Link> for
        time saved vs time spent. I think it is important to also value the learning experience, if I ever need to do
        something like this again I could now do it very quickly.
      </Paragraph>
      <div className={styles.imageContainer}>
        <Image
          src="https://imgs.xkcd.com/comics/is_it_worth_the_time.png"
          alt="Is It Worth the Time?"
          width={738}
          height={600}
        />
      </div>
    </>
  )
}
