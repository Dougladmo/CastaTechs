import React from 'react'
import Slider from '../components/Slider'
import FuncionalityCard from '../components/FuncionalityCard'
import { StoreAnalytics } from '../components/StoreAnalytics.1';

import { IoIosPhonePortrait, IoLogoSkype } from "react-icons/io";
import { FaRegPaperPlane } from "react-icons/fa6";


import PaymentsImg from '../assets/PaymentsImg.webp'
import EnviosImg from '../assets/enviosImg.webp'
import AmazonServerImg from '../assets/AmazonServerImg.webp'
import AppMobile from '../assets/AppMobileImg.webp'
import ProdsImg from '../assets/GestProdsImg.webp'
import LayoutImg from '../assets/layoutImg.webp'
import Cart from '../assets/cart.webp'
import Consul from '../assets/consultoria.webp'
import Solution from '../assets/soluções.webp'
import Services from '../assets/services.webp'
import Sobre from '../assets/sobre.webp'

const Home = () => {
  return (
    <div id='main' className='w-full bg-gray-100'>
      <Slider />
      <div id='solucoes' className='w-full md:w-9/12 mt-14 m-auto bg-gray-100 py-5'>
        <h3 className='text-center drop-shadow-md text-4xl md:text-5xl md:mx-28 pb-10 text-blue-500 font-bold flex flex-col m-auto gap-4'><span className='uppercase md:self-start '>Soluções que</span><span className='uppercase md:self-center'>transformam</span><span className='uppercase md:self-end'>seu negócio</span></h3>
        <div id='sua-loja-wrapper' className='lg:grid lg:grid-cols-2 lg:justify-evenly items-baseline shadow-top md:py-5'>
          <div id='sua-loja' className='md:h-full'>
            <img className='w-40 md:w-44 m-auto' src={Cart} alt="litle cart store" />
            <h4 className='max-w-[340px] m-auto text-center text-slate-700 font-semibold drop-shadow-md text-3xl'>CRIE SUA LOJA VIRTUAL</h4>
            <div className='shadow-top flex flex-col lg:gap-5 text-slate-700 font-semibold items-center max-w-[340px] m-auto mt-4'>
              <h4 className='text-center text-2xl my-2 drop-shadow-lg'>E-COMMERCE</h4>
              <ul className='list-disc lg:h-72 flex max-w-xs font-normal drop-shadow-md ml-5 m-auto flex-col text-left text-lg'>
                <li>Sua Loja Aberta 24hrs por dia</li>
                <li>Publique seus produtos com fotos e destaques</li>
                <li>Vários Meios de Pagamento Seguro</li>
                <li>Checkout Transparente</li>
                <li>Integração com Facebook e Instagram</li>
                <li>Sincronizado com Mercado Livre</li>
                <li>SEO: Otimização melhores práticas </li>
                <li>Plataforma responsiva: smart, ipad, note, desktop</li>
                <li>E tem mais veja...</li>
              </ul>
              <a className='w-56 m-auto py-5 mt-6 rounded-xl bg-gradient-to-b from-blue-300 to-blue-800 text-center text-white text-xl hover:opacity-80 transition duration-500' href="#">Agenda Uma Visita</a>
            </div>
          </div>
          <div id='totvs consultoria' className='md:h-full md:mt-0 mt-7'>
            <img className='w-40 md:w-60 m-auto' src={Consul} alt="litle cart store" />
            <h4 className='max-w-[340px] md:max-w-none m-auto text-center text-slate-700 font-semibold drop-shadow-md text-3xl'>CONSULTORIA ERP TOTVS</h4>
            <div className='shadow-top flex flex-col lg:gap-[19.5px] text-slate-700 font-semibold items-center max-w-[340px] m-auto mt-4'>
              <h4 className='text-center text-2xl my-2 drop-shadow-lg'>PROTHEUS e RM</h4>
              <ul className='list-disc lg:h-72 flex max-w-xs font-normal drop-shadow-md ml-5 m-auto flex-col text-left text-lg'>
                <li>Implantação de sistemas ERP TOTVS</li>
                <li>Desenvolvimento AdvPL Protheus</li>
                <li>Melhorias na Folha de Pagamento</li>
                <li>Consultoria Independente</li>
                <li>Redução de custos pra sua empresa</li>
                <li>Experiencia no que faz Disseminação da cultura </li>
                <li>Consultoria Entregas Legais </li>
                <li>Integrações de sistemas</li>
                <li>Estamos a disposição...</li>
              </ul>
              <a className='w-56 m-auto py-5 mt-5 rounded-xl bg-gradient-to-b from-blue-300 to-blue-800 text-center text-white text-xl hover:opacity-80 transition duration-500' href="#">Agenda Uma Visita</a>
            </div>
          </div>
        </div>
      </div>
      <div id='img links' className='md:flex md:justify-center my-5'>
        <div className='py-5'>
          <img className='rounded-full w-1/2 md:w-1/2 m-auto opacity-60 transition duration-500 hover:opacity-100 hover:scale-110' src={Solution} alt="soluções img" />
          <h3 className='text-2xl drop-shadow-md text-blue-400 py-5 text-center'>Soluções</h3>
        </div>
        <div className='py-5'>
          <img className='rounded-full w-1/2 md:w-1/2 m-auto opacity-60 transition duration-500 hover:opacity-100 hover:scale-110' src={Services} alt="services img" />
          <h3 className='text-2xl drop-shadow-md text-blue-400 py-5 text-center'>Serviços</h3>
        </div>
        <div className='py-5'>
          <img className='rounded-full w-1/2 md:w-1/2 m-auto opacity-60 transition duration-500 hover:opacity-100 hover:scale-110' src={Sobre} alt="sobre img" />
          <h3 className='text-2xl drop-shadow-md text-blue-400 py-5 text-center'>Sobre nós</h3>
        </div>
      </div>
      <div id='Serviços' className='py-10 bg-blue-800 flex flex-col gap-5'>
        <div className='lg:max-w-5xl lg:m-auto px-6'>
          <h3 style={{ textShadow: '0px 0px 12px' }} className='text-2xl mb-10 lg:text-4xl lg:leading-relaxed text-center text-white uppercase leading-10'>uma loja virtual completa, customizável, multi canal de vendas e indicadores de decisão.</h3>
          <StoreAnalytics />
          <h3 style={{ textShadow: '0px 0px 12px' }} className='my-5 text-3xl text-center text-white uppercase leading-10'>PLANOS COM MELHOR CUSTO & BENEFÍCIO</h3>
          <p className='text-white text-center text-lg font-medium'>Todas as ferramentas para gerenciar o seu negócio online
            Fique por dentro do desempenho do seu negócio com métricas</p>
          <h3 className='mt-5 text-3xl text-center text-white leading-10'>Conheça todas as nossas funcionalidades</h3>
        </div>
        <div id='services-cards' className='w-full lg:max-w-5xl lg:m-auto lg:gap-8 lg:grid lg:grid-cols-3'>
          <FuncionalityCard
            img={LayoutImg}
            serviceTitle='LAYOUTS PROFISSIONAIS' ServiceSubTitle='Mais de 40 layouts prontos para sua loja impactar seus clientes'
          />
          <FuncionalityCard
            img={PaymentsImg}
            serviceTitle='MEIOS DE PAGAMENTOS' ServiceSubTitle='Cielo, PagSeguro, Moip, Mercado Pago, PayPal ou PayU'
          />
          <FuncionalityCard
            img={EnviosImg}
            serviceTitle='MEIOS DE ENVIO
            E FRETES' ServiceSubTitle='Todo o Brasil via Correios (PAC ou Sedex), JadLog  e muito mais'
          />
          <FuncionalityCard
            img={ProdsImg}
            serviceTitle='GESTÃO DE PRODUTOS' ServiceSubTitle='Estoque atualizado em todos os seus canais online e várias fotos'
          />
          <FuncionalityCard
            img={AmazonServerImg}
            serviceTitle='HOSPEDAGEM SERVER AMAZON' ServiceSubTitle='Uma plataforma estável, segura e garantia de 99% On'
          />
          <FuncionalityCard
            img={AppMobile}
            serviceTitle='APLICATIVO
            MOBILE' ServiceSubTitle='Administre estoque e vendas do celular com Android ou iOS.'
          />
        </div>
      </div>
      <div id='fale-conosco' className='w-full flex flex-col bg-cyan-500 py-10'>
        <div className='w-full bg-cyan-500 flex py-8 text-white text-center flex-col items-center justify-center gap-7'>
          <h3 className='text-5xl tracking-widest uppercase font-normal'>Fale <span className='block pt-5'>conosco</span></h3>
          <p className='text-2xl lg:text-xl lg:font-normal font-medium font'>Temos satisfação em atender!
            Queremos ouvir sobre sua necessidade e propor a melhor solução.</p>
        </div>
        <div id='contact-cards' className='lg:flex lg:m-auto lg:w-3/4'>
          <div className={`h-72 w-full flex flex-col text-white items-center justify-center gap-2 bg-[#a6c54a]`}>
            <IoIosPhonePortrait size={55} className='text-white' />
            <h4 className='text-4xl font-medium'>Fones</h4>
            <p className='text-center text-xl mb-2'>(11) 96061-5651 <span className='block pt-2'>(11) 96061-5651</span></p>
          </div>
          <div className={`h-72 w-full flex flex-col items-center justify-center gap-4 bg-[#f6f6f6]`}>
            <FaRegPaperPlane size={55} />
            <h4 className='text-3xl font-medium'>Email</h4>
            <p className='text-center text-xl mb-2'>contato@castatecnologia.com <span className='block pt-2'>info@castatecnologia.com</span></p>
          </div>
          <div className={`h-72 w-full flex flex-col text-white items-center justify-center gap-8 bg-[#437da3]`}>
            <IoLogoSkype size={55} />
            <h4 className='text-3xl font-medium'>Skype</h4>
            <p className='text-center text-xl mb-2'>Casta Tecnologia</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home