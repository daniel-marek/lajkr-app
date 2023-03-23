import React from "react";
import styles from "./style";
import {useState} from 'react';
import SocialniSite from "./pages/SocialniSite";
import { Route, Routes} from "react-router-dom";

import { Benefit, Contact, Footer, Hero, Navbar, Portfolio, Reference, Service, ContactForm } from "./components";

const App = () => { 
  
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

  return (

  <div className="bg-white w-full overflow-hidden">
    <div className="overflow-hidden">
      <div className={`${navbar ? "navbar-active" : "navbar"} fixed w-full z-10 top-0 ${styles.paddingX} ${styles.flexCenter}`}>
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
}

export default App