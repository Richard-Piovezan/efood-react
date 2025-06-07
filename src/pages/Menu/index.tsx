import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../Components/Header'
import Hero from '../../Components/Hero'
import ProductsList from '../../Components/ProductsList'
import { RestaurantAPI } from '../Home'

const Menu = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<RestaurantAPI>(
    {} as RestaurantAPI
  )

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res: RestaurantAPI[]) => {
        const found = res.find((r) => r.id === Number(id))
        if (found) setRestaurant(found)
      })
  }, [id])

  if (!restaurant.id) return <p>Carregando restaurante...</p>

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

export default Menu
