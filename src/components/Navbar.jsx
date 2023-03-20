import {useState} from 'react'
import { close, logoWhite, menu } from "../assets";
import { navLinks } from '../constants';
import Button from './Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full flex py-6 justify-between items-center z-[100]`}>
      <a href='#uvod'>
        <img src={logoWhite} alt="lajkr" className='h-[32px]'/>
      </a>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-grotesk font-medium cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-white duration-500 hover:text-dimWhite relative underline-link`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <Button link="#kontakt" styles="text-base !font-medium ml-10 hover:bg-[#056A5E] hidden sm:flex" text="Kontaktovat"/>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
          src={toggle ? close : menu} 
          alt="menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}  
        />
        <div 
          className={`${toggle ? "flex" : "hidden"} px-6 py-12 bg-white absolute z-50 top-20 right-0 left-0 my-2 mx-4 rounded-xl sidebar flex-col`} 
          onClick={() => setToggle((prev) => !prev)}
          
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-grotesk font-medium cursor-pointer text-[20px] ${index === navLinks.length - 1 ? "mr-0" : "mb-8"} text-black`}
                
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          <Button link="#kontakt" styles="text-base !font-medium mt-10 hover:bg-[#056A5E]" text="Kontaktovat"/>
          

        </div>

      </div>
      
    </nav>
  )
}

export default Navbar