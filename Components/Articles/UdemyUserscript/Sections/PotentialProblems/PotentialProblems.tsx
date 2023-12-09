import { Paragraph } from '../../../Utilities/Paragraph/Paragraph'
import { SectionTitle } from '../../../Utilities/SectionTitle/SectionTitle'

export const PotentialProblems = () => {
  return (
    <>
      <SectionTitle id="potential-problems">Potential problems</SectionTitle>
      <Paragraph>
        Udemy may have a variety of quizzes that exist outside of the two I have written UserScripts for, I may need to
        amend or create new scripts to handle future possible variations.
      </Paragraph>
      <Paragraph>
        The code is quite fragile, if Udemy change the HTML structure of their website or update CSS class names my
        scripts will break. Most likely it would only take a few minutes to update the code.
      </Paragraph>
      <Paragraph>
        There are no automated tests for any of the code in the UserScripts. It would be possible to take a snapshot of
        the HTML from a Udemy quiz to test my code against. I could also configure fetching the HTML snapshot from a
        Udemy page periodically and then run my tests to automatically catch if the HTML structure has been updated and
        requires my code to be changed. I doubt I'll do any of this though, I've already procrastinated enough making
        the scripts and writing this instead of studying AWS.
      </Paragraph>
    </>
  )
}
