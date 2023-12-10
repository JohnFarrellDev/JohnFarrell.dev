import Link from 'next/link'
import { Banner } from '../../../Components/Banner'
import { Layout } from '../../../Components/Layout/Layout'
import { SEO } from '../../../Components/SEO/SEO'
import { Title } from '../../../Components/Utilities/Title/Title'

const AdventOfCode2023 = () => {
  return (
    <Layout>
      <SEO
        title="Advent of Code 2023"
        description="A detailed look at my solutions for Advent of Code 2023"
        image="https://i.imgur.com/G1kmea0.jpg"
      />
      <section className="blog-page">
        <section className="section">
          <Title title="Advent of Code 2023" />
          <div className="section-center">
            <Banner type="warning" heading="Advent of Code 2023" description="Spoilers ahead!" />
            <Banner
              type="information"
              heading="Hiring Oppurtunity"
              description={
                <>
                  The company I work for (<a href="https://www.bjss.com">BJSS</a>) is a sponsor this year, we are hiring
                  for a range of positions and skill levels so if you are interested in working at a tech consultancy
                  with interesting projects and good people message me on{' '}
                  <a href="https://www.linkedin.com/in/johnfarrelldev/">LinkedIn</a> and I can refer you
                </>
              }
            />

            <p>
              Advent of Code is a yearly event where a new programming puzzle is released every day from December 1st to
              December 25th. The puzzles consist of 2 parts and are designed to be fun, challenging, and educational.
              People from all over the world participate in Advent of Code using a wide variety of programming languages
              and skill levels.
            </p>
            <p>
              I will be using <strong>TypeScript</strong> to solve the puzzles as this is my strongest lanuage and I
              have never completed advent of code before.
            </p>
            <p>In future years I would consider another language as a learning oppurtunity</p>
            <p>
              My approach to each question is fairly simple, I will take the input and use a backtick(`) string to store
              it against a variable. I will then apply some basic parsing to extract the input data into a more usable
              format. I will then create a function for each of part 1 and part 2.
            </p>
            <p>In some cases I will write tests but the purpose of these is to help with debugging.</p>

            <ul>
              <li>Day 25 Explanation (not yet released) -</li>
              <li>Day 24 Explanation (not yet released) -</li>
              <li>Day 23 Explanation (not yet released) -</li>
              <li>Day 22 Explanation (not yet released) -</li>
              <li>Day 21 Explanation (not yet released) -</li>
              <li>Day 20 Explanation (not yet released) -</li>
              <li>Day 19 Explanation (not yet released) -</li>
              <li>Day 18 Explanation (not yet released) -</li>
              <li>Day 17 Explanation (not yet released) -</li>
              <li>Day 16 Explanation (not yet released) -</li>
              <li>Day 15 Explanation (not yet released) -</li>
              <li>Day 14 Explanation (not yet released) -</li>
              <li>Day 13 Explanation (not yet released) -</li>
              <li>Day 12 Explanation (not yet released) -</li>
              <li>Day 11 Explanation (not yet released) -</li>
              <li>Day 10 Explanation -</li>
              <li>Day 09 Explanation -</li>
              <li>Day 08 Explanation -</li>
              <li>Day 07 Explanation -</li>
              <li>
                <Link href="/articles/advent-of-code-2023/day-6">Day 06 Explanation</Link> - ⭐⭐
              </li>
              <li>Day 05 Explanation -</li>
              <li>Day 04 Explanation - ⭐⭐</li>
              <li>Day 03 Explanation - ⭐</li>
              <li>Day 02 Explanation - ⭐⭐</li>
              <li>Day 01 Explanation - ⭐⭐</li>
            </ul>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default AdventOfCode2023
