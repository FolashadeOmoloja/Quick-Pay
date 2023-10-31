

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
    <section className="py-[154px] bg-white px-[72px] max-sm:p-[72px] max-xmd:p-[20px]">
          <section className='flex'>
               <div>
                    <img src="about-us.svg" alt="img" />
               </div>
               <div>
               <  h3 className="text-[50px] text-[#333333] max-md:text-[30px] font-bold max-sm:text-[40px] max-sm:text-center basis-1/2">About Us</h3>
                  <div className="w-[115px] h-[3px] bg-[#0045A5] mb-6 max-sm:mx-auto"></div>
                   <p className="text-[#565252] text-xl font-semibold mb-[52px] max-sm:text-center">Empowering Your Financial Freedom</p>
                   <p className='text-[#323031] '>At QuickPay, we're driven by a singular mission: to make life easier. We believe in the power of simple, secure, and convenient solutions that empower you to live life to the fullest. With innovation at our core, we're committed to simplifying the everyday and enhancing your experience.</p>
                   <button className="bg-[#0045A5] text-white mt-8 rounded-[40px] h-[51px] w-[157px] ">
                   Learn more
                  </button>
               </div>
          </section>
          <section className='mt-[64px] flex'>
                     {

                     }
          </section>
    </section>
  )
}

export default AboutUs