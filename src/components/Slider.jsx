import React, { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { RxDotFilled } from 'react-icons/rx';
import background1 from '../assets/background1.jpg'
import background2 from '../assets/background2.jpg'
import background3 from '../assets/background3.jpg'

function Slider() {
  const slides = [
    {
      title: 'Desenvolvimento Java',
      titleColor: '#3accc3',
      li: ['Desenvolvimento Java 6 a 21 LTS', 'Spring Framework and Spring Boot', 'Microsservice com SpringBoot', 'Integrações com API REST Full', 'Front end JFS, JSP e Angular (Node.js)', 'APIGEE Edge Gerenciamento de API'],
      url: background1,
    },
    {
      title: 'Loja Virtual Crie a sua',
      titleColor: '#f2bf5e',
      liTitle: 'Planos a partir de R$ 29/mês. Teste 15 dias grátis.',
      li: ['Publique seus produtos com fotos e vídeos', 'Atraia novos clientes, gere leads', 'O cliente acompanha todo o pedido', 'Produtos em Destaques e Ofertas.'],
      url: background2,
    },
    {
      title: 'ADVPL Protheus',
      titleColor: '#3accc3',
      li: ['Flexibilidade no ERP', 'Personalização de Processos', 'Desenvolvimento de Rotinas, Pontos de entradas', 'O Sistema cresce junto com a empresa.'],
      url: background3,
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

  return (
    <div className='h-[600px] bg-blue-900 w-full m-auto relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='md:w-11/12 m-auto h-full flex flex-col items-center justify-between py-10 px-5 bg-center bg-cover duration-500'
      >
        <h1 style={{color: `${slides[currentIndex].titleColor}`}} className={`text-left leading-normal text-4xl pt-8 font-bold uppercase`}>{slides[currentIndex].title}</h1>
            <button className='uppercase ' >Saiba mais</button>
        <ul className='list-disc'>
            <h2 className='text-2xl max-w-xs text-left text-white' >{slides[currentIndex].liTitle? `${slides[currentIndex].liTitle}` : ''}</h2>
            {slides[currentIndex].li?.map((item) => {
              return <li className='text-lg ml-8 text-white'>{item}</li>
            })}
        </ul>
      </div>
      {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-sm p-2 bg-gray-300 hover:opacity-50 transition duration-300 text-black cursor-pointer'>
        <MdOutlineKeyboardArrowLeft onClick={prevSlide} size={40} />
      </div>
      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-sm p-2 bg-gray-300 hover:opacity-50 transition duration-300 text-black cursor-pointer'>
        <MdOutlineKeyboardArrowRight onClick={nextSlide} size={40} />
      </div>
      <div className='flex top-4 justify-center py-2'>
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