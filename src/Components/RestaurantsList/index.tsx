import Restaurant from '../Restaurants'
import { Container, List } from './styles'
import Loader from '../Loader'

export type Props = {
  restaurant: RestaurantAPI[]
  isLoading: boolean
}

const RestaurantsList = ({ restaurant, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
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
}

export default RestaurantsList
