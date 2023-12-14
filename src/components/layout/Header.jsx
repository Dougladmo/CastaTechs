import React, { useState, useEffect } from 'react'
import Logo from '../../assets/CastaLogo.webp'
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

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
      <div className='w-full sticky h-24 flex items-center'>
          <nav id='header'  className='relative w-full px-3 z-30 flex justify-between lg:justify-center lg:items-center lg:gap-14'>
              <Link to='/'>
               <img className='w-48 self-center' src={Logo} alt="Casta logo" />
              </Link>
              <ul
              className={`${offCanvas ? 'absolute' : 'hidden'} z-30 pt-28 lg:pt-0 px-5 bg-blue-950 lg:bg-transparent left-0 h-screen lg:h-24 lg:flex lg:justify-center lg:items-center lg:gap-24 w-3/5 lg:w-auto text-gray-300 lg:text-blue-900 font-semibold text-xl lg:text-base`}
              >
                  <li className='border-b-2 mb-3 pb-3 lg:pb-0 lg:mb-0 border-gray-300 lg:border-none'><Link className='hover:text-blue-500 transition duration-500' to='/'>Home</Link></li>
                  <li className='border-b-2 mb-3 pb-3 lg:pb-0 lg:mb-0 border-gray-300 lg:border-none'><Link className='hover:text-blue-500 transition duration-500' to='solucoes' >+  Soluções</Link></li>
                  <li className='border-b-2 mb-3 pb-3 lg:pb-0 lg:mb-0 border-gray-300 lg:border-none'><Link className='hover:text-blue-500 transition duration-500' to='servicos' >Serviços</Link></li>
                  <li className='border-b-2 mb-3 pb-3 lg:pb-0 lg:mb-0 border-gray-300 lg:border-none'><Link className='hover:text-blue-500 transition duration-500' to='sobre' >A Casta</Link></li>
                  <li className=''><Link to='contato'>Contato</Link ></li>
              </ul>
              <FaBars onClick={() => offCanvas ? setOffCanvas(false) : setOffCanvas(true)} className='bg-blue-950 mr-4 self-center text-white h-14 w-14 p-3 rounded-lg lg:hidden'/>
          </nav>
      </div>
    </div>
  )
}

export default Header