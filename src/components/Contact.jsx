import React from 'react'
import styles, { layout } from '../style'
import { contact, info } from '../constants'
import { danielMarek } from '../assets'


const Contact = () => {
  return (
    <section id='kontakt' className={`${styles.paddingY}`}>
      <div className={`${layout.section} ${styles.paddingX} bg-primary rounded-[20px] gap-16 ${styles.border} box-shadow w-full md:flex-row`}>
        <div className='flex flex-col gap-12 items-center w-full'>
          <div className='max-w-[600px]'>
            <h2 className={`${styles.heading1} text-center`}>Ozvěte se nám</h2>
            <h4 className={`${styles.heading4} text-center text-white`}>Společně posuneme vaše podnikání o level výš.</h4>
          </div>
          <div className='flex flex-col sm:flex-row items-center gap-12'>
            <img src={danielMarek} alt="daniel-marek" className={`rounded-full w-[164px] ${styles.border}`} />
            <ul>
              <li className={`${styles.paragraph} text-white mb-3 text-center sm:text-left`}>Daniel Marek</li>              
              {contact.map((item) => (                
                <li key={item.id} className={`${styles.paragraph} text-white flex gap-3 justify-center items-center sm:justify-start mb-3`}> 
                  <img className='w-[20px]' src={item.icon} alt="telefon" /> 
                  <a className='hover:underline' href={item.link} target="_blank">{item.name}</a> 
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Contact