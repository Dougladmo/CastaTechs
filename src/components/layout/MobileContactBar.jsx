import React from 'react'
import {FaFacebook, FaPhoneAlt, FaCommentAlt} from 'react-icons/fa'
import { IoMail } from "react-icons/io5";

const MobileContactBar = () => {
  return (
    <div className='sticky bottom-0 flex items-center w-full bg-black h-14 md:hidden'>
      <ul className='flex items-center m-auto'>
        <li className='px-8 animate-pulse border-r-2 border-gray-400 sm:px-16'><a href="contato" aria-label='contact link' ><FaPhoneAlt className='text-[#01b1af]' size={25} /></a></li>
        <li className='px-8 animate-pulse border-r-2 border-gray-400 sm:px-16'><a href="mailto:contato@castatecnologia.com" aria-label='mail link' ><IoMail className='text-[#01b1af]' size={25} /></a></li>
        <li className='px-8 animate-pulse border-r-2 border-gray-400 sm:px-16'><a href="https://www.facebook.com/?locale=pt_BR" aria-label='facebook link' ><FaFacebook className='text-[#01b1af]' size={25} /></a></li>
        <li className='px-8 animate-pulse sm:px-16'><a href="contato" aria-label='contact link'><FaCommentAlt className='text-[#01b1af]' size={25} /></a></li>
      </ul>
    </div>
  )
}

export default MobileContactBar