import React, { useState, useEffect } from 'react'

import Logo from '../../assets/CastaLogo.jpeg'
import styles from './Header.module.css'

import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
    const [offCanvas, setOffCanvas] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
      const HandleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 130) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", HandleScroll);
  
      return () => {
        return window.removeEventListener("scroll", HandleScroll);
      };
    }, []);

  return (
    <div className={`${ scrolled ? styles.sticky : styles.header }`} >
      <div className='sticky flex items-center w-full h-24'>
          <nav id='header'  className='relative z-30 flex justify-between w-full px-3 lg:justify-center lg:items-center'>
              <Link  to='/'>
               <img className='self-center w-20' src={Logo} alt="Casta logo" />
              </Link>
              <ul
              className={`${offCanvas ? 'absolute animate-offCanvas' : 'hidden'}  z-30 pt-12 lg:pt-0 px-5 bg-black lg:bg-transparent left-0 h-screen lg:h-24 lg:flex lg:justify-center lg:items-center lg:gap-0 w-3/5 lg:w-auto text-gray-300 lg:text-[#01b1af] font-semibold text-xl lg:text-lg lg:font-thin`}
              >
                  <li><Link to='/' aria-label="Logo offcanvas"><img className='my-10 rounded-lg w-24 md:hidden' src={Logo} alt="Casta logo ul"/></Link></li>
                  <li className='pb-3 mb-3 border-b-2 border-gray-300 lg:py-1 lg:mb-0 lg:border-b-0 lg:px-12 lg:border-r-2 lg:border-[#242424]'><Link className='transition duration-500 hover:text-white md:hover:text-blue-500' to='/'>Home</Link></li>
                  <li className='pb-3 mb-3 border-b-2 border-gray-300 lg:py-1 lg:mb-0 lg:border-b-0 lg:px-12 lg:border-r-2 lg:border-[#242424]'><Link className='transition duration-500 hover:text-white md:hover:text-blue-500' to='solucoes' >+  Soluções</Link></li>
                  <li className='pb-3 mb-3 border-b-2 border-gray-300 lg:py-1 lg:mb-0 lg:border-b-0 lg:px-12 lg:border-r-2 lg:border-[#242424]'><Link className='transition duration-500 hover:text-white md:hover:text-blue-500' to='servicos' >Serviços</Link></li>
                  <li className='pb-3 mb-3 border-b-2 border-gray-300 lg:py-1 lg:mb-0 lg:border-b-0 lg:px-12 lg:border-r-2 lg:border-[#242424]'><Link className='transition duration-500 hover:text-white md:hover:text-blue-500' to='sobre' >A Casta</Link></li>
                  <li className='lg:pl-12'><Link className='transition duration-500 hover:text-white md:hover:text-blue-500'  to='contato'>Contato</Link ></li>
              </ul>
              <div onClick={() => offCanvas ? setOffCanvas(false) : setOffCanvas(true)} className='flex items-center self-center justify-center p-3 mr-4 text-white rounded-lg bg-[#01b1af] h-14 w-14 lg:hidden'>
                { offCanvas ? <IoCloseSharp size={45} /> : <FaBars size={30} />}
              </div>
          </nav>
      </div>
    </div>
  )
}

export default Header