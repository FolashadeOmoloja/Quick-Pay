

const content = [
    {
        heading: 'Mission',
        text:'To simplify financial transactions, empower businesses, and connect people seamlessly through our secure and innovative platform.'
    },
    {
        heading: 'Vision',
        text:'A world where financial management is easy, accessible, and enhances the daily lives of our users.'
    },
    {
        heading: 'Value',
        text:'Reliability, Innovation, Accessibility, and User-Centricity'
    },
]


const AboutUs = () => {
  return (
    <section id="about-us" className="py-[154px] bg-white px-[72px] max-sm:p-[72px] max-xmd:p-[20px] max-xmd:pb-[50px] relative">
        <section className="flex absolute top-0 left-[22px] gap-4 max-xmd:left-0 max-xsm:top-[-100px]">
            <img src="cta-stroke1.svg" alt=""  className="max-xmd:hidden"/>
            <img src="cta-stroke3.svg" alt="" className="max-xsm:hidden"/>
            <img src="cta-stroke3.svg" alt="" />
        </section>
          <section className='flex gap-10 max-lg:flex-col relative z-10'>
               <div className="">
                    <img src="about-us.svg" alt="img" className="h-full w-full"/>
               </div>
               <div className="basis-1/2 flex flex-col  max-lg:items-center max-lg:text-center">
               <  h3 className="text-[50px] text-[#333333] max-md:text-[30px] font-bold  max-sm:text-center">About Us</h3>
                  <div className="w-[115px] h-[3px] bg-[#0045A5] mb-6 max-sm:mx-auto"></div>
                   <p className="text-[#565252] text-xl font-semibold mb-[12px] max-sm:text-center">Empowering Your Financial Freedom</p>
                   <p className='text-[#323031] '>At QuickPay, we're driven by a singular mission: to make life easier. We believe in the power of simple, secure, and convenient solutions that empower you to live life to the fullest. With innovation at our core, we're committed to simplifying the everyday and enhancing your experience.</p>
                   <button className="bg-[#0045A5] text-white mt-8 rounded-[40px] h-[51px] w-[157px] ">
                   Learn more
                  </button>
               </div>
          </section>
          <section className='mt-[64px] grid grid-cols-1 lg:grid-cols-3 gap-6'>
                     {
                         content.map((item,index)=>{
                            return(
                                <div key={index} className="h-[185px] flex col-span-1 box-shadow lg:min-w-full relative z-10">
                                     <div className="bg-[#0045A5] h-full min-w-[20px]">

                                     </div>
                                     <div className="p-[28px] max-xsm:p-5 bg-white ">
                                        <span className="text-[#211D1F] text-xl font-semibold ">{item.heading}</span>
                                        <p className="text-[#323031] text-sm mt-2">{item.text}</p>
                                     </div>
                                </div>
                            )
                         })
                     }
          </section>
    </section>
  )
}

export default AboutUs