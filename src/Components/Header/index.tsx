import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import * as S from './styles'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type Props = {
  home: boolean
}

const Header = ({ home }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const getCartQuantity = () => {
    return items.length
  }

  const quantityCart = (quantity: number) => {
    if (quantity === 0) {
      return `Carrinho Vazio`
    } else if (quantity === 1) {
      return '1 Pedido no Carrinho'
    }
    return `${quantity} Pedidos no Carrinho`
  }

  return (
    <S.HeaderContainer>
      <div className="container">
        <S.LinksContainer home={home}>
          <Link to={'/'}>Restaurantes</Link>
        </S.LinksContainer>
        <S.ImgLogo src={Logo} />
        <S.CartButton onClick={openCart} home={home}>
          <a>{quantityCart(getCartQuantity())}</a>
        </S.CartButton>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
