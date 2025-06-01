import * as S from './styles'

export type Props = {
  img: string
  title: string
  description: string
}

const Product = ({ img, title, description }: Props) => (
  <S.ProductContainer>
    <S.ImgProduct src={img} alt="Imagem do produto" />
    <S.TitleProduct>{title}</S.TitleProduct>
    <S.DescProduct>{description}</S.DescProduct>
    <S.BtnAddCart type="button">Adicionar ao Carrinho</S.BtnAddCart>
  </S.ProductContainer>
)

export default Product
