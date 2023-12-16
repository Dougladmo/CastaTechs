import React from 'react'
import Logo from '../../assets/logoFooter.webp'
import CastaFragments from '../../assets/CastaFragments.webp'
import CastaCardFlags from '../../assets/bandeirasCard.webp'
import CastaSecurityFlags from '../../assets/bandeirasSegurança.webp'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full bg-blue-950 px-5 py-5'>
            <div id='footer-top' className='md:max-w-4xl md:m-auto md:grid md:grid-cols-2 md:'>
                <div id='navigation' className='mb-5 md:flex md:flex-col md:py-2'>
                    <a href="#"><img className='w-32 md:w-24 md:m-0 mb-3 md:mb-5 m-auto' src={CastaFragments} alt="footer logo" /></a>
                    <ul className='w-full text-white pl-1 text-lg md:text-sm flex flex-col max-w-sm transition duration-300'>
                        <Link to='/'><li className='hover:bg-blue-600 rounded-md transition duration-300 py-5 md:py-3 pl-2 md:w-1/2'>Home</li></Link>
                        <Link to='solucoes'><li className='hover:bg-blue-600 rounded-md transition duration-300 py-5 md:py-3 pl-2 md:w-1/2'>Soluções</li></Link>
                        <Link to='servicos'><li className='hover:bg-blue-600 rounded-md transition duration-300 py-5 md:py-3 pl-2 md:w-1/2'>Serviços</li></Link>
                        <Link to='sobre'><li className='hover:bg-blue-600 rounded-md transition duration-300 py-5 md:py-3 pl-2 md:w-1/2'>A casta</li></Link>
                        <Link to='contato'><li className='hover:bg-blue-600 rounded-md transition duration-300 py-5 md:py-3 pl-2 md:w-1/2'>Contato</li></Link>
                    </ul>
                </div>
                <div id='payments' className='flex flex-col items-end pr-2 gap-8 md:gap-3'>
                    <a href="#"><img src={Logo} alt="casta logo footer" className='rounded-2xl w-60' /></a>
                    <p className='text-white text-lg md:text-sm'>São paulo/SP <span className='block'>e Belém/PA </span></p>
                    <a className='text-white text-lg md:text-sm mb-3' href="mailto:contato@castatecnologia.com ">contato@castatecnologia.com </a>
                    <img className='max-w-xs' src={CastaSecurityFlags} alt="Security flags" />
                    <img className='max-w-xs' src={CastaCardFlags} alt="Card flags" />
                </div>
            </div>
            <p id='copyright' className='md:max-w-4xl md:m-auto text-sm text-white max-w-sm px-2 mt-5 md:mt-10'>© Todos os direitos  reservados por CASTA Tecnologia 2002-2023.</p>
        </div>
    )
}

export default Footer