import React from 'react'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { FaRegFileAlt } from 'react-icons/fa'
import { IoMdDoneAll } from 'react-icons/io'
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (

    
    <motion.div drag  dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.1} className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-200 px-5 py-10 overflow-hidden">
        <FaRegFileAlt/>
        <p className='text-sm mt-5  leading-tight'>
            {data.decs}
            </p>

            <div className="footer absolute bottom-0  w-full  left-0  ">

              {data.close ? (<div className='flex items-center justify-between mb-2 py-3 px-5'>
                        <h4 className='font-semibold'>Done </h4>
                        <span className='w-5 h-5 bg-green-700 rounded-full flex items-center justify-center shadow-md '>
                        {/* <IoMdDoneAll color='#fff' /> */}
                        </span>
                        
                    </div>)
                     : (<div className='flex items-center justify-between mb-2 py-3 px-5'>
                        <h4 className='font-semibold'>Progress... </h4>
                        <span className='w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center shadow-md '>
                        {/* <IoMdDoneAll color='#fff' /> */}
                        </span>
                        
                    </div>) }

                    
                    
                    {data.tag.isOpen ? ( <div className='tag w-full py-5 bg-green-700 flex items-center justify-center'>
                        <h3 className='text-sm font-semibold'>I made it</h3>
                    </div>) 
                    :  (<div className='tag w-full py-5 bg-yellow-400 flex items-center justify-center'>
                    <h3 className='text-sm font-semibold'>Working in Progress</h3>
                </div>)}

                   
            </div>

    </motion.div>
    

  )
}

export default Card