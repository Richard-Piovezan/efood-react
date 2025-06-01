import Logo from '../../assets/images/logo.png'
import ig from '../../assets/images/ig.svg'
import fb from '../../assets/images/fb.svg'
import x from '../../assets/images/x.svg'
import * as S from './styles'

const Footer = () => (
  <S.Container>
    <S.Logo src={Logo} alt="eFood logo" />
    <ul>
      <li>
        <a
          href="//github.com/Richard-Piovezan"
          target="_blank"
          rel="noreferrer"
        >
          <S.SocialMedias src={ig} />
        </a>
      </li>
      <li>
        <a
          href="//github.com/Richard-Piovezan"
          target="_blank"
          rel="noreferrer"
        >
          <S.SocialMedias src={fb} alt="" />
        </a>
      </li>
      <li>
        <a
          href="//github.com/Richard-Piovezan"
          target="_blank"
          rel="noreferrer"
        >
          <S.SocialMedias src={x} />
        </a>
      </li>
    </ul>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </S.Container>
)

export default Footer
