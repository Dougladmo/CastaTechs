import React from 'react'
import {FaFacebook, FaPhoneAlt, FaCommentAlt} from 'react-icons/fa'
import { IoMail } from "react-icons/io5";

const MobileContactBar = () => {
  return (
    <div className='sticky bottom-0 flex items-center w-full bg-white h-14 md:hidden'>
      <ul className='flex items-center m-auto'>
        <li className='px-8 border-r-2 border-gray-400 sm:px-16'><a href="contato"><FaPhoneAlt className='text-green-600' size={25} /></a></li>
        <li className='px-8 border-r-2 border-gray-400 sm:px-16'><a href="mailto:contato@castatecnologia.com"><IoMail className='text-pink-700' size={25} /></a></li>
        <li className='px-8 border-r-2 border-gray-400 sm:px-16'><a href="https://www.facebook.com/?locale=pt_BR"><FaFacebook className='text-blue-800' size={25} /></a></li>
        <li className='px-8 sm:px-16'><a href="contato"><FaCommentAlt className='text-green-600' size={25} /></a></li>
      </ul>
    </div>
  )
}

export default MobileContactBar