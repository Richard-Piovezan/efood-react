import styled from 'styled-components'
import { Button, CartContainer } from '../Cart/styles'
import { breakpoints, colors } from '../../styles'
import { Link } from 'react-router-dom'

export const CheckOutContainer = styled(CartContainer)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

  display: block;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 34px;
`

export const InputGroup = styled.div`
  margin-bottom: 8px;

  label,
  input {
    font-weight: 700;
  }

  label {
    display: block;
    color: ${colors.pastel_tone};
    font-size: 14px;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    height: 32px;
    background-color: ${colors.pastel_tone};
    color: ${colors.black};
    padding: 8px;

    &.error {
      color: ${colors.error};
      text-decoration: underline;
    }
  }
`

export const ButtonsContainer = styled.div`
  margin-top: calc(24px - 8px);
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const BtnCheckout = styled(Button)``

export const BtnSuccess = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 24px;
  background-color: ${colors.pastel_tone};
  color: ${colors.red};
  text-transform: initial;
  font-size: 14px;
  font-weight: 700;
  border: 2px solid ${colors.pastel_tone};
  cursor: pointer;
  transition: ease-in-out 0.25s;

  &:hover {
    color: ${colors.pastel_tone};
    background-color: rgba(0, 0, 0, 0.3);
  }
`

export const Sidebar = styled.aside`
  position: absolute;
  right: 0;
  z-index: 2;
  background-color: ${colors.red};
  padding: 32px 8px 0;
  width: 360px;
  height: 100%;

  h3 {
    color: ${colors.pastel_tone};
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  & .payment {
    & .widthInput {
      grid-template-columns: 228px auto;
      gap: 30px;
    }
  }

  & .success {
    p {
      color: ${colors.pastel_tone};
      font-size: 14px;
      line-height: 22px;

      &:not(:last-child) {
        margin-bottom: 18px;
      }
    }

    & ${ButtonsContainer} {
      margin-top: 24px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }
`
