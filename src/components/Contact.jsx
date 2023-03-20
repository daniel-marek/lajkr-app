import React from 'react'
import styles, { layout } from '../style'
import { contact, info } from '../constants'
import { danielMarek } from '../assets'
import ContactForm from './ContactForm'


const Contact = () => {
  return (
    <section id='kontakt' className={`pt-40 pb-20 md:mt-10`}>
      <div className={`${layout.section} ${styles.paddingX} bg-primary rounded-[20px] gap-16 ${styles.border} box-shadow w-full md:flex-row relative`}>
        <div className='flex flex-col gap-12 items-center md:items-start w-full'>
          <div className='max-w-[600px] text-center md:text-left'>
            <h2 className={`${styles.heading1}`}>Ozvěte se nám</h2>
            <h4 className={`${styles.heading4}  text-white`}>Společně posuneme vaše podnikání o level výš.</h4>
          </div>
          <div className='flex flex-col ss:flex-row md:flex-col items-center md:items-start gap-9'>
            <img src={danielMarek} alt="daniel-marek" className={`rounded-full w-[148px] ${styles.border}`} />
            <ul>
              <li className={`${styles.paragraph} text-white mb-3 text-center ss:text-left`}>Daniel Marek</li>              
              {contact.map((item) => (                
                <li key={item.id} className={`${styles.paragraph} text-white flex gap-3 justify-center items-center ss:justify-start mb-3`}> 
                  <img className='w-[20px]' src={item.icon} alt="telefon" /> 
                  <a className='hover:underline' href={item.link} target="_blank">{item.name}</a> 
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='w-full md:mt-[-200px]'>
            <ContactForm/>
        </div>
          

      </div>

    </section>
  )
}

export default Contact