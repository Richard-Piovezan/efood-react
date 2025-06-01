import RestaurantIndividual from '../../models/Restaurant'
import Restaurant from '../Restaurants'
import { Container, List } from './styles'

export type Props = {
  restaurant: RestaurantIndividual[]
}

const RestaurantsList = ({ restaurant }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurant.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            image={restaurant.image}
            name={restaurant.name}
            classification={restaurant.classification}
            description={restaurant.description}
            tag={restaurant.tag}
            popular={restaurant.popular}
            link={restaurant.link}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
