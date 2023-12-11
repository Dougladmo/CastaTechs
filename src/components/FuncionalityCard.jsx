import React from 'react'

const FuncionalityCard = ({img, serviceTitle, ServiceSubTitle}) => {
  return (
    <div className='py-10 my-4 flex flex-col gap-5 bg-white w-full'>
      <img src={img} alt="service img" className='w-28 m-auto' />
      <h4 className='text-xl text-center text-black font-bold'>{serviceTitle}</h4>
      <p className='text-xl text-center text-gray-500 max-w-xs m-auto'>{ServiceSubTitle}</p>
    </div>                
  )
}

export default FuncionalityCard