import React from 'react'

const Button = ({text=''}) => {
  return (
    <div>
         <button className=" sec1-btn bg-[#186899] text-white rounded-md w-[9.8125rem] h-[2.4rem] md:hover:animate-pulse">
              {text}
            </button>
    </div>
  )
}

export default Button
