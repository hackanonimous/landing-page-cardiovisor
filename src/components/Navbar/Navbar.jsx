import { useState } from 'react'
import Logo from '../../assets/logo.png'
import {navbarLinks,navbarRedes} from './links.js'
import { Link } from 'react-scroll'
export const Navbar=()=>{
  const[isOpen,setIsOpen]=useState(false)

  const toggleMenu=()=>{
    setIsOpen(!isOpen)
  }

  return(
    <nav className='fixed top-0 left-0 w-full bg-(--bg) shadow-(--shadow)'>
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-4'>
        <div>
          <img src={Logo} alt='Logo de mi Mvp cardiovisor' className='w-[100px]'/>
        </div>

        {/* boton para movil */}
        <button onClick={toggleMenu} className='md:hidden'>
          <svg className='w-6 h-6' fill='name' stroke='currentColor' viewBox='0 0 24 24'>
            {isOpen?(<path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />):(<path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 12h16M4 18h16'
            />)}
          </svg>
        </button>

        {/* links en desktop */}
        <div className='hidden md:block'>
          <ul className='flex sm:space-x-8 space-x-4'>
            {navbarLinks.map(el=>(
              <li key={el.id} className='sm:text-lg text-sm text-(--text-primary) hover:text-(--text-secondary) hover:-translate-0.5 duration-300'>
                {/* <a href={el.link}>{el.title}</a> */}
                <Link to={el.link} smooth={true} duration={500} offset={-200} className='cursor-pointer'>{el.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* links de redes en desktop */}
        <div className='hidden md:block'>
          <ul className='flex space-x-4'>
            {navbarRedes.map(el=>(
              <li key={el.id}>
                <a href={el.link} target='_blank'><i className={`${el.icon} sm:text-2xl text-lg hover:text-(--primary) duration-300`}></i></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Menu para movil */}
      <div className={`md:hidden absolute w-full bg-(--text-secondary) duration-300 ${isOpen?'opacity-100 visible':'opacity-0 invisible'}`}>
        <ul className='flex flex-col px-4 py-2'>
          {navbarLinks.map(el=>(
            <li key={el.id} className='py-2 text-center'>
              {/* <a href={el.link} className='text-(--bg) hover:text-(--primary) duration-300' onClick={toggleMenu}>{el.title}</a> */}
              <Link to={el.link} smooth={true} duration={500} offset={-200} className='cursor-pointer' onClick={toggleMenu}>{el.title}</Link>
            </li>
          ))}
        </ul>
        <ul className='flex space-x-4 px-4 py-4 border-t border-(--text-primary) justify-center'>
          {navbarRedes.map(el=>(
            <li key={el.id}>
              <a href={el.link} target='_blank' onClick={toggleMenu}><i className={`text-(--bg) ${el.icon} text-lg hover:text-(--primary) duration-300`}></i></a>
            </li>
          ))}
        </ul>
      </div>
    </nav>  
  )
}