import type { NextPage } from 'next'
import { Layout } from '../../Components/Layout'
import { SEO } from '../../Components/SEO'
import { Title } from '../../Components/Utilities/Title'
import { Banner } from '../../Components/Banner'

const AdventOfCode2023: NextPage = () => {
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
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default AdventOfCode2023
