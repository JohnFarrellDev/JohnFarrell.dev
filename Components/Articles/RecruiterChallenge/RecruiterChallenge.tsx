import React from 'react'
import { Layout } from '../../Layout'
import { SEO } from '../../SEO'
import { Paragraph } from '../Utilities/Paragraph'
import styles from './RecruiterChallenge.module.css'
import { ArticleTimeStamps } from '../Utilities/ArticleTimeStamps'
import { BlockQuote } from '../Utilities/BlockQuote'
import Link from 'next/link'

export const RecruiterChallenge = () => {
  return (
    <Layout>
      <SEO
        title="Fun Challenge for Recruiters | John Farrell"
        description="Win £250 by providing proof of a common stat shared on LinkedIn by recruiters"
        image="https://i.imgur.com/WOpYcG8.jpeg"
      />
      <section className="blog-page">
        <section className="section">
          <div className="section-center">
            <div className={styles.textContainer}>
              <h2 className={styles.dearRecruiters}>Dear recruiters</h2>
            </div>

            <Paragraph>
              On LinkedIn, I keep seeing the same claims made that I am a bit
              doubtful about.
            </Paragraph>
            <Paragraph>
              If you can provide a primary source* as proof for any of these
              claims shoot me a DM (
              <Link href="https://www.linkedin.com/in/johnfarrelldev/">
                LinkedIn
              </Link>
              , <Link href="https://twitter.com/JohnFar55526330">Twitter</Link>)
              or email (
              <Link href="mailto:johnfarrell@fastmail.com">
                JohnFarrell@fastmail.com
              </Link>
              ).
            </Paragraph>

            <BlockQuote>
              80% of people who accept counteroffers will leave their current
              employer anyway within 6 months.
            </BlockQuote>

            <BlockQuote>
              93% of Professionals who accepted their counteroffer left within
              18 months.
            </BlockQuote>

            <p className={styles.centerLine}>
              Your reward will be <span className={styles.money}>£250 </span>{' '}
              <span className={styles.moneyFace}>🤑</span>
            </p>

            <p className={styles.centerLine}>
              Number of recruiters challenged so far{' '}
              <span className={styles.recruiterChallengeCount}>1</span>
            </p>

            <Paragraph>
              * The study must share its data and methodology (any standard
              published trustworthy study is fine). Your source can't be an
              article that makes the claim without providing a source (that's
              how we got here). There can only be one winner, whoever provides
              proof first wins.
            </Paragraph>

            <div className={styles.chillContainer}>
              <Paragraph>
                This is just a fun challenge, don't take it so seriously.
              </Paragraph>
              <Paragraph>
                I would never take a counter offer but there are multiple
                factors for why a person should or shouldn't that are personal
                to them.
              </Paragraph>
              <Paragraph>
                I empathise with recruiters who have done all the work, now
                expecting their sweet commission to come in and at the last
                second it is yoinked from them.
              </Paragraph>
              <Paragraph>
                That being said I don't think telling people they are going to
                end up still not liking their job on an un-sourced claim is a
                good argument. An additional point is that even if someone does
                leave a job 6-12 months after accepting a counter offer it does
                not mean they made a mistake accepting the counter offer.
              </Paragraph>
            </div>

            <ArticleTimeStamps
              createdAt={new Date('2022-05-28T11:10:19.558Z')}
            />
          </div>
        </section>
      </section>
    </Layout>
  )
}
