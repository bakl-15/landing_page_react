import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import codeImg from '../assets/code.jpg'
import { checklistItems } from '../constants'
function Workflow() {
  return (
    <>
    <div className='mt-20'>
       <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>
          Accelerate your {" "}
           <span className='bg-gradient-to-r from-orange-800 to-orange-500 text-transparent bg-clip-text'> Coding worflow</span>
        </h2>
    </div>
    <div className='flex justify-center flex-wrap w-2/3 mx-auto px-auto'>
      <div className='w-full lg:w-1/2 p-2'>
           <img src={codeImg} alt='Image'/>
      </div>
      <div className='pt-12 w-full lg:w-1/2'>
            { checklistItems.map((item, index) =>(
                <div key={index} class="flex mb-12">
                  <div className='text-green-500 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
                      <CheckCircle2 />
                  </div>
                  <div>
                     <h5 className='mt-1 mb-2 text-xl'>{item.title} </h5>
                     <p className='text-neutral-500 text-md'>{item.description}</p>
                  </div>
                </div>
            ))}
      </div>
    </div>
    </>
  )
}

export default Workflow 