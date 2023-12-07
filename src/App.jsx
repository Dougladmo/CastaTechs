import React from 'react'
import Slider from './components/Slider'
import Header from './components/layout/Header'

const App = () => {
  return (
    <div>
      <Header />
      <div id='main' className='w-full'>
        <Slider />  
      </div>
    </div>
  )
}

export default App