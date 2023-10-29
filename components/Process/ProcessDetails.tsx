'use client'
import {motion} from 'framer-motion'

const ProcessDetails = () => {
  return (
        <section>
            <section className='flex'>
               <div className='bg-white py-[48px] px-8 flex gap-[52px] rounded-[20px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(0,69,165,0.2)]'>
                       <div className='w-[60px] h-[60px] border-4 border-[#0045A5] rounded-full flex items-center justify-center text-[#0045A5] font-bold text-[20px]'>1</div>
                       <div>
                           <p className='font-bold mb-[14px] text-[#333333]'>Choose Your Service Description</p>
                           <p className='text-sm text-[#999999]'>Pick from a wide array of services, whether it's utility bills, airtime top-ups, or more.</p>
                       </div>
                  </div>
                  <div className='w-[300px] h-[2px] bg-[#0045A5] '></div>
            </section>
        </section>
        
  )
}

export default ProcessDetails