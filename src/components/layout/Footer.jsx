import React from 'react'
import Logo from '../../assets/logoFooter.webp'
import CastaFragments from '../../assets/CastaFragments.webp'
import CastaCardFlags from '../../assets/bandeirasCard.webp'
import CastaSecurityFlags from '../../assets/bandeirasSegurança.webp'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-blue-950 px-5 py-5'>
            <div id='footer-top'>
                <div id='navigation' className='mb-5'>
                    <a href="#"><img className='w-32 mb-3 m-auto' src={CastaFragments} alt="footer logo" /></a>
                    <ul className='text-white pl-1 text-lg flex flex-col max-w-sm transition duration-300'>
                        <Link to='/'><li className='hover:bg-blue-600 rounded-md transition duration-300 py-5 pl-2'>Home</li></Link>
                        <Link to='solucoes'><li className='hover:bg-blue-600 rounded-md transition duration-300 py-5 pl-2'>Soluções</li></Link>
                        <Link to='servicos'><li className='hover:bg-blue-600 rounded-md transition duration-300 py-5 pl-2'>Serviços</li></Link>
                        <Link to='sobre'><li className='hover:bg-blue-600 rounded-md transition duration-300 py-5 pl-2'>A casta</li></Link>
                        <Link to='contato'><li className='hover:bg-blue-600 rounded-md transition duration-300 py-5 pl-2'>Contato</li></Link>
                    </ul>
                </div>
                <div id='payments' className='flex flex-col items-end pr-2 gap-8'>
                    <a href="#"><img src={Logo} alt="casta logo footer" className='rounded-2xl w-60' /></a>
                    <p className='text-white text-lg'>São paulo/SP <span className='block'>e Belém/PA </span></p>
                    <a className='text-white text-lg mb-3' href="mailto:contato@castatecnologia.com ">contato@castatecnologia.com </a>
                    <img className='max-w-xs' src={CastaSecurityFlags} alt="Security flags" />
                    <img className='max-w-xs' src={CastaCardFlags} alt="Card flags" />
                </div>
            </div>
            <p id='copyright' className='text-sm text-white max-w-sm px-2 mt-5'>© Todos os direitos  reservados por CASTA Tecnologia 2002-2023.</p>
        </div>
    )
}

export default Footer