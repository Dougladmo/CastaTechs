import React from 'react'
import Logo from '../../assets/logoFooter.webp'
import CastaFragments from '../../assets/CastaFragments.webp'
import CastaCardFlags from '../../assets/bandeirasCard.webp'
import CastaSecurityFlags from '../../assets/bandeirasSegurança.webp'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full px-5 py-5 bg-black'>
            <div id='footer-top' className='md:max-w-4xl md:m-auto md:grid md:grid-cols-2 md:'>
                <div id='navigation' className='mb-5 md:flex md:flex-col md:py-2'>
                    <a href="#"><img className='w-32 m-auto mb-3 md:w-24 md:m-0 md:mb-5' src={CastaFragments} alt="footer logo" /></a>
                    <ul className='flex flex-col w-full max-w-sm pl-1 text-lg text-white transition duration-300 md:text-sm'>
                        <Link to='/'><li className='py-5 pl-2 transition duration-300 rounded-md hover:bg-blue-600 md:py-3 md:w-1/2'>Home</li></Link>
                        <Link to='solucoes'><li className='py-5 pl-2 transition duration-300 rounded-md hover:bg-blue-600 md:py-3 md:w-1/2'>Soluções</li></Link>
                        <Link to='servicos'><li className='py-5 pl-2 transition duration-300 rounded-md hover:bg-blue-600 md:py-3 md:w-1/2'>Serviços</li></Link>
                        <Link to='sobre'><li className='py-5 pl-2 transition duration-300 rounded-md hover:bg-blue-600 md:py-3 md:w-1/2'>A casta</li></Link>
                        <Link to='contato'><li className='py-5 pl-2 transition duration-300 rounded-md hover:bg-blue-600 md:py-3 md:w-1/2'>Contato</li></Link>
                    </ul>
                </div>
                <div id='payments' className='flex flex-col items-end gap-8 pr-2 md:gap-3'>
                    <a href="#"><img src={Logo} alt="casta logo footer" className='rounded-2xl w-60' /></a>
                    <p className='text-lg text-white md:text-sm'>São paulo/SP <span className='block'>e Belém/PA </span></p>
                    <a className='mb-3 text-lg text-white md:text-sm' href="mailto:contato@castatecnologia.com ">contato@castatecnologia.com </a>
                    <img className='max-w-xs' src={CastaSecurityFlags} alt="Security flags" />
                    <img className='max-w-xs' src={CastaCardFlags} alt="Card flags" />
                </div>
            </div>
            <p id='copyright' className='max-w-sm px-2 mt-5 text-sm text-white md:text-xs md:max-w-4xl md:m-auto md:mt-10'>© Todos os direitos  reservados por CASTA Tecnologia 2002-2023.</p>
        </div>
    )
}

export default Footer