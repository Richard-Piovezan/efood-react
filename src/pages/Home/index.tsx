import { useEffect, useState } from 'react'
import Banner from '../../Components/BannerHome'
import Header from '../../Components/Header'
import RestaurantsList from '../../Components/RestaurantsList'

export type RestaurantAPI = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<RestaurantAPI[]>([])

  useEffect(() => {
    fetch('https:/fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((a) => a.json())
      .then((a) => setRestaurants(a))
  }, [])

  return (
    <>
      <Header home={true} />
      <Banner />
      <RestaurantsList restaurant={restaurants} />
    </>
  )
}

export default Home
