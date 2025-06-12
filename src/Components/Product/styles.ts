import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ProductContainer = styled.li`
  position: relative;
  padding: 8px 8px 34px;
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

  @media (max-width: ${breakpoints.desktop}) {
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

export const ModalContainer = styled.div`
  cursor: default;
  position: absolute;

  .overlay {
    position: fixed;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: zoom-out;
  }
`

export const Content = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  gap: 24px;
  transform: translate(-50%, -50%);
  background-color: ${colors.red};
  padding: 32px;

  p,
  h3,
  span {
    color: ${colors.white};
    font-size: 14px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    display: flex;
    flex-direction: column;

    span {
      margin-top: 50px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 90vw;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 32px 12px 12px;
    flex-direction: column;
  }
`

export const ModalImg = styled.img`
  object-fit: cover;
  max-width: 280px;
  width: 100%;
  height: 280px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    height: 200px;
  }
`

export const CloseBtn = styled.img`
  max-width: 16px;
  height: 16px;
  object-fit: cover;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`

export const BtnAdd = styled(Btn)`
  max-width: 218px;
  bottom: 32px;
  font-size: 14px;
  padding: 3px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 8px;
  }
`
