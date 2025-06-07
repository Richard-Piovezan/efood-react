import { Link } from 'react-router-dom'
import StarImg from '../../assets/images/star.png'
import Tag from '../Tag'
import * as S from './styles'

type Props = {
  id: number
  popular?: boolean
  type: string
  banner: string
  title: string
  rate: number
  description: string
}

const Restaurant = ({
  id,
  banner,
  description,
  rate,
  title,
  type,
  popular
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 245) {
      return description.slice(0, 245) + '...'
    }
    return description
  }

  return (
    <S.RestaurantContainer>
      <S.Tags>
        {popular === true && <Tag text="Destaque da semana" />}
        <Tag text={type} />
      </S.Tags>
      <S.BannerRestaurant src={banner} alt="Restaurante" />
      <S.InfosContainer>
        <S.InfosHeader>
          <h3>{title}</h3>
          <span>
            {rate}
            <img src={StarImg} alt="Classificação" />
          </span>
        </S.InfosHeader>
        <S.Description>{getDescription(description)}</S.Description>
        <S.Button>
          <Link to={`/cardapio/${id}`}>Saiba Mais</Link>
        </S.Button>
      </S.InfosContainer>
    </S.RestaurantContainer>
  )
}

export default Restaurant
