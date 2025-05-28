import Link from 'next/link';
import { CodeBlock } from '@/Components/CodeBlock';
import { GitHub } from '@/Components/icons/GitHub';
import { PreBlock } from '@/Components/PreBlock';
import { Title } from '@/Components/Title';
import { produceMetaData } from '@/Utilities/produceMetaData';

const parseInputCode = `function parseInput(input: string) {
  return input.split('\\n')
}`;

const solution1Code = `export function solution1(input: string[]) {
  let total = 0

  for (let i = 0; i < input.length; i++) {
    const row = input[i]
    let rowTotal = ''
    for (let j = 0; j < row.length; j++) {
      if (Number(row[j])) {
        rowTotal += row[j]
        break
      }
    }
    for (let j = row.length - 1; j >= 0; j--) {
      if (Number(row[j])) {
        rowTotal += row[j]
        break
      }
    }
    total += Number(rowTotal)
  }

  return total
}`;

const solution2Code = `export function solution2(input: string[]) {
  let total = 0

  const digits = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  }

  const digitKeys = Object.keys(digits)

  for (let i = 0; i < input.length; i++) {
    const row = input[i]
    let rowTotal = ''

    for (let j = 0; j < row.length; j++) {
      if (Number(row[j])) {
        rowTotal += row[j]
        break
      }
      let x = false
      const substring = row.substring(0, j + 1)
      for (const digit of digitKeys) {
        if (substring.includes(digit)) {
          rowTotal += digits[digit as keyof typeof digits]
          x = true
          break
        }
      }
      if (x) {
        break
      }
    }

    for (let j = row.length - 1; j >= 0; j--) {
      if (Number(row[j])) {
        rowTotal += row[j]
        break
      }
      let x = false
      const substring = row.substring(j)
      for (const digit of digitKeys) {
        if (substring.includes(digit)) {
          rowTotal += digits[digit as keyof typeof digits]
          x = true
          break
        }
      }
      if (x) {
        break
      }
    }
    total += Number(rowTotal)
  }

  return total
}`;

export const metadata = produceMetaData({
  title: 'Advent of Code 2023 | Day 1',
  description: 'A detailed look at my solution for Advent of Code 2023 | Day 1',
  image:
    'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/og-images/og-image-advent-of-code-2023.jpeg',
});

export default function Day1() {
  return (
    <section className="container">
      <article className="page-content article-content">
        <Title
          title="Advent of Code 2023 - Day 1"
          className="text-3xl md:text-4xl"
          underlineClassName="bg-orange-400"
        />
        <a className="flex" href="https://github.com/JohnFarrellDev/advent-of-code-2023/blob/master/day1.ts">
          <GitHub width={24} height={24} /> Code on GitHub
        </a>

        <Link href="/articles/advent-of-code-2023">Back to Advent of Code 2023</Link>

        <h2>The Problem</h2>

        <p>
          Day 1 was pretty easy as you would expect though I would say relatively more difficult than most year's day 1
          challenge which seems to have set the standard for this year's Advent of Code. The example input looked like
          below
        </p>

        <PreBlock
          lines={[
            `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`,
          ]}
        />

        <h3>Part 1</h3>

        <p>
          The problem for part 1 was too simply find the first and last numerical digit on each line, merge them
          together (1 and 2 becomes 12), do this for each line and sum the total.
        </p>

        <p>
          The solution for this was fairly obvious, loop through each line, within each line loop from the start of the
          string incrementing through each character until you find a number and also do the reverse decrementing from
          the end of the string until you find a number.
        </p>

        <PreBlock
          lines={[
            `1abc2 => 12
pqr3stu8vwx => 38
a1b2c3d4e5f => 15
treb7uchet => 77

total => 142`,
          ]}
        />

        <p>
          First step for the code was to create a really basic utility function to turn the input string from Advent of
          Code into an array of strings.
        </p>

        <CodeBlock canHide={false}>{parseInputCode}</CodeBlock>

        <p>That converts something like</p>

        <PreBlock
          lines={[
            `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`,
          ]}
        />

        <p>into</p>

        <PreBlock
          lines={[
            `[
  '1abc2',
  'pqr3stu8vwx',
  'a1b2c3d4e5f',
  'treb7uchet'
]`,
          ]}
        />

        <p>Then we solve that with the below function</p>

        <CodeBlock canHide={false}>{solution1Code}</CodeBlock>

        <p>
          Couple of things to note in the code, rowTotal is a string so when the numerical digit is added (which is
          actually represented a string) we concatenate the value instead of adding. The other important thing to note
          is that Number(row[j]) will be false(y) for any string that does not represent a numerical value as
          Number('not a number') returns NaN which is falsy.
        </p>

        <h3>Part 2</h3>

        <p>For part 2 we are now told that digits spelled out are also now valid numbers so for example</p>

        <PreBlock
          lines={[
            `two1nine => 29
eightwothree => 83
abcone2threexyz => 13
xtwone3four => 24
4nineeightseven2 => 42
zoneight234 => 14
7pqrstsixteen => 76

total => 281`,
          ]}
        />

        <p>I took a simple solution and tackled this problem in the exact same way with a minor variation applied</p>

        <CodeBlock canHide={false}>{solution2Code}</CodeBlock>

        <p>
          The changes added in part 2 are keeping an object with a key:value mapping of the digits one to nine and their
          values 1-9.
        </p>
        <p>
          Then as well as checking for a number as we iterate through each line (from start to end) and (end to start)
          we also check if our current substring contains any of the keys in our object mapping.
        </p>
        <p>
          If the current substring does exist within the substring we use the corresponding value in our rowTotal and
          break out of the for loop.
        </p>
        <p>
          There is an opportunity to make this code cleaner and probably more performant with the use of a{' '}
          <a href="https://en.wikipedia.org/wiki/Trie" style={{ textDecoration: 'underline' }}>
            Trie data structure
          </a>{' '}
          but I have never used this before, if I have time I will come back to this problem and learn enough to
          implement the solution using a Trie. Also considering my solution runs in about 10ms on my machine with the
          real input there is not a need for a more performant solution in this case.
        </p>
      </article>
    </section>
  );
}
