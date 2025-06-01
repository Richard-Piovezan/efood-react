import { Props } from '.'
import styled from 'styled-components'
import Background from '../../assets/images/background.png'
import { colors } from '../../styles'

export const HeaderContainer = styled.div`
  width: 100vw;
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
`

export const ImgLogo = styled.img`
  max-width: 126px;
  box-shadow: -1px 2px 5px 2px rgba(0, 0, 0, 0.4);
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
  }
`
