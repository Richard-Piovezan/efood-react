import * as S from './styles'

export type Props = {
  type: string
  title: string
}

const BannerRestaurant = ({ title, type }: Props) => (
  <S.BannerContainerRestaurant>
    <S.Opacity />
    <div className="container">
      <S.TypeFood>{type}</S.TypeFood>
      <S.TitleRestaurant>{title}</S.TitleRestaurant>
    </div>
  </S.BannerContainerRestaurant>
)

export default BannerRestaurant
