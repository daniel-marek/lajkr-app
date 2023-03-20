import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from './Button';
import styles from '../style';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_znjuixo', 'template_b71zbwf', form.current, '-FdR-RqLblcNC9nYc')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className={`${styles.border} rounded-[20px] bg-white p-6 md:p-9`}>
      <form className='flex flex-col gap-y-[1.4rem] w-full text-[18px] font-grotesk text-black' ref={form} onSubmit={sendEmail}>
        <div>
          <label>Jméno a příjmení</label>
          <input type="text" placeholder='Josef Novák' name="user_name" required/>
        </div>
        <div>
          <label>E-mail</label>
          <input type="email" placeholder='vas@email.cz' name="user_email" required/>
        </div>
        <div>
          <label>Telefonní číslo</label>
          <input type="text" placeholder='+420111222333' name="user_number"/>
        </div>
        <div>
          <label>Informace k projektu</label>
          <textarea className='resize-none max-h-[40rem] min-h-[8rem]' placeholder='Jak vám můžeme pomoci?' name="message" required/>
        </div>
        <div className='flex flex-row gap-x-[.8rem] items-center'>
          <input className='w-4 h-4 cursor-pointer' type="checkbox" required/>
          <label className='text-sm'>Souhlasím se zpracováním osobních údajů</label>
        </div>
        <div className='inline-block text-center'>
          <input className='py-4 px-6 bg-secondary font-grotesk font-semibold text-[18px] text-white text-center outline-none rounded-lg duration-500 cursor-pointer' type="submit" value="Odeslat" />          
        </div>
      </form>
    </div>
  )
}

export default ContactForm