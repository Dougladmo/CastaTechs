import React from 'react'
import Slider from '../components/Slider'
import FuncionalityCard from '../components/FuncionalityCard'
import { StoreAnalytics } from '../components/StoreAnalytics.1';

import { Bounce, Zoom, Fade, AttentionSeeker } from 'react-awesome-reveal';

import { IoIosPhonePortrait, IoLogoSkype } from "react-icons/io";
import { FaRegPaperPlane } from "react-icons/fa6";


import PaymentsImg from '../assets/PaymentsImg.webp'
import gifBackground from '../assets/gifbg.gif'
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
    <div id='main' className='w-full bg-black'>
      <Slider />
      <div id='solucoes' className='w-full py-5 md:w-9/12 m-auto mt-14'>
        <h2 className='pb-10 m-auto text-4xl font-bold text-center text-blue-500 drop-shadow-md md:text-5xl md:mx-28'>
          <AttentionSeeker className='flex flex-col gap-6' effect='pulse' cascade damping={0.3}>
            <span className='uppercase md:self-start'>Soluções que</span><span className='uppercase md:self-center'>transformam</span><span className='uppercase md:self-end'>seu negócio</span>
          </AttentionSeeker>
        </h2>
        <Fade duration={1500}>
          <div id='sua-loja-wrapper' className='lg:items-baseline lg:grid lg:grid-cols-2 lg:justify-evenly py-10'>
            <Zoom triggerOnce duration={1000}>
              <div id='sua-loja' style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                url(${gifBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
              }} className='md:h-full md:w-9/12 md:rounded-xl md:py-10 md:m-auto shadow-inner py-10'>
                <img className='w-40 m-auto md:w-32 bg-white rounded-xl mb-5' src={Cart} alt="litle cart store" />
                <h3 className='max-w-[340px] m-auto text-center text-white font-semibold drop-shadow-md text-3xl'>CRIE SUA LOJA VIRTUAL</h3>
                <div className='shadow-top flex flex-col lg:gap-5 text-white font-semibold items-center max-w-[340px] m-auto mt-4'>
                  <h3 className='my-2 text-2xl text-center drop-shadow-lg'>E-COMMERCE</h3>
                  <ul className='flex flex-col max-w-xs m-auto ml-5 text-lg font-normal text-left list-disc lg:h-72 drop-shadow-md'>
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
                  <a className='w-56 py-5 m-auto mt-6 text-xl text-center text-white transition duration-500 rounded-xl bg-gradient-to-b from-blue-300 to-blue-800 hover:opacity-80' href="#">Agenda Uma Visita</a>
                </div>
              </div>
            </Zoom>
            <Zoom triggerOnce duration={1000}>
              <div id='totvs-consultoria'
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${gifBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} 
              className='md:h-full md:w-9/12 md:rounded-xl md:py-10 md:m-auto shadow-inner py-10 mt-5'
              >
                <img className='w-40 m-auto md:w-60 bg-white rounded-xl mb-5' src={Consul} alt="litle cart store" />
                <h3 className='max-w-[340px] md:max-w-none m-auto text-center text-white font-semibold drop-shadow-md text-3xl'>CONSULTORIA ERP TOTVS</h3>
                <div className='shadow-top flex flex-col lg:gap-[19.5px] text-white font-semibold items-center max-w-[340px] m-auto mt-4'>
                  <h3 className='my-2 text-2xl text-center drop-shadow-lg'>PROTHEUS e RM</h3>
                  <ul className='flex flex-col max-w-xs m-auto ml-5 text-lg font-normal text-left list-disc lg:h-72 drop-shadow-md'>
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
                  <a className='w-56 py-5 m-auto mt-5 text-xl text-center text-white transition duration-500 rounded-xl bg-gradient-to-b from-blue-300 to-blue-800 hover:opacity-80' href="#">Agenda Uma Visita</a>
                </div>
              </div>
            </Zoom>
          </div>
        </Fade>
      </div>
      <div id='img links' className='my-5 md:flex md:justify-center'>
        <AttentionSeeker className='flex flex-col gap-6' effect='pulse' duration={1500} cascade damping={0.3}>
          <div className='py-5'>
            <img className='w-1/2 m-auto transition duration-500 border-4 border-white rounded-full md:w-1/2 opacity-60 hover:opacity-100 hover:scale-110' src={Solution} alt="soluções img" />
            <h3 className='py-5 text-2xl text-center text-blue-500'>Soluções</h3>
          </div>
          <div className='py-5'>
            <img className='w-1/2 m-auto transition duration-500 border-4 border-white rounded-full md:w-1/2 opacity-60 hover:opacity-100 hover:scale-110' src={Services} alt="services img" />
            <h3 className='py-5 text-2xl text-center text-blue-500'>Serviços</h3>
          </div>
          <div className='py-5'>
            <img className='w-1/2 m-auto transition duration-500 border-4 border-white rounded-full md:w-1/2 opacity-60 hover:opacity-100 hover:scale-110' src={Sobre} alt="sobre img" />
            <h3 className='py-5 text-2xl text-center text-blue-500'>Sobre nós</h3>
          </div>
        </AttentionSeeker>
      </div>
      <div id='servicos' className='flex flex-col gap-5 py-10 bg-blue-800'>
        <div className='px-6 lg:max-w-5xl lg:m-auto'>
          <h3 style={{ textShadow: '0px 0px 12px' }} className='mb-10 text-2xl leading-10 text-center text-white uppercase lg:text-4xl lg:leading-relaxed'>uma loja virtual completa, customizável, multi canal de vendas e indicadores de decisão.</h3>
          <StoreAnalytics />
          <h3 style={{ textShadow: '0px 0px 12px' }} className='my-5 text-3xl leading-10 text-center text-white uppercase'>PLANOS COM MELHOR CUSTO & BENEFÍCIO</h3>
          <p className='text-lg font-medium text-center text-white'>Todas as ferramentas para gerenciar o seu negócio online
            Fique por dentro do desempenho do seu negócio com métricas</p>
          <h3 className='mt-5 text-3xl leading-10 text-center text-white'>Conheça todas as nossas funcionalidades</h3>
        </div>
        <div id='services-cards' className='w-full lg:max-w-5xl lg:m-auto lg:gap-8 lg:grid lg:grid-cols-3'>
          <Bounce triggerOnce cascade damping={0.2}>
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
          </Bounce>
        </div>
      </div>
      <div id='contato' className='flex flex-col w-full py-10 bg-[#01b1af]'>
        <AttentionSeeker effect='pulse' duration={1000} >
          <div className='flex flex-col items-center justify-center w-full px-5 py-12 pt-0 text-center bg-[#01b1af] text-white bg-transparent gap-7'>
            <h3 className='text-5xl font-normal tracking-widest uppercase drop-shadow-lg'>Fale <span className='block pt-5'>conosco</span></h3>
            <p className='text-2xl font-medium drop-shadow-lg lg:text-xl lg:font-normal font'>Temos satisfação em atender!
              Queremos ouvir sobre sua necessidade e propor a melhor solução.</p>
          </div>
        </AttentionSeeker>
        <div id='contact-cards' className='lg:flex lg:m-auto lg:w-3/4'>
          <div className={`h-72 px-5 w-full flex flex-col text-white items-center justify-center gap-2 bg-[#a6c54a]`}>
            <AttentionSeeker triggerOnce effect='shakeX' duration={1000} >
              <IoIosPhonePortrait size={55} className='text-white' />
            </AttentionSeeker>
            <h4 className='text-4xl font-medium drop-shadow-md'>Fones</h4>
            <p className='mb-2 text-xl text-center drop-shadow-lg'>(11) 96061-5651 <span className='block pt-2'>(11) 96061-5651</span></p>
          </div>
          <div className={`h-72 px-5 w-full flex flex-col items-center justify-center gap-4 bg-[#f6f6f6]`}>
            <AttentionSeeker triggerOnce effect='shakeX' duration={1000} >
              <FaRegPaperPlane size={55} />
            </AttentionSeeker>
            <h4 className='text-3xl font-medium drop-shadow-md'>Email</h4>
            <p className='mb-2 text-xl text-center drop-shadow-lg'>contato@castatecnologia.com <span className='block pt-2'>info@castatecnologia.com</span></p>
          </div>
          <div className={`h-72 px-5 w-full flex flex-col text-white items-center justify-center gap-5 bg-[#437da3]`}>
            <AttentionSeeker triggerOnce effect='shakeX' duration={1000} >
              <IoLogoSkype size={55} />
            </AttentionSeeker>
            <h4 className='text-3xl font-medium drop-shadow-md'>Skype</h4>
            <p className='mb-2 text-xl text-center drop-shadow-lg'>Casta Tecnologia</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home