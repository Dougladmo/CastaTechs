import React from 'react'
import Slider from '../components/Slider'
import Cart from '../assets/cart.webp'
import Consul from '../assets/consultoria.webp'
import Solution from '../assets/soluções.webp'
import Services from '../assets/services.webp'
import Sobre from '../assets/sobre.webp'

const Home = () => {
  return (
    <div id='main' className='w-full'>
      <Slider />
      <div id='solucoes' className='w-full mt-14 m-auto bg-gray-100 py-5'>
        <h3 className='text-center text-4xl md:text-5xl md:mx-48 pb-10 text-blue-500 font-bold flex flex-col m-auto gap-4'><span className='uppercase md:self-start '>Soluções que</span><span className='uppercase md:self-center'>transformam</span><span className='uppercase md:self-end'>seu negócio</span></h3>
        <div id='sua loja' className='shadow-top'>
          <img className='w-40 m-auto' src={Cart} alt="litle cart store" />
          <h4 className='max-w-[340px] m-auto text-center text-slate-700 font-semibold text-3xl'>CRIE SUA LOJA VIRTUAL</h4>
          <div className='shadow-top flex flex-col text-slate-700 font-semibold items-center max-w-[340px] m-auto mt-4'>
            <h4 className='text-center text-2xl'>E-COMMERCE</h4>
            <ul className='list-disc flex max-w-xs font-medium ml-5 m-auto flex-col text-left text-lg'>
              <li>Sua Loja Aberta 24hrs por dia</li>
              <li>Publique seus produtos com fotos e destaques</li>
              <li>Vários Meios de Pagamento Seguro</li>
              <li>Checkout Transparente</li>
              <li>Integração com Facebook e Instagram</li>
              <li>Sincronizado com Mercado Livre</li>
              <li>SEO: Otimização melhores práticas </li>
              <li>Plataforma responsiva: smart, ipad, note, desktop</li>
              <li>E tem mais veja...</li>
              <a className='w-56 m-auto py-5 mt-5 rounded-xl bg-gradient-to-b from-blue-300 to-blue-800 text-center text-white text-xl hover:opacity-80 transition duration-500' href="#">Agenda Uma Visita</a>
            </ul>
          </div>
          <div id='totvs consultoria' className=' mt-7 drop-shadow-xl'>
            <img className='w-64 m-auto' src={Consul} alt="consul icons" />
            <h4 className='max-w-[340px] m-auto text-center text-slate-700 font-medium text-3xl'>CONSULTORIA ERP TOTVS</h4>
            <div className='shadow-top flex flex-col text-slate-700 font-semibold items-center max-w-[340px] m-auto mt-4'>
              <h4 className='text-center text-2xl my-2'>PROTHEUS e RM</h4>
              <ul className='list-disc flex max-w-xs font-medium ml-5 m-auto flex-col text-left text-lg'>
                <li>Implantação de sistemas ERP TOTVSa</li>
                <li>Desenvolvimento AdvPL Protheus</li>
                <li>Melhorias na Folha de Pagamento</li>
                <li>Consultoria Independente</li>
                <li>Redução de custos pra sua empresa</li>
                <li>Experiencia no que faz
                  Disseminação da cultura </li>
                <li>Consultoria Entregas Legais</li>
                <li>Integrações de sistemas</li>
                <li>Estamos a disposição.</li>
              </ul>
              <a className='w-56 m-auto py-5 mt-5 rounded-xl bg-gradient-to-b from-blue-300 to-blue-800 text-center text-white text-xl hover:opacity-80 transition duration-500' href="#">Agenda Uma Visita</a>
            </div>
          </div>
        </div>
      </div>
      <div id='img links'>
        <div className='py-5'>
          <img className='rounded-full w-10/12 m-auto opacity-60 transition duration-500 hover:opacity-100 hover:scale-110' src={Solution} alt="soluções img" />
          <h3 className='text-3xl text-blue-400 py-5 text-center'>Soluções</h3>
        </div>
        <div className='py-5'>
          <img className='rounded-full w-10/12 m-auto opacity-60 transition duration-500 hover:opacity-100 hover:scale-110' src={Services} alt="services img" />
          <h3 className='text-3xl text-blue-400 py-5 text-center'>Serviços</h3>
        </div>
        <div className='py-5'>
          <img className='rounded-full w-10/12 m-auto opacity-60 transition duration-500 hover:opacity-100 hover:scale-110' src={Sobre} alt="sobre img" />
          <h3 className='text-3xl text-blue-400 py-5 text-center'>Sobre nós</h3>
        </div>
      </div>
    </div>
  )
}

export default Home