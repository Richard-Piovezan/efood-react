import Loader from '../Loader'
import * as S from './styles'

export type Props = {
  type: string
  title: string
  heroImg: string
}

const Hero = ({ title, type, heroImg }: Props) => {
  if (!heroImg) {
    return <Loader />
  }

  return (
    <S.HeroContainer style={{ backgroundImage: `url(${heroImg})` }}>
      <S.Opacity />
      <div className="container">
        <S.TypeFood>{type}</S.TypeFood>
        <S.TitleRestaurant>{title}</S.TitleRestaurant>
      </div>
    </S.HeroContainer>
  )
}

export default Hero
