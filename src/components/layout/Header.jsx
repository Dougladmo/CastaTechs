import React, { useState, useEffect } from 'react'

import Logo from '../../assets/CastaLogo.webp'
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
              <Link to='/' aria-label='link to homepage'>
               <img className='self-center w-48' src={Logo} alt="Casta logo" />
              </Link>
              <ul
              className={`${offCanvas ? 'absolute animate-offCanvas' : 'hidden'}  z-30 pt-12 lg:pt-0 px-5 bg-blue-950 lg:bg-transparent left-0 h-screen lg:h-24 lg:flex lg:justify-center lg:items-center lg:gap-24 w-3/5 lg:w-auto text-gray-300 lg:text-blue-900 font-semibold text-xl lg:text-base`}
              >
                  <li><Link to='/'  aria-label='link to homepage'><img className='my-10 rounded-lg w-44 md:hidden' src={Logo} alt="Casta logo  ul"/></Link></li>
                  <li className='pb-3 mb-3 border-b-2 border-gray-300 lg:pb-0 lg:mb-0 lg:border-none'><Link className='transition duration-500 hover:text-white md:hover:text-blue-500' to='/'  aria-label='Home'>Home</Link></li>
                  <li className='pb-3 mb-3 border-b-2 border-gray-300 lg:pb-0 lg:mb-0 lg:border-none'><Link className='transition duration-500 hover:text-white md:hover:text-blue-500' to='solucoes'  aria-label='+ Soluções' >+  Soluções</Link></li>
                  <li className='pb-3 mb-3 border-b-2 border-gray-300 lg:pb-0 lg:mb-0 lg:border-none'><Link className='transition duration-500 hover:text-white md:hover:text-blue-500' to='servicos'  aria-label='Serviços' >Serviços</Link></li>
                  <li className='pb-3 mb-3 border-b-2 border-gray-300 lg:pb-0 lg:mb-0 lg:border-none'><Link className='transition duration-500 hover:text-white md:hover:text-blue-500' to='sobre'  aria-label='A Casta' >A Casta</Link></li>
                  <li className=''><Link className='transition duration-500 hover:text-white md:hover:text-blue-500'  to='contato' aria-label='link to contact page'>Contato</Link ></li>
              </ul>
              <div onClick={() => offCanvas ? setOffCanvas(false) : setOffCanvas(true)} className='flex items-center self-center justify-center p-3 mr-4 text-white rounded-lg bg-blue-950 h-14 w-14 lg:hidden'>
                { offCanvas ? <IoCloseSharp size={45} /> : <FaBars size={30} />}
              </div>
          </nav>
      </div>
    </div>
  )
}

export default Header