

//272px

import ImageCarousel from "./ImageCarousel"
import TopStrokes from "./TopStrokes"

const CTA = () => {
  return (
    <section className='h-[500px] w-full bg-[#0083C7] mt-[60px] relative'>
        <section>
             <h3 className="text-white">Download QuickPay App Now!!</h3>
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