import { Link } from 'react-router-dom'
import StarImg from '../../assets/images/star.png'
import Tag from '../Tag'
import * as S from './styles'

export type Props = {
  name: string
  image: string
  classification: number
  description: string
  tag: string
  popular?: boolean
  link: string
}

const Restaurant = ({
  name,
  classification,
  description,
  popular,
  tag,
  image,
  link
}: Props) => (
  <S.RestaurantContainer>
    <S.Tags>
      {popular === true && <Tag text="Destaque da semana" />}
      <Tag text={tag} />
    </S.Tags>
    <S.BannerRestaurant src={image} alt="Restaurante" />
    <S.InfosContainer>
      <S.InfosHeader>
        <h3>{name}</h3>
        <span>
          {classification}
          <img src={StarImg} alt="Classificação" />
        </span>
      </S.InfosHeader>
      <S.Description>{description}</S.Description>
      <S.Button>
        <Link to={link}>Saiba Mais</Link>
      </S.Button>
    </S.InfosContainer>
  </S.RestaurantContainer>
)

export default Restaurant
