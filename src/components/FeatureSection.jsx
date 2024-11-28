import React from 'react'
import { features } from '../constants'
function FeatureSection() {
  return (
    <>
        <div className='relative mt-20 border-b min-h-[800px] border-neutral-800 w-full p-auto'>
            <div className='text-center'>
                <span className='text-orange-500 bg-neutral-900 rounded-full text-sm font-medium px-2 py-1 uppercase '>Feature</span>
                 <h1 className='tracking-wide lg:text-5xl md:text-3xl sm:text-2xl mt-10'>
                    Easily build
                    <span className='bg-gradient-to-r from-orange-900 to-orange-500 text-transparent bg-clip-text '>{" "}Votre code</span> 
                 </h1>
            </div>
            <div className='p-auto flex flex-wrap mt-10 lg:mt-20 justify-center items-center '>
                {
                  features.map((feature, index) => (
                    <div key={index} className='flex w-full sm:w-1/2 lg:w-1/4 mx-10  p-4'>
                         <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700       
                          justify-center items-center rounded-full'>
                            {feature.icon}
                         </div>
                         <div>
                             <h5 className='mt-1 mb-6 text-xl'> {feature.text}</h5>
                             <p className='text-neutral-500 mt-5 mb-10'>{feature.description}</p>
                         </div>
                    </div>
                    )
                  )
                }
         </div>
        </div>
       
    
    </>
  )
}

export default FeatureSection