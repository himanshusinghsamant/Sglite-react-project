import React from 'react'
import Section1 from './contactSection/CSection1'
import BackgroundImg from '../components/BgHeroImg'

const ContactUs = () => {
  return (
    <div>
     <BackgroundImg text1='Contact Us' text2='Home / Contact Us' />
      
    <Section1/>

    <div className="map-sec mt-16 md:h-[450px]">
    <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.1928722325583!2d80.69439591433982!3d27.556524038712325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ed6f25d73a403%3A0x5cfac9cb00c17164!2sAvas%20Vikas%20Colony%20Rd%2C%20Avas%20Vikas%20Colony%2C%20Sitapur%2C%20Uttar%20Pradesh%20261001!5e0!3m2!1sen!2sin!4v1675607712835!5m2!1sen!2sin"
          width="100%"
          height="450px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
    </div>
  )
}

export default ContactUs
