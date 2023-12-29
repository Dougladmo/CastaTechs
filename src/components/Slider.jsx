import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { RxDotFilled } from 'react-icons/rx';
import background1 from '../assets/background1.jpg'
import background2 from '../assets/background2.jpg'
import background3 from '../assets/background3.jpg'

function Slider() {
  const slides = [
    {
      title: 'FÁBRICA DE SOFTWARE',
      titleColor: '#3accc3',
      subTitle: 'Potencializando Seu Negócio',
      li: ['Desenvolvimento Java 6 a 21 LTS', 'Spring Framework and Spring Boot', 'Microsservice com SpringBoot', 'Integrações com API REST Full', 'Front end JFS, JSP e Angular (Node.js)', 'APIGEE Edge Gerenciamento de API'],
      url: background1,
      buttonColor1: '#8da157',
      buttonColor2: '#5a7512',
    },
    {
      title: 'Loja Virtual Crie a sua',
      titleColor: '#f2bf5e',
      subTitle: 'Planos a partir de R$ 29/mês. Teste 15 dias grátis.',
      li: ['Publique seus produtos com fotos e vídeos', 'Atraia novos clientes, gere leads', 'O cliente acompanha todo o pedido', 'Produtos em Destaques e Ofertas.'],
      url: background2,
      buttonColor1: '#ffc556',
      buttonColor2: '#f3a613',
    },
    {
      title: 'ADVPL Protheus',
      subTitle: 'Desenvolvimento AdvPL  e Customizações',
      titleColor: '#3accc3',
      li: ['Flexibilidade no ERP', 'Personalização de Processos', 'Desenvolvimento de Rotinas, Pontos de entradas', 'O Sistema cresce junto com a empresa.'],
      url: background3,
      buttonColor1: '#65a2af',
      buttonColor2: '#398493',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex); 
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const SlideInterval = () => {
    setInterval(() => {
      nextSlide()
    }, 10000);
  }

  useEffect(() => {
    SlideInterval()
  }, [])

  return (
    <div className='h-[550px] bg-blue-900 w-full m-auto relative group'> 
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='flex flex-col items-center justify-between h-full px-5 py-10 m-auto duration-500 bg-center bg-cover md:w-11/12 md:flex md:flex-row md:justify-around'
      >
        <div id='call-to-action' className='flex flex-col items-center self-start '>
          <h1 style={{color: `${slides[currentIndex].titleColor}`}} className={`drop-shadow-lg shadow-gray-500 text-left leading-normal text-4xl lg:text-6xl pt-8 font-bold uppercase ${currentIndex == 0 ? 'break-all' : ''}`}>{slides[currentIndex].title} <span className='block text-lg font-normal text-white'>{slides[currentIndex].subTitle? `${slides[currentIndex].subTitle}` : ''}</span></h1>
          <button style={{backgroundImage: `linear-gradient(${slides[currentIndex].buttonColor1}, ${slides[currentIndex].buttonColor2})`}} className={`uppercase text-white text-xl m-auto w-40 md:w-56 h-14 mt-10 md:ml-10 md:h-16 rounded-full hover:brightness-125 transition duration-500`} >Saiba mais</button>
        </div>
        <ul className='flex flex-col list-disc md:self-end md:mb-10'>
            {slides[currentIndex].li?.map((item) => {
              return <li key={item} className='ml-8 text-lg text-white lg:text-xl md:ml-16'>{item}</li>
            })}
        </ul>
      </div>
      {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] md:ml-5 left-5 text-2xl rounded-sm p-2 bg-gray-300 opacity-100 hover:opacity-50 transition duration-300 text-black cursor-pointer'>
        <MdOutlineKeyboardArrowLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] md:mr-5 right-5 text-2xl rounded-sm p-2 bg-gray-300 opacity-100 hover:opacity-50 transition duration-300 text-black cursor-pointer'>
        <MdOutlineKeyboardArrowRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex justify-center py-2 top-4'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled size={35} key={slideIndex} className={`transition duration-300 ${slideIndex == currentIndex ? 'text-blue-900'  : 'text-black'}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;