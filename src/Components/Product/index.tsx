import { useState } from 'react'
import { parseToBRL } from '../../utils'
import * as S from './styles'

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
      <S.ProductContainer>
        <S.ProductImg src={img} alt={`Imagem ilustrativa de ${title}`} />
        <h3>{title}</h3>
        <p>{getDescription(description)}</p>
        <S.Btn title="Clique para mais detalhes" onClick={() => setModal(true)}>
          {parseToBRL(price)} - Mais Detalhes
        </S.Btn>
      </S.ProductContainer>
      {modal ? (
        <S.ModalContainer>
          <S.Content>
            <S.CloseBtn src={closeIcon} onClick={closeModal} />
            <S.ModalImg src={img} alt={`Imagem ilustrativa de ${title}`} />
            <div>
              <h3>{title}</h3>
              <p>
                {description}
                <span>Serve de {portion}</span>
              </p>
              <S.BtnAdd
                title="Clique para adicionar ao carrinho"
                onClick={addToCart}
              >
                Adicionar ao Carrinho - {parseToBRL(price)}
              </S.BtnAdd>
            </div>
          </S.Content>
          <div className="overlay" onClick={closeModal} />
        </S.ModalContainer>
      ) : null}
    </>
  )
}

export default Product
