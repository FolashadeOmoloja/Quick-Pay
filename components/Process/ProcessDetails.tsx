'use client'
import {motion} from 'framer-motion'

const ProcessDetails = () => {
  return (
        <section>
               <div className='bg-white py-[48px] pl-8 flex gap-[52px]'>
                    <div className='w-[60px] h-[60px] border-4 border-[#0045A5] rounded-full flex items-center justify-center text-[#0045A5] font-bold text-[20px]'>1</div>
                    <div>
                        <p className='font-bold mb-[14px]'>Choose Your Service Description</p>
                        <p className='text-sm text-[#999999]'>Pick from a wide array of services, whether it's utility bills, airtime top-ups, or more.</p>
                    </div>
               </div>
        </section>
        
  )
}

export default ProcessDetails