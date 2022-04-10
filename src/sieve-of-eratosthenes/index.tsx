import { useEffect, useReducer } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Title from '../components/Title'
import { GridContainer, Cell, PrimeValue } from './components'
import { TypeWriter } from './components/TypeWriter'
import { INITIAL_NUMBER_OF_PRIMES, MAX_NUMBER_OF_PRIMES, MIN_NUMBER_OF_PRIMES, STEP_NUMBER_OF_PRIMES } from './constants'
import { sieveOfEratosthenesReducer } from './reducer'
import { State } from './types'

const initialSieveState: State = {
  potentialPrimes: new Array(INITIAL_NUMBER_OF_PRIMES).fill(null).map((_, i) => {
    return {
      value: i,
      isHighlighted: false,
      isPrime: false
    }
  }),
  calculating: false,
  message: '',
  visualSteps: []
}

export const SieveOfEratosthenesC = () => {
  const [sieveState, dispatch] = useReducer(sieveOfEratosthenesReducer, initialSieveState)

  const calculatePrimes = () => {
    dispatch({ type: 'CalculatePrimes' })
  }

  const updateNumberOfCells = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UpdateSieveSize', newSize: event.target.value })
  }

  useEffect(() => {
    if (sieveState.visualSteps.length > 0) {
      if (sieveState.visualSteps[sieveState.visualSteps.length - 1]) {
        setTimeout(() => {
          dispatch({ type: 'VisualStep' })
        }, sieveState.visualSteps[sieveState.visualSteps.length - 1].intervalMs)
      }
    } else {
      dispatch({ type: 'StopCalculating' })
    }
  }, [sieveState.visualSteps.length])

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
            disabled={sieveState.calculating}
            min={MIN_NUMBER_OF_PRIMES}
            max={MAX_NUMBER_OF_PRIMES}
            step={STEP_NUMBER_OF_PRIMES}
            onChange={updateNumberOfCells}
            value={sieveState.potentialPrimes.length}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p>{sieveState.potentialPrimes.length.toLocaleString()}</p>
        </div>
        <button onClick={calculatePrimes} className="btn center-btn" style={{ margin: '1rem auto' }} disabled={sieveState.calculating}>
          Calculate primes
        </button>
        <TypeWriter message={sieveState.message} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <GridContainer>
            {sieveState.potentialPrimes.map((cell, index) => {
              return (
                <Cell key={index} isPrime={cell.isPrime} isHighlighted={cell.isHighlighted}>
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
