import { useDispatch, useSelector } from 'react-redux'
import trashIcon from '../../assets/images/lixo.png'
import * as S from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import closeIcon from '../../assets/images/close_icon.png'
import { priceFormat } from '../RestaurantsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((totalValue, currentValue) => {
      return (totalValue += currentValue.preco * currentValue.quantidade)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <img src={closeIcon} alt="Icone de fechar" onClick={closeCart} />
        <ul>
          {items.map((item) => (
            <S.Order key={item.id}>
              <img src={item.foto} alt={`Imagem do produto ${item.nome}`} />
              <div>
                <h3>{item.nome}</h3>
                <span>{priceFormat(item.preco)}</span>
                <span>x{item.quantidade}</span>
              </div>
              <img
                src={trashIcon}
                alt="Icone de lixeira"
                onClick={() => removeItem(item.id!)}
              />
            </S.Order>
          ))}
        </ul>
        <S.Price>
          <span>Valor Total:</span>
          <span>{priceFormat(getTotalPrice())}</span>
        </S.Price>
        <S.Button>Continuar com a entrega</S.Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
