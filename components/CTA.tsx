

//272px

import CTAButton from "./CTAButton"
import ImageCarousel from "./ImageCarousel"
import TopStrokes from "./TopStrokes"

const CTA = () => {
  return (
    <section className='h-[500px] w-full bg-[#0083C7] mt-[60px] relative p-[70px]'>
        <section className="">
             <h3 className="text-white text-[50px] font-bold">Download QuickPay App <br /> Now!!</h3>
             <CTAButton/>
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