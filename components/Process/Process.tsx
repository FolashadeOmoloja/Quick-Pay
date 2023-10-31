import React from 'react'
import ProcessDetails from './ProcessDetails'
import ImageCarousel from '../CTA/ImageCarousel'

const Process = () => {
  return (
         <section id='how-it-works' className='py-[100px] bg-gradient px-[72px] max-sm:p-[72px] max-xmd:p-[20px] max-xmd:pb-[70px] relative'>
               <section className="flex absolute top-[-130px] left-0 max-md:hidden">
                   <img src="cta-stroke4.svg" alt=""  className=""/>
               </section>
               <section className='absolute right-[50px] top-[-70px] w-full max-md:top-[-30px] max-md:left-0'>
               <ImageCarousel display='hidden'/>
               </section>
               <section className='text-center mb-[40px] '>
                  <h3 className="text-[50px] text-[#333333] max-md:text-[30px] font-bold max-sm:text-[40px]">How It Works</h3>
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