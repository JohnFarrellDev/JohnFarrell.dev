import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Title from '../../components/Title'

interface PotentialPrime {
  isPrime?: boolean
  value: number
}

// return an array of "actions" and "time" for action to display
// actions include setting a message, mark prime, mark not prime, mark as iterated cell (make sure to unmark), mark as max outer for loop
// reverse then pop off
// return a list of steps to visually apply
// return a list of our prime numbers

enum Action {
  SetMessage,
  SetPrime
}

function shuffle(array: PotentialPrime[]) {
  let m = array.length

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    const i = Math.floor(Math.random() * m--)

    // And swap it with the current element.
    const t = array[m]
    array[m] = array[i]
    array[i] = t
  }

  return array
}

interface Operation {
  action: Action
}

const sieveAlgo = (potentialPrimes2: PotentialPrime[]): Operation[] => {
  const potentialPrimes = Array.from(potentialPrimes2)
  potentialPrimes[0] = { ...potentialPrimes[0], isPrime: false }
  console.log('🚀 ~ file: sieve-of-eratosthenes.tsx ~ line 19 ~ sieveAlgo ~ potentialPrimes', potentialPrimes.length)
  potentialPrimes[1] = { ...potentialPrimes[1], isPrime: false }

  const operations = []

  operations.push({
    action: Action.SetMessage,
    message: 'Initially we act as if all values are primes, obviously this false and we will correct this'
  })

  const shuffledPotentialPrimes = shuffle(Array.from(potentialPrimes2))
  shuffledPotentialPrimes.forEach((potentialPrime) => {
    operations.push({
      action: Action.SetPrime,
      index: potentialPrime.value
    })
  })

  for (let i = 2; i < Math.sqrt(potentialPrimes.length); i++) {
    if (potentialPrimes[i].isPrime) {
      potentialPrimes[i] = { ...potentialPrimes[i], isPrime: true }

      for (let j = i * 2; j < potentialPrimes.length; j += i) {
        potentialPrimes[j] = { ...potentialPrimes[j], isPrime: false }
      }
    }
  }

  return operations.reverse()
}

const SieveOfEratosthenes = () => {
  const [isCalculating, setIsCalculating] = useState(false)
  const [operations, setOperations] = useState<any[]>([])
  const [message, setMessage] = useState('')

  const [cells, setCells] = useState<PotentialPrime[]>(
    new Array(200).fill(null).map((_, i) => {
      return {
        value: i
      }
    })
  )

  const calculatePrimes = () => {
    setIsCalculating(true)
    setOperations(sieveAlgo(cells))
  }

  const updateNumberOfCells = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isCalculating) return

    const newCells = new Array(Math.round(Number.parseInt(event.target.value) / 50) * 50).fill(null).map((_, i) => {
      return {
        value: i
      }
    })
    setCells(newCells)
  }

  useEffect(() => {
    if (operations.length) {
      const operation = operations.pop()
      console.log('🚀 ~ file: sieve-of-eratosthenes.tsx ~ line 106 ~ useEffect ~ operation', operation)

      switch (operation.action) {
        case Action.SetMessage:
          setMessage(operation.message)
          break
        case Action.SetPrime:
          const updatedCells = [...cells]
          updatedCells[operation.index] = {
            ...updatedCells[operation.index],
            isPrime: true
          }
          setCells(updatedCells)
        default:
          break
      }

      if (!operation.length && isCalculating) {
        setIsCalculating(false)
      }
    }
  }, [operations.length])

  return (
    <Layout>
      <SEO title="Sieve of Eratosthenes" description="Visualization of sieve of Eratosthenes implementation" />
      <section>
        <Title title="Sieve of Eratosthenes" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <label htmlFor="max-number">Max Number to check for prime:</label>
          <input
            type="range"
            id="max-number"
            name="volume"
            min="50"
            max="1010"
            step="10"
            onChange={updateNumberOfCells}
            value={cells.length}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p>{cells.length.toLocaleString()}</p>
        </div>
        <button onClick={() => calculatePrimes()} className="btn center-btn" style={{ margin: '1rem auto' }} disabled={isCalculating}>
          Calculate primes
        </button>
        <p>{message}</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <GridContainer>
            {cells.map((cell, index) => {
              return (
                <Cell
                  key={index}
                  style={{
                    placeItems: 'center',
                    display: 'grid',
                    background: cell.isPrime ? 'green' : cell.isPrime === undefined ? '' : 'red'
                  }}
                >
                  <PrimeValue>{index + 1}</PrimeValue>
                </Cell>
              )
            })}
          </GridContainer>
        </div>
      </section>
    </Layout>
  )
}

export default SieveOfEratosthenes

const GridContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(25, 60px);
`

const Cell = styled.div`
  width: 60px;
  height: 60px;
  border: solid 2px black;
`

const PrimeValue = styled.div`
  margin: 0;
  color: hsl(209, 61%, 16%);
`
