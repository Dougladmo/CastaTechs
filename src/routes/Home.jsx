import React from 'react'
import Slider from '../components/Slider'
import FuncionalityCard from '../components/FuncionalityCard'
import { StoreAnalytics } from '../components/StoreAnalytics.1';

import { Bounce, Zoom, Fade, AttentionSeeker } from 'react-awesome-reveal';

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
      <div id='solucoes' className='w-full py-5 m-auto bg-gray-100 md:w-9/12 mt-14'>
        <h3 className='pb-10 m-auto text-4xl font-bold text-center text-blue-500 drop-shadow-md md:text-5xl md:mx-28'>
            <AttentionSeeker className='flex flex-col gap-6' effect='pulse' cascade damping={0.3}>
              <span className='uppercase md:self-start'>Soluções que</span><span className='uppercase md:self-center'>transformam</span><span className='uppercase md:self-end'>seu negócio</span>
            </AttentionSeeker>
          </h3>
        <Fade duration={1500}>
          <div id='sua-loja-wrapper' className='items-baseline lg:grid lg:grid-cols-2 lg:justify-evenly shadow-top md:py-5'>
            <Zoom triggerOnce duration={1000}>
              <div id='sua-loja' className='md:h-full'>
                <img className='w-40 m-auto md:w-44' src={Cart} alt="litle cart store" />
                <h4 className='max-w-[340px] m-auto text-center text-slate-700 font-semibold drop-shadow-md text-3xl'>CRIE SUA LOJA VIRTUAL</h4>
                <div className='shadow-top flex flex-col lg:gap-5 text-slate-700 font-semibold items-center max-w-[340px] m-auto mt-4'>
                  <h4 className='my-2 text-2xl text-center drop-shadow-lg'>E-COMMERCE</h4>
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
              <div id='totvs consultoria' className='md:h-full md:mt-0 mt-7'>
                <img className='w-40 m-auto md:w-60' src={Consul} alt="litle cart store" />
                <h4 className='max-w-[340px] md:max-w-none m-auto text-center text-slate-700 font-semibold drop-shadow-md text-3xl'>CONSULTORIA ERP TOTVS</h4>
                <div className='shadow-top flex flex-col lg:gap-[19.5px] text-slate-700 font-semibold items-center max-w-[340px] m-auto mt-4'>
                  <h4 className='my-2 text-2xl text-center drop-shadow-lg'>PROTHEUS e RM</h4>
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
        <div className='py-5'>
          <img className='w-1/2 m-auto transition duration-500 rounded-full md:w-1/2 opacity-60 hover:opacity-100 hover:scale-110' src={Solution} alt="soluções img" />
          <h3 className='py-5 text-2xl text-center text-blue-400 drop-shadow-md'>Soluções</h3>
        </div>
        <div className='py-5'>
          <img className='w-1/2 m-auto transition duration-500 rounded-full md:w-1/2 opacity-60 hover:opacity-100 hover:scale-110' src={Services} alt="services img" />
          <h3 className='py-5 text-2xl text-center text-blue-400 drop-shadow-md'>Serviços</h3>
        </div>
        <div className='py-5'>
          <img className='w-1/2 m-auto transition duration-500 rounded-full md:w-1/2 opacity-60 hover:opacity-100 hover:scale-110' src={Sobre} alt="sobre img" />
          <h3 className='py-5 text-2xl text-center text-blue-400 drop-shadow-md'>Sobre nós</h3>
        </div>
      </div>
      <div id='Serviços' className='flex flex-col gap-5 py-10 bg-blue-800'>
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
      <div id='fale-conosco' className='flex flex-col w-full py-10 bg-cyan-500'>
          <Fade triggerOnce cascade damping={0.3}>
            <div className='flex flex-col items-center justify-center w-full px-5 py-8 text-center text-white bg-cyan-500 gap-7'>
              <h3 className='text-5xl font-normal tracking-widest uppercase drop-shadow-lg'>Fale <span className='block pt-5'>conosco</span></h3>
              <p className='text-2xl font-medium drop-shadow-lg lg:text-xl lg:font-normal font'>Temos satisfação em atender!
                Queremos ouvir sobre sua necessidade e propor a melhor solução.</p>
            </div>
            <div id='contact-cards' className='lg:flex lg:m-auto lg:w-3/4'>
              <div className={`h-72 px-5 w-full flex flex-col text-white items-center justify-center gap-2 bg-[#a6c54a]`}>
                <IoIosPhonePortrait size={55} className='text-white' />
                <h4 className='text-4xl font-medium drop-shadow-md'>Fones</h4>
                <p className='mb-2 text-xl text-center drop-shadow-lg'>(11) 96061-5651 <span className='block pt-2'>(11) 96061-5651</span></p>
              </div>
              <div className={`h-72 px-5 w-full flex flex-col items-center justify-center gap-4 bg-[#f6f6f6]`}>
                <FaRegPaperPlane size={55} />
                <h4 className='text-3xl font-medium drop-shadow-md'>Email</h4>
                <p className='mb-2 text-xl text-center drop-shadow-lg'>contato@castatecnologia.com <span className='block pt-2'>info@castatecnologia.com</span></p>
              </div>
              <div className={`h-72 px-5 w-full flex flex-col text-white items-center justify-center gap-5 bg-[#437da3]`}>
                <IoLogoSkype size={55} />
                <h4 className='text-3xl font-medium drop-shadow-md'>Skype</h4>
                <p className='mb-2 text-xl text-center drop-shadow-lg'>Casta Tecnologia</p>
              </div>
            </div>
          </Fade>
      </div>
    </div>
  )
}

export default Home