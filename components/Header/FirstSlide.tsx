import Arrrows from "../CTA/Arrrows"
import CTAButton from "../CTA/CTAButton"
import ImageCarousel from "../CTA/ImageCarousel"
import TopStrokes from "../CTA/TopStrokes"


const FirstSlide = () => {
  return (
    <section className='h-[800px]  bg-[#0083C7]  relative w-full'>
        <section className="z-[100] relative flex p-[72px] lg:pt-[297px] pr-0 max-xmd:p-[20px] max-xsm:items-center max-xsm:justify-center h-full">
              <section className="max-xmd:flex max-xmd:flex-col justify-center items-center">
              <h3 className="text-white text-[50px] font-bold mb-[60px] max-sm:text-[40px] max-xmd:text-center">Download QuickPay App <br className="max-md:hidden"/> Now!!</h3>
               <CTAButton/>
              </section>
              <div className="absolute top-[55%] left-[33%] max-slg:top-[55%]  max-md:hidden ">
              <Arrrows/>
              </div>
              {/* <section className="iphone-cta">
                <img src="iPhone.svg" alt="" className="w-full" />
              </section> */}
        </section>
         <div className="w-full h-[500px] absolute top-0">
         <ImageCarousel/>
         </div>

    </section>
  )
}

export default FirstSlide