import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductContainer = styled.div`
  max-width: 320px;
  width: 100%;
  max-height: 340px;
  height: 340px;
  padding: 8px;
  background-color: ${colors.red};
  position: relative;
`

export const ImgProduct = styled.img`
  width: 100%;
  height: 168px;
  margin-bottom: 8px;
`

export const TitleProduct = styled.h3`
  color: ${colors.pastel_tone};
  font-size: 16px;
  font-weight: 900;
`

export const DescProduct = styled.p`
  color: ${colors.pastel_tone};
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
`

export const BtnAddCart = styled.button`
  width: 304px;
  height: 24px;
  text-align: center;
  color: ${colors.red};
  font-size: 14px;
  font-weight: 700;
  background-color: ${colors.pastel_tone};
  cursor: pointer;
  transition: ease 0.25s;
  position: absolute;
  bottom: 8px;
  left: 8px;

  &:hover {
    letter-spacing: 0.3px;
  }
`
