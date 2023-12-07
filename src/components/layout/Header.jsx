import React, { useState } from 'react'
import Logo from '../../assets/CastaLogo.webp'
import { FaBars } from "react-icons/fa";

const Header = () => {
    const [offCanvas, setOffCanvas] = useState(false)

  return (
    <div className='w-full h-24 flex items-center'>
        <nav id='header'  className='relative w-full px-3 flex justify-between md:justify-center md:items-center md:gap-14'>
            <img className='w-48 self-center' src={Logo} alt="Casta logo" />
            <ul
            className={`${offCanvas ? 'fixed' : 'hidden'} z-10 pt-28 md:pt-0 px-5 bg-blue-950 md:bg-transparent left-0 h-screen md:h-24 md:flex md:justify-center md:items-center md:gap-24 w-3/5 md:w-auto text-gray-300 md:text-blue-900 font-semibold text-xl md:text-base`}
            >
                <li className='border-b-2 mb-3 pb-3 md:pb-0 md:mb-0 border-gray-300 md:border-none'><a href="#">Home</a></li>
                <li className='border-b-2 mb-3 pb-3 md:pb-0 md:mb-0 border-gray-300 md:border-none'><a href="#">+  Soluções</a></li>
                <li className='border-b-2 mb-3 pb-3 md:pb-0 md:mb-0 border-gray-300 md:border-none'><a href="#">Serviços</a></li>
                <li className='border-b-2 mb-3 pb-3 md:pb-0 md:mb-0 border-gray-300 md:border-none'><a href="#">A Casta</a></li>
                <li className=''><a href="#">Contato</a></li>
            </ul>
            <FaBars onClick={() => offCanvas ? setOffCanvas(false) : setOffCanvas(true)} className='bg-blue-950 mr-4 self-center text-white h-14 w-14 p-3 rounded-md md:hidden'/>
        </nav>
    </div>
  )
}

export default Header