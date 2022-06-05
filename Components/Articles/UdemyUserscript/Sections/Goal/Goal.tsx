import Link from 'next/link'
import React from 'react'
import { Paragraph } from '../../../Utilities/Paragraph'
import { SectionTitle } from '../../../Utilities/SectionTitle'

export const Goal = () => {
  return (
    <>
      <SectionTitle id="goal">Goal</SectionTitle>
      <Paragraph>
        Personally, I find myself getting easily distracted when studying for
        AWS exams on Udemy, by removing one of the more tedious steps I can
        focus better and not end up on Reddit/HackerNews.
      </Paragraph>
      <Paragraph>
        The tedious step is that I would like to export quiz sections and
        practice tests for the AWS exam into a{' '}
        <Link href="https://en.wikipedia.org/wiki/Spaced_repetition">
          Spaced Repetition Learning
        </Link>{' '}
        (SRL) app. SRL isn't a service offered on the Udemy platform. (
        <Link href="https://www.udemy.com/">Udemy</Link> is an online education
        platform)
      </Paragraph>
      <Paragraph>
        I personally use an app called{' '}
        <Link href="https://zorbi.app/">Zorbi</Link>,{' '}
        <Link href="https://apps.ankiweb.net/">Anki</Link> is another popular
        choice.
      </Paragraph>
      <Paragraph>
        Unfortunately, it is not easy to highlight the text within Udemy quiz
        pages so I created a couple of UserScripts to make this process smoother
        for me. I have come across two types of quizzes so far on Udemy, quizzes
        that exist at the end of a course section and practice exam papers. For
        each quiz type I have a unique UserScript.
      </Paragraph>
    </>
  )
}
