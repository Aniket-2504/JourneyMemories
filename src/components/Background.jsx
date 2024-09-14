import React from 'react'

function Background() {
  return (
    <>
        <div className='fixed z-[2] w-full h-screen'>
            <div className=' absolute top-[5%] w-full py-10 flex justify-center font-semibold text-2xl text-yellow-500'>Pages</div>
            <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw] text-zinc-300 leading-none font-semibold'>Note.</h1>
        </div>
    </>
  )
}

export default Background