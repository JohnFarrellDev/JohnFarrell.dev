import styled from 'styled-components'
import { CellI } from '../types'

export const GridContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(25, 60px);
`

export const Cell = styled.div`
  width: 60px;
  height: 60px;
  border: solid 2px black;
  place-items: center;
  display: grid;
  background-color: ${(props: CellI) => (props.isPrime ? '#99e6b3' : props.isNotPrime ? '#e66771' : '#ffffff')};
`

export const PrimeValue = styled.div`
  margin: 0;
  color: hsl(209, 61%, 16%);
`
