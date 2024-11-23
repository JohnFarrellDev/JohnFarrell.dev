import Link from 'next/link';
import { CodeBlock } from '../../../../../Components/CodeBlock';
import { GitHub } from '../../../../../Components/icons/GitHub';
import { PreBlock } from '../../../../../Components/PreBlock';
import { Title } from '../../../../../Components/Title';
import { produceMetaData } from '../../../../../Utilities/produceMetaData';
import Image from 'next/image';

const solution1Code = `export function solution1(input: string) {
    const parsedInput = parseInput1(input)

    console.time('solution 1')
    const waysToWinPerRound: number[] = []

    for (const { time, distance } of parsedInput) {
        let timesWon = 0
        for (let timeHeld = 0; timeHeld <= time; timeHeld++) {
            const speed = timeHeld
            const timeLeft = time - timeHeld
            const distanceTraveled = speed * timeLeft
            if (distanceTraveled > distance) timesWon++
        }
        waysToWinPerRound.push(timesWon)
    }

    console.timeEnd('solution 1')
    return waysToWinPerRound.reduce((acc, curr) => curr * acc, 1)
}`;

const solution2CodeFullLoop = `// 60ms
export function solution2FullLoop(input: string): number {
    const parsedInput = parseInput2(input)
    const { time, distance } = parsedInput

    console.time('solution 2 full loop')
    let timesWon = 0

    for (let timeHeld = 0; timeHeld <= time; timeHeld++) {
        const speed = timeHeld
        const timeLeft = time - timeHeld
        const distanceTraveled = speed * timeLeft
        if (distanceTraveled > distance) timesWon++
    }

    console.timeEnd('solution 2 full loop')
    return timesWon
}`;

const solution2CodeBreakLoopEarly = `// 16 ms
function solution2BreakLoopEarly(input: string): number {
  const parsedInput = parseInput2(input)
  const { time, distance } = parsedInput

  console.time('solution 2 break early')
  let minTimeNeededForWin = 0
  let maxTimeNeededForWin = 0

  for (let timeHeld = 0; timeHeld <= time; timeHeld++) {
    const speed = timeHeld
    const timeLeft = time - timeHeld
    const distanceTraveled = speed * timeLeft
    if (distanceTraveled > distance) {
      minTimeNeededForWin = timeHeld
      break
    }
  }

  for (let timeHeld = time; timeHeld >= 0; timeHeld--) {
    const speed = timeHeld
    const timeLeft = time - timeHeld
    const distanceTraveled = speed * timeLeft
    if (distanceTraveled > distance) {
      maxTimeNeededForWin = timeHeld
      break
    }
  }

  console.timeEnd('solution 2 break early')
  return maxTimeNeededForWin - minTimeNeededForWin + 1
}`;

const solution2Quadratic = `function quadraticFormula(
    a: number,
    b: number,
    c: number,
  ): { lowerBound: number; upperBound: number } {
    const root1 = ((-b + Math.sqrt(b * b - 4 * a * c)) / 2) * a
    const root2 = ((-b - Math.sqrt(b * b - 4 * a * c)) / 2) * a
  
    return {
      lowerBound: Math.min(root1, root2),
      upperBound: Math.max(root1, root2),
    }
  }
  
  // 0.061ms
  function solution2QuadraticEquation(input: string): number {
    const parsedInput = parseInput2(input)
    const { time, distance } = parsedInput
  
    console.time('solution 2 quadratic')
  
    const { lowerBound, upperBound } = quadraticFormula(-1, time, -distance)
  
    console.timeEnd('solution 2 quadratic')
    return Math.floor(upperBound) - Math.ceil(lowerBound) + 1
  }`;

export const metadata = produceMetaData({
  title: 'Advent of Code 2023 | Day 6',
  description: 'A detailed look at my solution for Advent of Code 2023 | Day 6',
  image:
    'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/og-images/og-image-advent-of-code-2023.jpeg',
});

export default function Day6() {
  return (
    <section className="page-center">
      <article className="article-content page-content">
        <Title
          title="Advent of Code 2023 - Day 6"
          className="text-3xl md:text-4xl"
          underlineClassName="bg-orange-400"
        />
        <a className="flex" href="https://github.com/JohnFarrellDev/advent-of-code-2023/blob/master/day6.ts">
          <GitHub width={24} height={24} /> Code on GitHub
        </a>

        <Link href="/articles/advent-of-code-2023">Back to Advent of Code 2023</Link>

        <h2>The Problem</h2>

        <p>Day 6 problem was relatively simply, the input was small and looked like below for the example</p>

        <PreBlock lines={[`Time: 7 15 30`, `Distance: 9 40 200`]} />

        <p>
          The problem involved a user with a toy boat that starts with a speed of 0. The boat is equipped with a
          charging button that can be held for as long as the user desires. Each millisecond the button is held, the
          boat's speed increases by 1 mm per millisecond. However, a timer starts counting down as soon as the button is
          pressed. Therefore, holding the button for an extended period could increase the distance traveled, but
          holding it for too long could leave the boat without enough time to cover the required distance. The task was
          to determine how many different times exist at which holding the button down for that duration would result in
          the boat traveling a greater distance than the associated target distance.
        </p>

        <h3>Part 1</h3>

        <p>
          For Part 1 of the solution, our goal is to determine how frequently the boat can travel a greater distance for
          each given time-distance pair input, and then multiply all the results together.
        </p>

        <p>To achieve this, we initially parsed the input into an array of objects structured as follows:</p>

        <PreBlock lines={[`{ time: number; distance: number }[]`]} />

        <p>So for the example</p>
        <PreBlock lines={[`[{ time: 7, distance: 9 }, { time: 15, distance: 40 }, { time: 30, distance: 200 }]`]} />

        <p>
          The initial approach for Solution 1 involved a straightforward process. We looped through the array of
          time-distance pairs, and for each object, a nested loop incremented from 0 to the specified 'time' value,
          increasing by 1 with each iteration. During this iteration, we calculated whether the distance traveled would
          exceed the given distance in the input. If it did, we incremented a counter associated with the corresponding
          object in the array. This basic solution effectively determined how many times the boat could travel a greater
          distance for each time-distance pair in the input.
        </p>

        <CodeBlock canHide={false}>{solution1Code}</CodeBlock>

        <h3>Part 2</h3>
        <p>
          Part 2 wasn't significantly more challenging than Part 1; the primary change was in how the input was
          processed. Unlike Part 1, the input for Part 2 should not be read removing the spaces between the numbers.
        </p>

        <PreBlock lines={['Time: 7 15 30', 'Distance: 9 40 200']} />

        <p>becomes a single race like so</p>

        <PreBlock lines={['{ time: 71530, distance: 940200 }']} />

        <p>
          I initially approached the problem by simply looping through the times from 0 to, in this case, 71530. The
          method involved calculating the distance that could be traveled and tallying how many instances surpassed the
          predefined distance. The code ran efficiently on my machine, taking approximately 60ms for my real input.
          However, I recognized the potential for significant optimization.
        </p>
        <CodeBlock canHide={false}>{solution2CodeFullLoop}</CodeBlock>
        <p>
          An optimization strategy involves two loops: the first starts at 0, incrementing by 1 until a valid distance
          is found for the minimum time. The second loop starts at the input time, decrementing by 1 until a valid
          distance is found for the maximum time. The difference between the maximum and minimum values, plus one,
          represents the total number of valid solutions for the duration the boat's button could be held. This approach
          leverages the certainty that all values between the minimum and maximum are valid, while those outside the
          range are not.
        </p>
        <p>
          This did solve about 4x faster for my real input but in the worst case the time complexity would not be any
          better.
        </p>
        <CodeBlock canHide={false}>{solution2CodeBreakLoopEarly}</CodeBlock>
        <p>
          However doing this it became clear the pattern between distance traveled and time held on the boat button
          follows a quadratic relationship. (
          <a href="https://en.wikipedia.org/wiki/Quadratic_formula">wikipedia article on quadratic formula</a>)
        </p>

        <PreBlock
          lines={[
            `time = 71_530`,
            `distance = 940_200`,
            `speed = time held (TH)`,
            `distance = speed * time`,
            `distance = TH * (time - TH)`,
            `940_200 = TH * (71530 - TH)`,
            `940_200 = 71_530TH - TH^2`,
            `0 = -TH^2 + 71_530TH - 940_200`,
          ]}
        />

        <Image
          src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/advent-of-code-2023/day-6/wolfram-alpha.png"
          alt="wolfram alpha graph showing a quadratic equation"
          width={500}
          height={400}
          style={{ maxWidth: '100%', height: 'auto' }}
        />

        <CodeBlock canHide={false}>{solution2Quadratic}</CodeBlock>
        <p>A nice 1000x performance improvement on our basic for loop solution.</p>
      </article>
    </section>
  );
}
