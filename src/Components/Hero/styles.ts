import { BannerContainer } from '../BannerHome/styles'
import styled from 'styled-components'
import { colors } from '../../styles'

export const HeroContainer = styled(BannerContainer)`
  background-size: cover;
  position: relative;
  margin-bottom: 56px;

  .container {
    height: 100%;
    position: relative;
    text-transform: capitalize;
    font-size: 32px;
  }
`

export const Opacity = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${colors.black};
  opacity: 0.5;
  position: absolute;
`

export const TypeFood = styled.span`
  color: ${colors.white};
  font-weight: 100;
  position: relative;
  top: 24px;
  left: 0;
`

export const TitleRestaurant = styled.h2`
  color: ${colors.white};
  font-weight: 900;
  position: absolute;
  bottom: 32px;
  left: 0;
`
