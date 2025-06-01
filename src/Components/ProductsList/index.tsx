import ProductIndividual from '../../models/Product'
import Product from '../Product'
import { Container } from '../RestaurantsList/styles'
import { ListProducts } from './styles'

export type Props = {
  products: ProductIndividual[]
}

const ProductsList = ({ products }: Props) => (
  <Container>
    <div className="container">
      <ListProducts>
        {products.map((products) => (
          <Product
            key={products.id}
            img={products.image}
            title={products.title}
            description={products.description}
          />
        ))}
      </ListProducts>
    </div>
  </Container>
)

export default ProductsList
