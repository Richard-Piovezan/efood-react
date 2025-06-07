import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import * as S from './styles'

export type Props = {
  home: boolean
}

const Header = ({ home }: Props) => (
  <S.HeaderContainer>
    <div className="container">
      <S.LinksContainer home={home}>
        <Link to={'/'}>Restaurantes</Link>
      </S.LinksContainer>
      <S.ImgLogo src={Logo} />
      <S.LinksContainer home={home}>
        <a href="#">0 pedido(s) no carrinho</a>
      </S.LinksContainer>
    </div>
  </S.HeaderContainer>
)

export default Header
