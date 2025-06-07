import { priceFormat } from '../RestaurantsList'
import { Btn, ProductContainer, ProductImg } from './styles'

type Props = {
  img: string
  title: string
  description: string
  price: number
}

const Product = ({ img, title, description, price }: Props) => {
  const getDescription = (desc: string) => {
    if (desc.length > 155) {
      return desc.slice(0, 155) + '...'
    }
    return desc
  }

  return (
    <ProductContainer>
      <ProductImg src={img} alt="Imagem do produto" />
      <h3>{title}</h3>
      <p>{getDescription(description)}</p>
      <Btn>{priceFormat(price)} - Mais Detalhes</Btn>
    </ProductContainer>
  )
}

export default Product
