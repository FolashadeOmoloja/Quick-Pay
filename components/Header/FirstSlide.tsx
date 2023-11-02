import Arrrows from "../CTA/Arrrows"
import CTAButton from "../CTA/CTAButton"
import ImageCarousel from "../CTA/ImageCarousel"
import TopStrokes from "../CTA/TopStrokes"


const FirstSlide = () => {
  return (
    <section className='h-[830px]  bg-[#0083C7]  relative w-full'>
        <section className="z-[100] relative flex  p-[72px]  pr-0 max-xmd:p-[20px] items-center max-xsm:justify-center h-full">
              <section className="flex flex-col text-white max-xmd:justify-center max-xmd:items-center">
                <span className="text-[32px] mb-1">Simplifying Your Life</span>
              <h3 className=" text-[72px] font-bold mb-6 underline decoration-1 max-sm:text-[40px] max-xmd:text-center">Pay Bills with Ease!</h3>
              <p className="mb-[60px]">Say goodbye to the hassle of paying bills. Our platform makes it quick and painless</p>
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
              <div className="absolute top-[55%] left-[33%] max-slg:top-[55%]  max-md:hidden ">
              <Arrrows/>
              </div>
              <section className="absolute right-0">
                <img src="header-first.svg" alt="" className="w-full" />
              </section>
        </section>
         <div className=" absolute left-[50%] bottom-[42px] flex gap-4">
               <div className="w-[25px] h-[25px] rounded-full bg-white"></div>
               <div  className="w-[25px] h-[25px] rounded-full bg-[#073270]"></div>
            </div>
         <div className=" absolute top-[192px] left-[40%]">
             <img src="stroke-4.svg" alt="" />
         </div> 
         <div className="w-full h-full absolute top-0 ">
         <ImageCarousel/>
         </div> 

    </section>
  )
}

export default FirstSlide