import React from 'react'
import Section1 from './aboutusSection/Section_1'
import Section2 from './aboutusSection/Section_2'
import BackgroundImg from '../components/BgHeroImg'

const AboutUs = () => {
  return (
    <div>
     <BackgroundImg text1='About Us' text2='Home / About Us' />
      {/* ------------------------> */}

      <Section1/>
      <Section2/>

    </div>
  )
}

export default AboutUs;