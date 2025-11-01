import React from 'react'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./components/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";


const App = ()=>{

    return (
      <>

          <NavBar/>
          {/*<LogoSection/>*/}
          <Hero/>
          <Testimonials/>
          <ShowcaseSection/>
          <FeatureCards/>
          <ExperienceSection/>

          <Contact/>




      </>
    )
}

export default App
