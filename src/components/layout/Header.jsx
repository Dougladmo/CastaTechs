import React, { useState, useEffect } from 'react'

import Logo from '../../assets/CastaLogo.jpeg'
import styles from './Header.module.css'

import { Link } from 'react-scroll';
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
          <nav id='header'  className='relative z-30 flex justify-between w-full px-3 xl:px-48'>
              <Link  to='main' offset={-100} smooth={true} duration={500}>
               <img className='self-center w-20 ml-5 cursor-pointer' src={Logo} alt="Casta logo" />
              </Link>
              <ul
              className={`${offCanvas ? 'absolute animate-offCanvas' : 'hidden'}  z-30 pt-12 px-5 bg-black left-0 h-screen w-3/5 text-gray-300 font-semibold text-xl md:border-r-2 md:border-white`}
              >
                  <li><Link onClick={() => setOffCanvas(false)} to='main' offset={-100} smooth={true} duration={500}><img className='w-24 my-10 rounded-lg' src={Logo} alt="Casta logo ul"/></Link></li>
                  <li className='pb-3 pl-3 mb-3 border-b-2 border-gray-300'><Link onClick={() => setOffCanvas(false)} className='transition duration-500 cursor-pointer hover:text-white md:hover:text-blue-500' to='main' offset={-100} smooth={true} duration={500} >Home</Link></li>
                  <li className='pb-3 mb-3 border-b-2 border-gray-300'><Link onClick={() => setOffCanvas(false)} className='transition duration-500 cursor-pointer hover:text-white md:hover:text-blue-500' to='solucoes' offset={-120} smooth={true} duration={500}>+ Soluções</Link></li>
                  <li className='pb-3 pl-3 mb-3 border-b-2 border-gray-300'><Link onClick={() => setOffCanvas(false)} className='transition duration-500 cursor-pointer hover:text-white md:hover:text-blue-500' to='servicos' offset={500}  smooth={true} duration={500}>Serviços</Link></li>
                  <li className='pb-3 pl-3 mb-3 border-b-2 border-gray-300'><Link onClick={() => setOffCanvas(false)} className='transition duration-500 cursor-pointer hover:text-white md:hover:text-blue-500' to='main' offset={-100} smooth={true} duration={500} >A Casta</Link></li>
                  <li className='pb-3 pl-3 mb-3 border-b-2 border-gray-300'><Link onClick={() => setOffCanvas(false)} className='transition duration-500 cursor-pointer hover:text-white md:hover:text-blue-500' to='contato' offset={-100} smooth={true} duration={500}>Contato</Link ></li>
              </ul>
              <div onClick={() => offCanvas ? setOffCanvas(false) : setOffCanvas(true)} className='flex items-center self-center justify-center p-3 mr-4 text-white transition duration-500 bg-transparent border-2 border-white hover:text-black hover:bg-white rounded-2xl h-14 w-14'>
                { offCanvas ? <IoCloseSharp size={25} /> : <FaBars size={25} />}
              </div>
          </nav>
      </div>
    </div>
  )
}

export default Header