import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Menu from './pages/Menu'

const Tracks = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cardapio/:id" element={<Menu />} />
  </Routes>
)

export default Tracks
