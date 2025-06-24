import { useDispatch, useSelector } from 'react-redux'
import trashIcon from '../../assets/images/lixo.png'
import * as S from './styles'
import { RootReducer } from '../../store'
import { close, remove, openCheckout } from '../../store/reducers/cart'
import { parseToBRL } from '../../utils'
import Checkout from '../Checkout'

const Cart = () => {
  const dispatch = useDispatch()

  const { isOpen, items, checkout } = useSelector(
    (state: RootReducer) => state.cart
  )

  const closeCart = () => {
    dispatch(close())
  }

  const openCheckoutTab = () => {
    dispatch(openCheckout())
  }

  const getTotalPrice = () => {
    return items.reduce((totalValue, currentValue) => {
      return (totalValue += currentValue.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const hasProductAdded = () => {
    if (items.length > 0) {
      return false
    }
    return true
  }

  return (
    <>
      {checkout ? (
        <Checkout />
      ) : (
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
          <S.Overlay onClick={closeCart} />
          <S.Sidebar>
            <ul>
              {items.map((item) => (
                <S.Order key={item.id}>
                  <img src={item.foto} alt={`Imagem do produto ${item.nome}`} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{parseToBRL(item.preco)}</span>
                  </div>
                  <img
                    src={trashIcon}
                    alt="Icone de lixeira"
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    onClick={() => removeItem(item.id!)}
                  />
                </S.Order>
              ))}
            </ul>
            <S.Price>
              <span>
                {hasProductAdded()
                  ? 'Adicione seu primeiro produto ao carrinho!'
                  : 'Valor total'}
              </span>
              <span>
                {hasProductAdded() ? '' : `${parseToBRL(getTotalPrice())}`}
              </span>
            </S.Price>
            <S.Button
              title={
                !hasProductAdded()
                  ? 'Clique para prosseguir para entrega'
                  : 'Adicione produtos para prosseguir'
              }
              onClick={openCheckoutTab}
              disabled={hasProductAdded()}
            >
              Continuar com a entrega
            </S.Button>
          </S.Sidebar>
        </S.CartContainer>
      )}
    </>
  )
}

export default Cart
