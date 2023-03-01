import { feedback } from "../constants"
import styles from "../style"
import FeedbackCard from "./FeedbackCard"
import { stars, googleLogo } from "../assets"

const Reference = () => {
  return (
    <section id="reference" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      {/* TODO */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full gradient__section"></div>
      <div className="w-full flex flex-col gap-16  relative z-[1]">
        <div className="w-full flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full">
            <h3 className={styles.heading3}>Reference</h3>
            <h2 className={`${styles.heading2} "w-[500px]"`}>Co o nás říkají klienti</h2>
          </div>
          <div className="flex justify-start flex-wrap gap-3 sm:gap-4 sm:justify-end items-center w-full">
            <a href="https://bit.ly/google-lajkr" target="_blank"><img className="w-[52px]" src={googleLogo} alt="google"/></a> 
            <p className={`${styles.paragraph} font-semibold`}>5.0 hodnocení na Google</p>
            <a href="https://bit.ly/google-lajkr" target="_blank"><img className="w-[180px]" src={stars} alt="stars" /></a>
            
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}

        </div>
      </div>

    </section>
  )
}

export default Reference