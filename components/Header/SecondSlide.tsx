import React from 'react'
import Arrrows from '../CTA/Arrrows'
import CTAButton from '../CTA/CTAButton'
import HeaderTitle from './HeaderTitle'
import Floater from './Floater'
import Floater2 from './Floater2'
import Floaters from './Floaters'

const SecondSlide = () => {
  return (
    <section className='h-[830px]  max-md:h-[900px] max-xxsm:h-[950px] bg-headergradient  relative w-full'>
        <section className="z-[100] relative flex max-lg:flex-col  p-[72px]  lg:pr-0 max-xmd:p-[20px] items-center max-lg:justify-center h-full">
              <section className="flex flex-col text-white max-lg:justify-center max-lg:items-center max-md:text-center">
                <span className="text-[32px] max-sm:text-[24px] mb-1">Simplifying Your Life</span>
                 <HeaderTitle/>

               <CTAButton button={[
                      {
                        img: '',
                        text: 'Get Started',
                        title:''
                      },
                      {
                        img: 'playstore.svg',
                        text: 'Google Play',
                        title: 'Get QuickPay on'
                      },
              ]} />
              </section>
              <div className="absolute top-[55%] left-[33%] max-xl:top-[70%]  max-lg:hidden ">
              <Arrrows/>
              </div>
              <section className="absolute right-0 max-xl:static max-lg:w-[400px] max-sm:w-[300px] max-lg:mt-8 max-lg:mb-6">
                  <div className='relative w-[600px] h-[600px] max-lg:w-[400px] max-sm:w-[300px]'>
                  <img src="shadow.svg" alt=""  className='w-full absolute top-0 handShadow'/>
                  <img src="handphone.svg" alt="" className="w-[95%] absolute left-[35px] top-[34px]" />
                   <Floaters/>
                  <div className='relative'>
                    <button className='w-[150px] h-[54px] bg-[#0045A5] relative rounded-[40px] top-[470px] left-[255px] '>
                          <img src="recharge.svg" alt=""  className=' rechargebtn absolute left-[20px] bottom-[10px]' />
                          <img src="subscribe.svg" alt=""  className=' subscribebtn absolute left-[20px] bottom-[10px]' />
                          
                    </button>
                  </div>
                  </div>
              </section>



        </section>
         <div className=" absolute left-[50%] max-slg:left-[45%] bottom-[42px] flex gap-4">
               <div className="w-[25px] h-[25px] rounded-full bg-[#073270]"></div>
               <div  className="w-[25px] h-[25px] rounded-full bg-white "></div>
            </div>

    </section>
  )
}

export default SecondSlide