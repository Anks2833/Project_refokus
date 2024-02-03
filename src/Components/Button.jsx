import React, { useState } from 'react'
import { IoMdReturnRight } from "react-icons/io";

function Button({ title = 'Start a Project' }) {

  const [isHovered, setIsHovered] = useState(false);


  return (
    <>
      <div onMouseEnter={() => { setIsHovered(!isHovered) }} onMouseLeave={() => { setIsHovered(!isHovered) }} className={`relative w-36 px-3 py-2 bg-white text-black rounded-full text-sm flex items-center justify-around overflow-hidden`}>
        <div className={`w-full flex items-center justify-between px-1 ${isHovered === true ? "-translate-y-7" : "null"} transition-all`}>
          <h1 className={`font-medium transition-all`}>{title}</h1>
          <span>
            <IoMdReturnRight />
          </span>
        </div>

        <div className={`w-full flex items-center justify-between px-4 absolute bottom-0 text-black ${isHovered === true && "-translate-y-7"} transition-all`}>
          <h1 className={`left-4 bottom-0 translate-y-5 font-medium`}>{title}</h1>
          <span className={`right-4 bottom-0 translate-y-5 font-medium text-black`}>
            <IoMdReturnRight />
          </span>
        </div>

      </div>
    </>

  )
}

export default Button