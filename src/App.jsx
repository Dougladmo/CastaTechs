import React from 'react'
import Slider from './components/Slider'
import Header from './components/layout/Header'
import Cart from './assets/cart.webp'
import Consul from './assets/consultoria.webp'

import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App