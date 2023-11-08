import React from 'react'
import Arrrows from '../CTA/Arrrows'
import CTAButton from '../CTA/CTAButton'
import HeaderTitle from './HeaderTitle'
import Floaters from './Floaters'

const SecondSlide = () => {
  return (
    <section className='h-[830px]  max-md:h-[900px] max-xxsm:h-[950px] bg-headergradient  relative '>
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
              <section className="absolute right-0 max-xl:static max-lg:w-[500px] max-sm:w-[300px] max-lg:mt-8 max-lg:mb-6">
                  <div className='relative w-[600px] h-[600px] max-xslg:w-[500px] max-sm:w-[300px]'> 
                  <img src="shadow.svg" alt=""  className='w-full absolute top-0 handShadow'/>
                  <img src="handphone.svg" alt="" className="w-[94%] max-xslg:left-[30px]  absolute left-[35px] top-[34px]" />
                   <Floaters/>
                  <div className='relative'>
                    <button className='w-[150px] h-[54px] max-xslg:w-[120px] max-xslg:h-[44px] bg-[#0045A5] relative rounded-[40px] top-[0px] left-[255px] max-xslg:left-[215px]  max-xslg:top-[-70px]'>
                          <img src="recharge.svg" alt=""  className=' rechargebtn headerBtnImg' />
                          <img src="subscribe.svg" alt=""  className=' subscribebtn headerBtnImg' />
                          
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