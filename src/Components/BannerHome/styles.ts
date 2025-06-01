import styled from 'styled-components'
import Background from '../../assets/images/background.png'

export const BannerContainer = styled.div`
  background-image: url(${Background});
  background-size: cover;
  width: 100vw;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Slogan = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  max-width: 540px;
`
