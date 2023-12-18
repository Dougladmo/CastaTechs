import React from 'react'

const FuncionalityCard = ({img, serviceTitle, ServiceSubTitle}) => {
  return (
    <div className='flex flex-col w-full gap-5 py-10 my-4 bg-white lg:px-5'>
      <img src={img} alt="service img" className='m-auto w-28' />
      <h4 className='text-xl font-bold text-center text-black md:text-lg'>{serviceTitle}</h4>
      <p className='max-w-xs m-auto text-xl text-center text-gray-500 md:text-base'>{ServiceSubTitle}</p>
    </div>                
  )
}

export default FuncionalityCard