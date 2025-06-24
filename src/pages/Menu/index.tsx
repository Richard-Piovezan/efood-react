import { useParams } from 'react-router-dom'
import Header from '../../Components/Header'
import Hero from '../../Components/Hero'
import ProductsList from '../../Components/ProductsList'
import { useGetMenuListQuery } from '../../services/api'
import Loader from '../../Components/Loader'

const Menu = () => {
  const { id } = useParams()

  const { data: restaurant, isLoading: isLoadingRestaurant } =
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    useGetMenuListQuery(id!)

  if (restaurant) {
    return (
      <>
        <Header home={false} />
        <Hero
          title={restaurant.titulo}
          heroImg={restaurant.capa}
          type={restaurant.tipo}
        />
        <ProductsList restaurant={restaurant} isLoading={isLoadingRestaurant} />
      </>
    )
  }

  return <Loader />
}

export default Menu
