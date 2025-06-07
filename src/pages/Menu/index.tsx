import Header from '../../Components/Header'
import Hero from '../../Components/Hero'
import ProductsList from '../../Components/ProductsList'
import testImg from '../../assets/images/japones/banner.png'

const Menu = () => (
  <>
    <Header home={false} />
    <Hero title="teste" heroImg={testImg} type="italiteste" />
    <ProductsList />
  </>
)

export default Menu
