import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
function HeroSection() {
  return (
    <div className='flex flex-col justify-center items-center mt-6 lg:mt-24'>
         <h1 className='text-2xl sm:text-xl lg:text-5xl'> 
            Virtuel build tools 
            <span className='bg-gradient-to-r from-orange-800 to-orange-500 text-transparent bg-clip-text'> {" "} for  developpers</span>
          </h1>
          <p className='text-lg max-w-4xl mt-4 text-center text-neutral-500'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ex ducimus esse a sequi consequatur, qui optio possimus soluta cum harum. Quia ipsam ullam quas reprehenderit.</p>
           <div className='flex justify-between items-center max-w-100 my-10 '>
                <a className="m-2 border rounded-md py-3 px-4 hover:bg-gradient-to-r from-orange-800 to-orange-500" href='#' >Start for free</a>
                <a href='#' className='bg-gradient-to-r from-orange-800 to-orange-500 py-3
                                       px-4 mr-2 rounded-md transition transform duration-200 
                                       hover:scale-105 m-2'>Documentation</a>
           </div>
           <div className='flex md:flex-row sm:w-full item-center justify-center mt-7'>
              <video autoplay loop muted className='w-1/4 border border-orange-700 shadow-orange-400 mx-8 my-4'>
                  <source src={video1} type='video/mp4' ></source>
              </video>
              <video autoplay loop muted className='border w-1/4 border-orange-700 shadow-orange-400 mx-8 my-4'>
                  <source src={video2} type='video/mp4' ></source>
              </video>
           </div>
    </div>
  )
}
export default HeroSection