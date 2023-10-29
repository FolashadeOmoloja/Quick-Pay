import React from 'react'
import ProcessDetails from './ProcessDetails'

const Process = () => {
  return (
         <section className='py-[100px] bg-gradient px-[72px] max-sm:p-[72px] max-xmd:p-[20px]'>
               <section className='text-center mb-[15px] '>
                  <h3 className="text-[50px] max-md:text-[30px] font-bold max-sm:text-[40px]">How It Works</h3>
                  <div className="w-[115px] h-[3px] bg-[#0045A5] mb-6 mx-auto"></div>
                   <p className="text-[#565252] font-semibold ">Simplicity in Action</p>
               </section>
               <section>
                    <ProcessDetails/>
               </section>
         </section>
  )
}

export default Process