import React from 'react'
import Slider from './components/Slider'
import Header from './components/layout/Header'
import Cart from './assets/cart.webp'
import Consul from './assets/consultoria.webp'

const App = () => {
  return (
    <div>
      <Header />
      <div id='main' className='w-full'>
        <Slider />
        <div id='solucoes' className='w-full mt-14 m-auto'>
          <h3 className='text-center text-3xl pb-10 text-blue-500 font-bold flex flex-col gap-4'><span className='uppercase '>Soluções que</span><span className='uppercase'>transformam</span><span className='uppercase'>seu negócio</span></h3>
          <div className='mb-80'>
            <div id='sua loja' className='shadow-top'>
              <img className='w-40 m-auto' src={Cart} alt="litle cart store" />
              <h4 className='max-w-[340px] m-auto text-center text-slate-700 font-medium text-3xl'>CRIE SUA LOJA VIRTUAL</h4>
              <div className='shadow-top'>
                <h4 className='max-w-[340px] m-auto text-center text-slate-700 font-medium text-2xl'>E-COMMERCE</h4>
              </div>
            </div>
            <div>
              <img className='w-64 m-auto' src={Consul} alt="consul icons" />
              <h4 className='max-w-[340px] m-auto text-center text-slate-700 font-medium text-3xl'>CONSULTORIA ERP TOTVS</h4>
              <h4 className='max-w-[340px] m-auto text-center text-slate-700 font-medium text-2xl '>PROTHEUS e RM </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App