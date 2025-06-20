import { useState } from 'react'
import { priceFormat } from '../RestaurantsList'
import {
  Btn,
  ProductContainer,
  ProductImg,
  BtnAdd,
  CloseBtn,
  Content,
  ModalContainer,
  ModalImg
} from './styles'

import closeIcon from '../../assets/images/close_icon.png'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

type Props = {
  id: number
  img: string
  title: string
  description: string
  price: number
  portion: string
}

const Product = ({ id, img, title, description, price, portion }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      add({
        id: id,
        nome: title,
        foto: img,
        preco: price
      })
    ),
      dispatch(open()),
      closeModal()
  }
  const getDescription = (desc: string) => {
    if (desc.length > 155) {
      return desc.slice(0, 155) + '...'
    }
    return desc
  }

  const [modal, setModal] = useState(false)

  const closeModal = () => {
    return setModal(false)
  }

  return (
    <>
      <ProductContainer>
        <ProductImg src={img} alt={`Imagem ilustrativa de ${title}`} />
        <h3>{title}</h3>
        <p>{getDescription(description)}</p>
        <Btn onClick={() => setModal(true)}>
          {priceFormat(price)} - Mais Detalhes
        </Btn>
      </ProductContainer>
      {modal ? (
        <ModalContainer>
          <Content>
            <CloseBtn src={closeIcon} onClick={closeModal} />
            <ModalImg src={img} alt={`Imagem ilustrativa de ${title}`} />
            <div>
              <h3>{title}</h3>
              <p>
                {description}
                <span>Serve de {portion}</span>
              </p>
              <BtnAdd onClick={addToCart}>
                Adicionar ao Carrinho - {priceFormat(price)}
              </BtnAdd>
            </div>
          </Content>
          <div className="overlay" onClick={closeModal} />
        </ModalContainer>
      ) : null}
    </>
  )
}

export default Product
