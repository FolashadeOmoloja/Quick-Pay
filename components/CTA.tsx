

//272px

import Arrrows from "./Arrrows"
import CTAButton from "./CTAButton"
import ImageCarousel from "./ImageCarousel"
import TopStrokes from "./TopStrokes"

const CTA = () => {
  return (
    <section className='h-[500px]  bg-[#0083C7] mt-[60px]  relative w-full'>
        <section className="z-[100] relative flex p-[70px] pr-0">
              <section>
              <h3 className="text-white text-[50px] font-bold mb-[60px]">Download QuickPay App <br className="max-md:hidden"/> Now!!</h3>
               <CTAButton/>
              </section>
              <div className="absolute top-[55%] left-[33%] ">
              <Arrrows/>
              </div>
              <section className="absolute top-[-100px] w-[350px] right-[20%] max-md:w-[100px] max-md:top-[200px] max-md:right-[20px]">
                <img src="iPhone.svg" alt="" className="w-full" />
              </section>
        </section>

         <div className="w-full h-full absolute top-0">
         <TopStrokes/>
         </div>
         <div className="w-full h-full absolute top-0">
         <ImageCarousel/>
         </div>

    </section>
  )
}

export default CTA