import { quotes } from "../assets"
import styles from "../style"

const FeedbackCard = ({ content, name, company }) => (
    <div className={`flex justify-between flex-col p-8 rounded-[20px] ${styles.border} box-shadow w-full bg-white`}>
      <div>
        <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px] object-contain" />
        <p className={`${styles.paragraph} my-10`}>{content}</p>
      </div>
      <div>
        <h4 className={styles.heading4}>{name}</h4>
        <p className={`${styles.paragraph} text-grey text-base`}>{company}</p>
      </div>

    </div>
  )


export default FeedbackCard