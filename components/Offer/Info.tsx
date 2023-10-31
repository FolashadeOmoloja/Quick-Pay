import React from 'react'

const Info = () => {
  return (
    <section className='flex gap-8 mt-[150px] '>
         <section>
                <img src="info-img.svg" alt="" />
         </section>
         <section>
             <h3 className="text-[50px] text-[#333333] max-md:text-[30px] font-bold max-sm:text-[40px] max-sm:text-center">Who Is QuickPay For?</h3>
              <div className="w-[115px] h-[3px] bg-[#0045A5] mb-6 max-sm:mx-auto"></div>
             <p className="text-[#565252] font-semibold mb-[52px] max-sm:text-center">QuickPay is for everyone</p>
             <p className="text-[#565252] text-xl font-semibold mb-[12px] max-sm:text-center">Individuals And Organization</p>
             <p className='text-[#323031] '>QuickPay doesn't just serve businesses – it's equally well-suited for individuals and organizations. If you're looking for a hassle-free way to manage your financial responsibilities, QuickPay has you covered.</p>
         </section>
    </section>
  )
}

export default Info