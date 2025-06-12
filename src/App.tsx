import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles'
import Tracks from './routes'
import Footer from './Components/Footer'
import { store } from './store'
import Cart from './Components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Tracks />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
