import { BannerContainer } from '../BannerHome/styles'
import JaponesBanner from '../../assets/images/japones/banner.png'
import ItaliaBanner from '../../assets/images/massas/banner.png'
import ArabeBanner from '../../assets/images/arabe/banner.jpg'
import IndianaBanner from '../../assets/images/indiana/banner.jpg'
import MexicoBanner from '../../assets/images/mexicana/banner.jpg'
import SanduicheBanner from '../../assets/images/sanduiche/banner.jpg'
import styled from 'styled-components'
import { colors } from '../../styles'

export const BannerContainerRestaurant = styled(BannerContainer)`
  background-image: url(${JaponesBanner});
  background-size: cover;
  position: relative;

  .container {
    height: 100%;
    position: relative;
    text-transform: capitalize;
    font-size: 32px;
  }
`

export const Opacity = styled.div`
  width: 100vw;
  height: 100%;
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
