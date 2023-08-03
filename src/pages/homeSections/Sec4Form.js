import React from 'react'
import Button from '../../components/Button'
import Element from '../../components/Element'


const Sec4Form = () => {

  return (
    <div>
        <form action="" className="py-5 space-y-10  bg-[#F3FCFF] md:w-[80%] md:px-8">
            <div className="form-heading space-y-5">
                <span className='text-3xl font-bold'>Leave a Message</span>
                <p className='text-[#8A94A6]'>Contact us if you have any questions about our company or products. We will try to provide an answer within a few days.</p>
            </div>


        <div className="name-sec space-y-4 md:flex md:items-center md:space-y-0 md:justify-between lg:items-start">
         <Element type="input"  label='First Name'/>
         <Element type="input" label='Contact Number'/>
         
        </div>
        {/* --------------------------------------> */}
        <div className="email-mob-sec space-y-4  md:flex  md:items-center md:space-y-0 md:justify-between">
        <Element type="input" label='Email Address'/>
        
        <Element type="input" label='Catogery'/>
         
        </div>
     
        {/* --------------------------------------------> */}
       
        <div className="pin-code-sec">
         <Element label='Message' type='textArea'/>
        </div>

      <Button text='submit'/>
      </form>
    </div>
  )
}

export default Sec4Form
