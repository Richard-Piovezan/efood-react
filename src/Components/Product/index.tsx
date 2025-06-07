import { Btn, ProductContainer } from './styles'

const Product = () => {
  const descriptionImprovised =
    'A clássica Marguerita: molho dsa dsad sadas sdabdhjsabhjdsba vbjdhsabvhjdsa dsajhdbsajh dsajk tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'

  const getDescription = (desc: string) => {
    if (desc.length > 155) {
      return desc.slice(0, 155) + '...'
    }
    return desc
  }

  return (
    <ProductContainer>
      <img src="//placehold.co/304x168" alt="Imagem do produto" />
      <h3>Pizza Marguerita</h3>
      <p>{getDescription(descriptionImprovised)}</p>
      <Btn>Adicionar ao Carrinho</Btn>
    </ProductContainer>
  )
}

export default Product
