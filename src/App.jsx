import React from "react";
import styles from "./style"

import { Benefit, Contact, Footer, Hero, Navbar, Portfolio, Reference, Service } from "./components";

const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div className="overflow-hidden">
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>     
      </div>

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

    <div className={`bg-primary sm:mt-20 mt-10 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>


    



  </div>
)

export default App