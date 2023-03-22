import React from 'react'
import { Hero, Service, Portfolio, Benefit, Reference, Contact } from '../components'
import styles from '../style'

const Home = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className="overflow-hidden">
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
          <Hero />
          </div>
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Service />
        <Portfolio /> 
        <Benefit /> 
        <Reference /> 
        <Contact />
      </div>
    </div>
    </div>
  )
}

export default Home