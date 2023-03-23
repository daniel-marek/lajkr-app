import styles from "../style";
import { hero } from "../assets";
import Button from "./Button"; 

const Hero = () =>  (
    <section id='uvod' className={`flex md:flex-row flex-col pt-40 pb-20`}>
      <div className={`flex items-center justify-center md:items-start flex-col xl:px-0 sm:px-16 px-6 gap-5 w-full`}>
        
        <h1 className={`text-white font-grotesk text-[42px] md:text-[54px] font-bold text-center md:text-left w-full leading-tight`}>Posuneme vaše podnikání kupředu</h1>
        <p className={`${styles.paragraph} text-white text-center md:text-left w-full`}>Najdete u nás služby potřebné k rozvoji vašeho online, ale i offline podnikání.</p>
        <div className={`flex flex-col ss:flex-row gap-4`}>
          <Button link="#kontakt" styles="hover:bg-[#056A5E]" text="Nezávazná poptávka" />
          <Button link="#o-nas" styles="text-white bg-transparent border hover:bg-white hover:text-primary hidden" text="Více o nás" />
        </div> 
      </div>
      <div className={`${styles.flexCenter} md:my-0 my-10 relative w-full`}>
        <img src={hero} alt="billing" className="w-[450px] relative z-[5]" />
        <div className="absolute z-[0] w-[100%] h-[100%] top-0 green__gradient" />
      </div>
    </section>
  )


export default Hero