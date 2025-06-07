import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles'
import Tracks from './routes'
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Tracks />
      <Footer />
    </BrowserRouter>
  )
}

export default App
