import { RotateLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <RotateLoader color={colors.red} />
  </Container>
)

export default Loader
