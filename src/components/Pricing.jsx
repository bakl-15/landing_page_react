import React from 'react'
import {CheckCircle2 } from "lucide-react"
import {pricingOptions} from '../constants'
function Pricing() {
  return (
    <>
        <div className='mt-20 mx-auto  w-2/3'>
            <h2
               className='text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide'
            >Pricing</h2>
            <div className='flex flex-wrap'>
                 {pricingOptions.map((option, index) => (
                    <div key={index}  className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                        <div className='border border-neutral-700 rounded-xl p-2'>
                            <p className='p-2 text-4xl'>
                                {option.title}
                                {option.title === 'Pro' && ( <span className='bg-gradient-to-r from-orange-900 to-orange-500 text-transparent bg-clip-text text-xl ml-2'>(Most Popular)</span> )}
                            </p>
                            <p>
                               <span className='text-5xl mt-6 mr-2'> {option.price} </span> 
                               <span className='text-neutral-400 tracking-wide'> /Month </span> 
                               <ul>
                                   {option.features.map((feature, index) => (
                                     <li key={index} className='mt-8 flex items-center'>
                                        <CheckCircle2 />
                                        <span  className='ml-2'>{feature}</span>
                                     </li>
                                   ))}
                               </ul>
                               <a href="#"
                                  className='inline-flex justify-center items-center text-center w-full h-12 mt-20 p-5 tracking-tight text-xl hover:bg-orange-900 border border-orange-900
                                  rounded-lg transition duration-200 mx-2'
                               >Subscribe</a>
                            </p>
                        </div>
                    </div>
                 ))}
            </div>
        </div>
    
    </>
  )
}

export default Pricing