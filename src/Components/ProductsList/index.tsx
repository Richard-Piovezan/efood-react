import { RestaurantAPI } from '../../pages/Home'
import Product from '../Product'
import { List } from './styles'

type Props = {
  restaurant: RestaurantAPI
}

const ProductsList = ({ restaurant }: Props) => {
  return (
    <div className="container">
      <List>
        {restaurant.cardapio.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            img={item.foto}
            title={item.nome}
            description={item.descricao}
            portion={item.porcao}
            price={item.preco}
          />
        ))}
      </List>
    </div>
  )
}

export default ProductsList
