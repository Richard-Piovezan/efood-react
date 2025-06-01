import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalStyle } from './styles'
import Home from './pages/Home'
import RestaurantPage from './pages/RestaurantPage'

const tracks = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/paginadeprodutos',
    element: <RestaurantPage />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={tracks} />
    </>
  )
}

export default App
