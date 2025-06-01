import Banner from '../../Components/BannerHome'
import Header from '../../Components/Header'
import RestaurantIndividual from '../../models/Restaurant'

import JaponesBanner from '../../assets/images/japones/banner.png'
import ItaliaBanner from '../../assets/images/massas/banner.png'
import ArabeBanner from '../../assets/images/arabe/banner.jpg'
import IndianaBanner from '../../assets/images/indiana/banner.jpg'
import MexicoBanner from '../../assets/images/mexicana/banner.jpg'
import SanduicheBanner from '../../assets/images/sanduiche/banner.jpg'
import RestaurantsList from '../../Components/RestaurantsList'
import Footer from '../../Components/Footer'

const highlight: RestaurantIndividual[] = [
  {
    id: 1,
    image: JaponesBanner,
    name: 'hioki sushi',
    classification: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    popular: true,
    tag: 'Japonesa',
    link: '/paginadeprodutos'
  },
  {
    id: 2,
    image: ItaliaBanner,
    name: 'la dolce vita trattoria',
    classification: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    popular: false,
    tag: 'Italiana',
    link: '/paginadeprodutos'
  },
  {
    id: 3,
    image: ArabeBanner,
    name: 'Bagda especiarias',
    classification: 4.3,
    description:
      'O Kasbah Árabe te leva aos sabores do Oriente Médio! Saboreie esfihas, quibes, falafel e homus fresquinho. Pratos autênticos, bem servidos e preparados com tradição. Tudo embalado com carinho e entregue rapidinho. Descubra essa delícia árabe. Peça já!',
    popular: false,
    tag: 'Árabe',
    link: '/paginadeprodutos'
  },
  {
    id: 4,
    image: IndianaBanner,
    name: 'Sabores de Mumbai',
    classification: 4.5,
    description:
      'O Sabores de Mumbai traz até você o melhor da culinária indiana! Experimente curries aromáticos, samosas crocantes e naan quentinho. Tudo preparado com especiarias autênticas e muito carinho. Entrega rápida e sabores que vão te transportar à Índia. Peça já!',
    popular: false,
    tag: 'Indiana',
    link: '/paginadeprodutos'
  },
  {
    id: 5,
    image: MexicoBanner,
    name: 'Cantina El Sol',
    classification: 4.8,
    description:
      'Na Cantina El Sol, você encontra o verdadeiro sabor do México! Tacos crocantes, burritos recheados, nachos com guacamole e muito mais. Tudo feito com ingredientes frescos e temperos marcantes. Entrega ágil e sabor caliente direto pra sua casa. Peça já!',
    popular: false,
    tag: 'Mexicana',
    link: '/paginadeprodutos'
  },
  {
    id: 6,
    image: SanduicheBanner,
    name: 'Mr. Sabor',
    classification: 4.7,
    description:
      'O Mr. Sabor prepara os sanduíches mais suculentos da cidade! Hambúrgueres artesanais, wraps leves e opções veganas cheias de sabor. Ingredientes frescos, combinações criativas e entrega rápida. Uma explosão de sabor entre duas fatias. Peça agora mesmo!',
    popular: false,
    tag: 'Sanduíches',
    link: '/paginadeprodutos'
  }
]

const Home = () => (
  <>
    <Header home={true} />
    <Banner />
    <RestaurantsList restaurant={highlight} />
    <Footer />
  </>
)

export default Home
