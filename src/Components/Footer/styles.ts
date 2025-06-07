import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.pastel_tone};
  padding: 40px;
  width: 100%;
  height: 298px;
  margin-top: 120px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    margin: 32px 0 80px;
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  p {
    width: 480px;
    font-size: 10px;
    cursor: default;
  }
`

export const Logo = styled.img`
  max-width: 124px;
`

export const SocialMedias = styled.img`
  background-color: ${colors.red};
  width: 32px;
  height: 32px;
  border-radius: 50px;
  padding: 6px;
  transition: ease-in-out 0.25s;

  &:hover {
    background-color: ${colors.black};
  }
`
