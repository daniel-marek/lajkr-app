import { offer } from "../constants"
import styles, { layout } from "../style"
import { googleAds, sklik, facebookService, instagramService, tiktok } from "../assets"

const OfferCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-col gap-6 xs:flex-row p-6 rounded-[20px] ${styles.border} box-shadow ${index !== offer.length - 1 ? "mb-6" : "mb-0"}`}>
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
      <div className={`${layout.sectionInfo}`}>
        <h3 className={`${styles.heading3}`}>Naše služby</h3>
        <h2 className={`${styles.heading2} mb-10`}>Co pro vás můžeme udělat?</h2>
        <p className={`${styles.paragraph} max-w-[480px]`}>Nabízíme celou řadu služeb, které vám mohou pomoci rozšířit váš online byznys a zlepšit viditelnost vaší značky na internetu.</p>
        <p className={`${styles.paragraph} max-w-[480px] mt-4`}>S naším týmem zkušených webdesignerů a vývojářů vám pomůžeme vytvořit moderní a optimalizovanou online prezentaci, která osloví vaše zákazníky.</p>
        <p className={`${styles.paragraph} max-w-[480px] mt-4 mb-10`}>Webové stránky bez návštěvnosti, ale nebudou fungovat proto dále nabízíme i péči o vaše PPC kampaně, sociální sítě a o samotný e-mail marketing.</p>
        <div className="flex gap-8 w-full">
          <img src={googleAds} alt="google-ads" className="h-[38px]"/>
          <img src={sklik} alt="google-ads" className="w-[120px]"/>
          <img src={facebookService} alt="google-ads" className="h-[38px]"/>
          <img src={instagramService} alt="google-ads" className="h-[38px]"/>
          <img src={tiktok} alt="google-ads" className="h-[38px]"/>

        </div>
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