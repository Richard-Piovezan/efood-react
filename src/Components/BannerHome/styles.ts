import styled from 'styled-components'
import Background from '../../assets/images/background.png'
import { breakpoints } from '../../styles'

export const BannerContainer = styled.div`
  background-image: url(${Background});
  background-size: cover;
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    height: 90px;
  }
`

export const Slogan = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  max-width: 540px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
    max-width: 80%;
  }
`
