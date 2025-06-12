import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  margin-top: 80px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
