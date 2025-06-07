import Restaurant from '../Restaurants'
import { Container, List } from './styles'
import { RestaurantAPI } from '../../pages/Home'

export type Props = {
  restaurant: RestaurantAPI[]
}

export const priceFormat = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const RestaurantsList = ({ restaurant }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurant.map((item) => (
          <Restaurant
            key={item.id}
            id={item.id}
            banner={item.capa}
            title={item.titulo}
            rate={item.avaliacao}
            description={item.descricao}
            type={item.tipo}
            popular={item.destacado}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
