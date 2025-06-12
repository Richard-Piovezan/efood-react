import { useParams } from 'react-router-dom'
import Header from '../../Components/Header'
import Hero from '../../Components/Hero'
import ProductsList from '../../Components/ProductsList'
import { useGetMenuListQuery } from '../../services/api'

const Menu = () => {
  const { id } = useParams()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurant } = useGetMenuListQuery(id!)

  if (restaurant) {
    return (
      <>
        <Header home={false} />
        <Hero
          title={restaurant.titulo}
          heroImg={restaurant.capa}
          type={restaurant.tipo}
        />
        <ProductsList restaurant={restaurant} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Menu
