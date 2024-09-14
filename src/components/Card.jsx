import React from 'react'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { FaRegFileAlt } from 'react-icons/fa'

function Card() {
  return (

    
    <div className="relative w-60 h-72 rounded-[30px] bg-zinc-200 px-5 py-10 overflow-hidden">
        <FaRegFileAlt/>
        <p className='text-sm mt-5  leading-tight'>
            I want to visit Kedarnath befor I turned 21.
            </p>

            <div className="footer absolute bottom-0 bg-sky-400 w-full h-16 left-0 py-3 ">

            </div>

    </div>
    

  )
}

export default Card