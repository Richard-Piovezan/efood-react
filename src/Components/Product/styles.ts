import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductContainer = styled.li`
  position: relative;
  max-width: 320px;
  height: 340px;
  padding: 8px;
  background-color: ${colors.red};

  h3 {
    color: ${colors.pastel_tone};
    font-weight: 900;
    font-size: 16px;
    margin: 8px 0;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.pastel_tone};
  }
`

export const ProductImg = styled.img`
  width: 100%;
  height: 168px;
  object-fit: cover;
`

export const Btn = styled.button`
  position: absolute;
  bottom: 8px;
  width: calc(100% - 16px);
  height: 24px;
  border: 1px solid ${colors.pastel_tone};
  font-weight: 700;
  background-color: ${colors.pastel_tone};
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    color: ${colors.pastel_tone};
    border-color: ${colors.pastel_tone};
  }
`
