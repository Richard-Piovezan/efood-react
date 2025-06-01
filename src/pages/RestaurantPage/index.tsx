import BannerRestaurant from '../../Components/BannerRestaurant'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import ProductIndividual from '../../models/Product'
import ImgProduct from '../../assets/images/japones/guioza.jpg'
import ProductsList from '../../Components/ProductsList'

const highlight: ProductIndividual[] = [
  {
    id: 1,
    image: ImgProduct,
    title: 'Guioza Tradicional',
    description:
      'Guioza Japonesa: Delicados dumplings recheados com carne suculenta e legumes, grelhados até dourar e servidos com molho de soja. Irresistível!'
  },
  {
    id: 2,
    image: ImgProduct,
    title: 'Guioza Tradicional',
    description:
      'delicados dumplings recheados com carne suculenta e legumes, grelhados até dourar e servidos com molho de soja. Irresistível!'
  },
  {
    id: 3,
    image: ImgProduct,
    title: 'Guioza Tradicional',
    description:
      'delicados dumplings recheados com carne suculenta e legumes, grelhados até dourar e servidos com molho de soja. Irresistível!'
  },
  {
    id: 4,
    image: ImgProduct,
    title: 'Guioza Tradicional',
    description:
      'delicados dumplings recheados com carne suculenta e legumes, grelhados até dourar e servidos com molho de soja. Irresistível!'
  },
  {
    id: 5,
    image: ImgProduct,
    title: 'Guioza Tradicional',
    description:
      'delicados dumplings recheados com carne suculenta e legumes, grelhados até dourar e servidos com molho de soja. Irresistível!'
  }
]

const RestaurantPage = () => (
  <>
    <Header home={false} />
    <BannerRestaurant title="Nome do restaurante" type="tipo da comida" />
    <ProductsList products={highlight} />
    <Footer />
  </>
)

export default RestaurantPage
