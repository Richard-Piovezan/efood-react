import Product from '../Product'
import { List } from './styles'

const ProductsList = () => {
  return (
    <div className="container">
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  )
}

export default ProductsList
