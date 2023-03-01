import { offer } from "../constants"
import styles, { layout } from "../style"

const OfferCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-col gap-6 xs:flex-row p-6 rounded-[20px] ${index !== offer.length - 1 ? "mb-6" : "mb-0"}`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className="flex-1 flex flex-col">
      <h4 className={`${styles.heading4} leading-[23px] mb-2`}>{title}</h4>
      <p className={`${styles.paragraph} mb-2`}>{content}</p>
    </div>
  </div>
)


const service = () => {
  return (
    <section id="sluzby" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h3 className={`${styles.heading3}`}>Naše služby</h3>
        <h2 className={`${styles.heading2} mb-10`}>Co pro vás můžeme udělat?</h2>
        <p className={`${styles.paragraph} max-w-[480px]`}>Potřebujete webové stránky pro vaši živnost nebo malou firmu? S naším týmem zkušených webdesignerů a vývojářů vám pomůžeme vytvořit moderní a optimalizovanou online prezentaci, která přiláká vaše zákazníky.</p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {offer.map((offer, index) => (
          <OfferCard key={offer.id} {...offer} index={index}/>
        ))}

      </div>

    </section>
  )
}

export default service