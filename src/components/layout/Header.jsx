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
      <div className='sticky flex items-center w-full h-24'>
          <nav id='header'  className='relative z-30 flex justify-between w-full px-3 lg:justify-center lg:items-center lg:gap-14'>
              <Link to='/'>
               <img className='self-center w-48' src={Logo} alt="Casta logo" />
              </Link>
              <ul
              className={`${offCanvas ? 'absolute' : 'hidden'} z-30 pt-28 lg:pt-0 px-5 bg-blue-950 lg:bg-transparent left-0 h-screen lg:h-24 lg:flex lg:justify-center lg:items-center lg:gap-24 w-3/5 lg:w-auto text-gray-300 lg:text-blue-900 font-semibold text-xl lg:text-base`}
              >
                  <li className='pb-3 mb-3 border-b-2 border-gray-300 lg:pb-0 lg:mb-0 lg:border-none'><Link className='transition duration-500 hover:text-white md:hover:text-blue-500' to='/'>Home</Link></li>
                  <li className='pb-3 mb-3 border-b-2 border-gray-300 lg:pb-0 lg:mb-0 lg:border-none'><Link className='transition duration-500 hover:text-white md:hover:text-blue-500' to='solucoes' >+  Soluções</Link></li>
                  <li className='pb-3 mb-3 border-b-2 border-gray-300 lg:pb-0 lg:mb-0 lg:border-none'><Link className='transition duration-500 hover:text-white md:hover:text-blue-500' to='servicos' >Serviços</Link></li>
                  <li className='pb-3 mb-3 border-b-2 border-gray-300 lg:pb-0 lg:mb-0 lg:border-none'><Link className='transition duration-500 hover:text-white md:hover:text-blue-500' to='sobre' >A Casta</Link></li>
                  <li className=''><Link className='transition duration-500 hover:text-white md:hover:text-blue-500'  to='contato'>Contato</Link ></li>
              </ul>
              <FaBars onClick={() => offCanvas ? setOffCanvas(false) : setOffCanvas(true)} className='self-center p-3 mr-4 text-white rounded-lg bg-blue-950 h-14 w-14 lg:hidden'/>
          </nav>
      </div>
    </div>
  )
}

export default Header