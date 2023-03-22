import styles from "../style"
import { logoWhite } from "../assets"
import { navLinks, socialMedia } from "../constants"
import { contact } from "../constants"

const Footer = () => (
    <div className={`bg-primary sm:mt-20 mt-10 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`${styles.flexCenter} py-10 sm:pt-20 sm:pb-6 flex-col`}>
          <div className={`flex items-center md:flex-row flex-col mb-8 w-full gap-6`}>
            <div className="flex flex-1 flex-col gap-1 items-center md:items-start">
              <img src={logoWhite} alt="logo-lajkr" className="h-[48px] object-contain mb-4" />
              <p className={`${styles.paragraph} text-white mb-4`}>Vy máte vizi, my známe cestu</p>
              <a href={contact[1].link} className={`${styles.paragraph} text-white hover:underline`}>{contact[1].name}</a>
              <a href={contact[0].link} className={`${styles.paragraph} text-white hover:underline`}>{contact[0].name}</a>
              <p className={`${styles.paragraph} text-white`}>IČO: 09019405</p>
            </div>
            <div className="flex flex-col items-center gap-6 md:items-end">
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
              <div className="flex flex-row">
                {socialMedia.map((social, index) => (
                  <a key={social.id} href={social.link} target="_blank">
                    <img
                      src={social.icon} alt={social.id} className={`w-[32px] h-[32px]object-contain ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}/>
                  </a>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center sm:flex-row sm:justify-between w-full pt-6 border-t-[1px] border-t-[dimGrey]">
            <p className={`${styles.paragraph} !text-dimGrey !text-[14px]`}>© 2023 lajkr | Všechna práva vyhrazena</p>
            <p className={`${styles.paragraph} !text-dimGrey !text-[14px]`}>
              Created by  
              <span className="text-secondary"> lajkr</span>
              </p>
          </div>
        </section>
      </div>
    </div>



  )

export default Footer