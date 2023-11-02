import React from 'react'
import Arrrows from '../CTA/Arrrows'
import CTAButton from '../CTA/CTAButton'

const SecondSlide = () => {
  return (
    <section className='h-[830px]  max-md:h-[900px] max-xxsm:h-[950px] bg-headergradient  relative w-full'>
        <section className="z-[100] relative flex max-lg:flex-col  p-[72px]  lg:pr-0 max-xmd:p-[20px] items-center max-lg:justify-center h-full">
              <section className="flex flex-col text-white max-lg:justify-center max-lg:items-center max-md:text-center">
                <span className="text-[32px] max-sm:text-[24px] mb-1">Simplifying Your Life</span>
              <div>
              <h3 className=" text-[72px] font-bold mb-6 underline decoration-1 max-slg:text-[60px] max-sm:text-[40px] ">Instant Recharge</h3>
              <p className="lg:mb-[60px] mb-8">Top up your mobile airtime instantly, anytime, anywhere. Stay connected effortlessly</p>
              </div>
              <div className='hidden'>
              <h3 className=" text-[72px] font-bold mb-6 underline decoration-1 max-slg:text-[60px] max-sm:text-[40px]">Subscribe Easily</h3>
              <p className="lg:mb-[60px] mb-8">Top up your mobile airtime instantly, anytime, anywhere. Stay connected effortlessly</p>
              </div>

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
                <img src="header-first.svg" alt="" className="w-full" />
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