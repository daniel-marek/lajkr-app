import { benefit } from "../constants"
import styles, { layout } from "../style"

const BenefitCard = ({ icon, title, content }) => (
  <div className={`flex flex-col gap-4 p-8 rounded-[20px] ${styles.border} box-shadow`}>
    <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div>
      <h4 className={`${styles.heading4} mb-2`}>{title}</h4>
      <p className={styles.paragraph}>{content}</p>
    </div>
  </div>
)

const Benefit = () => {
  return (
    <section id="vyhody" className={`${layout.sectionCol}`}>
      <div className={layout.sectionInfo}>
        <h3 className={styles.heading3}>Hlavní výhody</h3>
        <h2 className={styles.heading2}>Proč s námi spolupracovat</h2>
      </div>
      <div className={`grid sm:grid-cols-2 md:grid-cols-3 gap-8`}>
        {benefit.map((benefit, index) => (
          <BenefitCard key={benefit.id} {...benefit} index={index} />
        ))}
        
      </div>

    </section>
  )
}

export default Benefit