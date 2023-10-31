const imageSlide1 = [
    'company1.svg',
    'company2.svg',
    'company3.svg',
    'company4.svg',
    'company5.svg'
]
const imageSlide2 = [
    'company6.svg',
    'company7.svg',
    'company8.svg',
    'company9.svg',
    'company10.svg'
]

const imageSlide3 = [
    'company11.svg',
    'company12.svg',
    'company13.svg',
    'company14.svg',
    'company15.svg'
]



const Companies = () => {
  return (
    <section className="mt-[100px] max-xsm:mt-[50px]"> 
         <p className="text-center max-sm:text-base max-xsm:text-sm text-[#0083C7] mt-8 text-[24px] font-bold">500M+ Companies and Individual simplify their payment with QuickPay</p>
         <section className="flex flex-col items-center justify-center mt-8 max-md:mt-0 max-md:h-[40px] relative h-24 z-10">
             <section className="company1 flex absolute gap-8 items-center max-sm:gap-4 max-xxsm:gap-0  max-w-[1008px] overflow-x-scroll ">
                 {
                      imageSlide1.map((item,index)=>{
                        return (
                            <div key={index} className="relative z-10">
                                <img src={item} alt={item} />
                            </div>
                        )
                      })
                 }
             </section>
             <section className="company2 absolute flex gap-8 items-center max-sm:gap-4 max-xxsm:gap-0  max-w-[1008px]  overflow-x-scroll ">
                 {
                      imageSlide2.map((item,index)=>{
                        return (
                            <div key={index} className="relative z-10">
                                <img src={item} alt={item} />
                            </div>
                        )
                      })
                 }
             </section>
             <section className="company3 absolute flex gap-8 items-center max-sm:gap-4 max-xxsm:gap-0  max-w-[1008px] overflow-x-scroll ">
                 {
                      imageSlide3.map((item,index)=>{
                        return (
                            <div key={index} className="relative z-10">
                                <img src={item} alt={item} />
                            </div>
                        )
                      })
                 }
             </section>
         </section>

    </section>
  )
}

export default Companies