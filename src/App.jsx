import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import MobileContactBar from './components/layout/MobileContactBar'

import { Outlet } from 'react-router-dom'

const App = () => {

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <MobileContactBar />
    </div>
  )
}

export default App