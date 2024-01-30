import React from 'react'
import Logo from '../../assets/LogoFooter.jpeg'
import CastaFragments from '../../assets/CastaIcon.jpeg'
import CastaCardFlags from '../../assets/bandeirasCard.webp'
import CastaSecurityFlags from '../../assets/bandeirasSegurança.webp'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='w-full px-5 py-5 bg-black'>
            <div id='footer-top' className='md:max-w-4xl md:m-auto md:grid md:grid-cols-2 md:'>
                <div id='navigation' className='mb-5 md:flex md:flex-col md:py-2'>
                    <Link to='main' offset={-100} smooth={true} duration={500}><img className='w-24 m-auto mb-3 cursor-pointer md:m-0 md:mb-5 md:w-16 lg:w-14' src={CastaFragments} alt="footer logo" /></Link>
                    <ul className='flex flex-col w-full max-w-sm pl-1 text-lg text-white transition duration-300 md:text-sm'>
                        <li className='py-5 pl-2 transition duration-500 rounded-md hover:bg-blue-600 md:py-3 md:w-1/2'><Link className='cursor-pointer pr-36'  offset={-100} smooth={true} duration={500} to='main'>Home</Link></li>
                        <li className='py-5 pl-2 transition duration-500 rounded-md hover:bg-blue-600 md:py-3 md:w-1/2'><Link className='pr-32 cursor-pointer' offset={-120} smooth={true} duration={500} to='solucoes' >Soluções</Link></li>
                        <li className='py-5 pl-2 transition duration-500 rounded-md hover:bg-blue-600 md:py-3 md:w-1/2'><Link className='pr-32 cursor-pointer' offset={500} smooth={true} duration={500} to='servicos'>Serviços</Link></li>
                        <li className='py-5 pl-2 transition duration-500 rounded-md hover:bg-blue-600 md:py-3 md:w-1/2'><Link className='pr-24 cursor-pointer' offset={-100} smooth={true} duration={500} to='main'>Quem Somos</Link></li>
                        <li className='py-5 pl-2 transition duration-500 rounded-md hover:bg-blue-600 md:py-3 md:w-1/2'><Link className='pr-32 cursor-pointer' offset={-100} smooth={true} duration={500} to='contato'>Contato</Link></li>
                    </ul>
                </div>
                <div id='payments' className='flex flex-col items-end gap-8 pr-2 md:gap-3'>
                    <Link to='main' offset={-100} smooth={true} duration={500}><img src={Logo} alt="casta logo footer" className='w-32 cursor-pointer rounded-2xl' /></Link>
                    <p className='text-lg text-white md:text-sm'>São Paulo/SP <span className='block'>e Belém/PA </span></p>
                    <a href='mailto:contato@castatecnologia.com' className='mb-3 text-lg text-white md:text-sm'>contato@castatec.com.br </a>
                    <img className='max-w-xs' src={CastaSecurityFlags} alt="Security flags" />
                    <img className='max-w-xs' src={CastaCardFlags} alt="Card flags" />
                </div>
            </div>
            <p id='copyright' className='max-w-sm px-2 mt-5 text-sm text-white md:text-xs md:max-w-4xl md:m-auto md:mt-10'>© Todos os direitos  reservados por CASTA Tecnologia 2002-2023.</p>
        </div>
    )
}

export default Footer