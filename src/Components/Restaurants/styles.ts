import styled from 'styled-components'
import { colors } from '../../styles'

export const RestaurantContainer = styled.div`
  max-width: 472px;
  height: 398px;
  background-color: ${colors.white};
  position: relative;
  cursor: default;
`

export const BannerRestaurant = styled.img`
  width: 100%;
  height: 218px;
  margin-bottom: -5px;
`

export const Tags = styled.div`
  display: flex;
  gap: 12px;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const InfosContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1px solid ${colors.red};
  border-top: none;
  height: 182px;

  button {
    position: absolute;
    bottom: 8px;
    left: 8px;
  }
`

export const InfosHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  text-transform: capitalize;

  img {
    max-width: 20px;
    margin-left: 8px;
  }
`

export const Description = styled.p`
  margin: 16px 0;
  font-size: 14px;
  line-height: 22px;
`

export const Button = styled.button`
  a {
    display: flex;
    align-items: center;
    padding: 8px 6px;
    background-color: ${colors.red};
    width: 82px;
    max-height: 24px;
    color: ${colors.pastel_tone};
    font-weight: 700;
    text-align: center;
    transition: 0.25s;
  }

  &:hover {
    a {
      text-decoration: underline;
      box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.4);
    }
  }
`
