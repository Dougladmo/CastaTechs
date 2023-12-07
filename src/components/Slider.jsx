import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
  const slides = [
    {
      title: 'Desenvolvimento Java',
      li: ['Desenvolvimento Java 6 a 21 LTS', 'Spring Framework and Spring Boot', 'Microsservice com SpringBoot', 'Integrações com API REST Full', 'Front end JFS, JSP e Angular (Node.js)', 'APIGEE Edge Gerenciamento de API'],
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      title: 'Loja Virtual Crie a sua',
      liTitle: 'Planos a partir de R$ 29/mês. Teste 15 dias grátis.',
      li: ['Publique seus produtos com fotos e vídeos', 'Atraia novos clientes, gere leads', 'O cliente acompanha todo o pedido', 'Produtos em Destaques e Ofertas.'],
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      title: 'ADVPL Protheus',
      li: ['Flexibilidade no ERP', 'Personalização de Processos', 'Desenvolvimento de Rotinas, Pontos de entradas', 'O Sistema cresce junto com a empresa.'],
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
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
        className='md:w-11/12 m-auto h-full bg-center bg-cover duration-500'
      >
        <h1 className='text-center text-4xl pt-8 text-white uppercase'>{slides[currentIndex].title}</h1>
        <ul>
            <h2>{slides[currentIndex].liTitle? `${slides[currentIndex].liTitle}` : ''}</h2>
        </ul>
      </div>
      {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 bg-gray-300 hover:opacity-50 transition duration-300 text-black cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={40} />
      </div>
      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 bg-gray-300 hover:opacity-50 transition duration-300 text-black cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={40} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;