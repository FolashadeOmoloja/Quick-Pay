'use client'
import {motion} from 'framer-motion'

const ProcessDetails = () => {
  return (
        <section className='flex flex-col gap-[35px] mt-6'>
            <section className='flex relative'>
               <div className='bg-white py-[48px] px-8 max-xmd:px-4 flex gap-[40px] max-xmd:gap-[20px] rounded-[20px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(0,69,165,0.2)] w-[50%] max-md:w-full  '>
                       <div className=' '>
                        <img src="circle1.svg" alt="img" />
                       </div>
                       <div>
                           <p className='font-bold mb-[14px] text-[#333333]'>Choose Your Service Description</p>
                           <p className='text-sm text-[#999999]'>Pick from a wide array of services, whether it's utility bills, airtime top-ups, or more.</p>
                       </div>
                  </div>
                  <div className='absolute top-[100px] left-[50%] max-lg:hidden  '>
                    <img src="processline1.svg" alt="" />
                  </div>
            </section>
            {/*second div*/}
            <section className='flex justify-end relative'>
                     <div className='absolute top-[100px] right-[50%] max-lg:hidden '>
                       <img src="processline2.svg" alt="" />
                      </div>
                      <div className='bg-white py-[48px] px-8 max-xmd:px-4 flex gap-[40px] max-xmd:gap-[20px] rounded-[20px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(0,69,165,0.2)] w-[50%] max-md:w-full  '>
                       <div className=''>
                        <img src="circle2.svg" alt="img" />
                       </div>
                       <div>
                           <p className='font-bold mb-[14px] text-[#333333]'>Enter Details Description</p>
                           <p className='text-sm text-[#999999]'>Fill in essential information like your account details, phone number, and the amount to recharge or pay</p>
                       </div>
                  </div>
            </section>
            {/*third div*/}
            <section className='flex relative'>
               <div className='bg-white py-[48px] px-8 max-xmd:px-4 flex gap-[40px] max-xmd:gap-[20px] rounded-[20px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(0,69,165,0.2)] w-[50%] max-md:w-full  '>
                       <div >
                        <img src="circle3.svg" alt="img" className=''/>
                       </div>
                       <div>
                           <p className='font-bold mb-[14px] text-[#333333]'>Review & Confirm Description</p>
                           <p className='text-sm text-[#999999]'>Carefully double-check your inputs, and with a simple tap, confirm your transaction.</p>
                       </div>
                  </div>
                  <div className='absolute top-[100px] left-[50%] max-lg:hidden   '>
                    <img src="processline1.svg" alt="" />
                  </div>
            </section>
            {/*fourth div*/}
            <section className='flex justify-end relative'>
                       <div className='bg-white py-[48px] px-8 max-xmd:px-4 flex gap-[40px] max-xmd:gap-[20px] rounded-[20px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(0,69,165,0.2)] w-[50%] max-md:w-full  '>
                       <div className=''>
                        <img src="circle4.svg" alt="img" />
                       </div>
                       <div>
                           <p className='font-bold mb-[14px] text-[#333333]'>Instant Confirmation Description</p>
                           <p className='text-sm text-[#999999]'>Get immediate confirmation of your payment or recharge - quick, easy, and hassle-free!</p>
                       </div>
                  </div>
            </section>

        </section>
        
  )
}

export default ProcessDetails