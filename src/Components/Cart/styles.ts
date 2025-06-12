import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const Sidebar = styled.aside`
  z-index: 1;
  background-color: ${colors.red};
  padding: calc(52px + 28px) 8px 0;
  border-left: 2px solid ${colors.white};
  width: 344px;
  height: 100%;

  > img:first-child {
    position: absolute;
    top: 28px;
    right: 8px;
    padding: 4px;
    border-radius: 50%;
    border: 1px solid ${colors.white};
    width: 24px;
    cursor: pointer;
    transition: ease-in-out 0.25s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }
`

export const Order = styled.div`
  position: relative;
  background-color: ${colors.pastel_tone};
  width: 344px;
  padding: 8px 8px 12px;
  display: flex;
  gap: 8px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  & img:first-child {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h3 {
    color: ${colors.red};
    font-size: 18px;
    font-weight: 900;
    text-transform: capitalize;
  }

  span {
    font-size: 14px;
    line-height: 22px;
  }

  & img:last-child {
    position: absolute;
    right: 8px;
    bottom: 8px;
    padding: 4px;
    width: 28px;
    border-radius: 50%;
    transition: ease 0.25s;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding: 8px;

    h3 {
      font-size: 14px;
    }

    span {
      font-size: 12px;
    }
  }
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;

  & span {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.white};
  }
`

export const Button = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${colors.pastel_tone};
  color: ${colors.red};
  text-transform: uppercase;
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
