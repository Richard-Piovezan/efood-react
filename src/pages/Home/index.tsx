import Banner from '../../Components/BannerHome'
import Header from '../../Components/Header'
import Loader from '../../Components/Loader'
import RestaurantsList from '../../Components/RestaurantsList'
import { useGetRestaurantsListQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantList, isLoading: isLoadingRestaurantList } =
    useGetRestaurantsListQuery()

  if (restaurantList) {
    return (
      <>
        <Header home={true} />
        <Banner />
        <RestaurantsList
          restaurant={restaurantList}
          isLoading={isLoadingRestaurantList}
        />
      </>
    )
  }

  return <Loader />
}

export default Home
