import React from 'react'
import { testimonials } from '../constants'
function Testimonials() {
  return (
    <>
       <div>
          <h2 className='text-xl sm:text-3xl lg:text-5xl m-auto  text-center my-10 lg:my-20'> What people are saying</h2>
          <div className='flex flex-wrap justify-center'>
              {
                testimonials.map((testimonial, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-3 py-2'>
                       
                        <div className='border border-neutral-800 rounded-md text-md bg-neutral font-thin p-6'>
                            <p my-10>{testimonial.text}</p>
                               <div className='flex mt-10'>
                                   <div>
                                        <img
                                        src={testimonial.image}
                                        alt={testimonial.user} 
                                        className='w-12 h-12 rounded-full border border-neutral-300'
                                        />
                                     </div> 
                                     <div className='ml-10'>
                                        <h6>{testimonial.user}</h6>
                                        <spann className="text-sm font-normal italic text-neutral-600">
                                         {testimonial.company}
                                         </spann>
                                   </div>

                               </div>
                                
                        </div>
                         
                    </div>
                )) 
              }
          </div>
       </div>
    </>
  )
}

export default Testimonials