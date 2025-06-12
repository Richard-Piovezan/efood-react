import Banner from '../../Components/BannerHome'
import Header from '../../Components/Header'
import RestaurantsList from '../../Components/RestaurantsList'
import { useGetRestaurantsListQuery } from '../../services/api'

export type RestaurantAPI = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurantList } = useGetRestaurantsListQuery()

  if (restaurantList) {
    return (
      <>
        <Header home={true} />
        <Banner />
        <RestaurantsList restaurant={restaurantList} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
