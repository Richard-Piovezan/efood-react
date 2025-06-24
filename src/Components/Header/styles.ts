import { Props } from '.'
import styled from 'styled-components'
import Background from '../../assets/images/background.png'
import { breakpoints, colors } from '../../styles'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 186px;
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;

  & .container {
    padding: 64px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    line-height: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 100px;

    & .container {
      padding: 28px 0;
    }
  }
`

export const ImgLogo = styled.img`
  position: static;
  max-width: 126px;
  box-shadow: -1px 2px 5px 2px rgba(0, 0, 0, 0.4);

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80px;
  }
`

export const LinksContainer = styled.div<Props>`
  a {
    font-size: 18px;
    font-weight: 900;
    opacity: ${(props) => (props.home ? 0 : 1)};
    pointer-events: ${(props) => (props.home ? 'none' : 'default')};
    transition: ease 0.25s;
    border-bottom: 2px solid transparent;
    border-radius: 2px;

    &:hover {
      border-color: ${colors.red};
    }

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 14px;
    }
  }
`

export const CartButton = styled(LinksContainer)`
  max-width: 120px;
  text-align: center;
  border-radius: 2px;
  pointer-events: ${(props) => (props.home ? 'none' : 'default')};
  border-bottom: 2px solid transparent;
  transition: ease 0.25s;
  cursor: pointer;

  a {
    border: none;
  }

  &:hover {
    border-color: ${colors.red};
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80px;
  }
`
