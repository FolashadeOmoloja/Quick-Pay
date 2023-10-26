

//272px

import CTAButton from "./CTAButton"
import ImageCarousel from "./ImageCarousel"
import TopStrokes from "./TopStrokes"

const CTA = () => {
  return (
    <section className='h-[500px]  bg-[#0083C7] mt-[60px]  relative w-full'>
        <section className="z-[100] relative flex p-[70px] pr-0">
              <section>
              <h3 className="text-white text-[50px] font-bold mb-[60px]">Download QuickPay App <br /> Now!!</h3>
               <CTAButton/>
              </section>
              <section className="absolute top-[-170px] w-[350px] right-[20%]">
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