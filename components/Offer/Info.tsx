const images = [
    {
        img:'info-img1.svg',
        text:'Recharge Your Phone'
    },
    {
        img:'info-img2.svg',
        text:'Pay Electicity Bill'
    },
    {
        img:'info-img3.svg',
        text:'Subscribe Your Cable'
    },
    {
        img:'info-img4.svg',
        text:'Pay Water Bill'
    },
    {
        img:'info-img5.svg',
        text:'Recharge Landline'
    },
]

const Info = () => {
  return (
    <section className='flex gap-8 mt-[150px] max-xlg:mt-[50px] max-xlg:flex-col max-xlg:items-center max-xlg:text-center'>
         <section className=''>
                <img src="info-img.svg" alt="" />
         </section>
         <section className='basis-1/2'>
             <h3 className="text-[50px] text-[#333333] max-md:text-[30px] font-bold ">Who Is QuickPay For?</h3>
              <div className="w-[115px] h-[3px] bg-[#0045A5] mb-6 max-xlg:mx-auto"></div>
             <p className="text-[#565252] font-semibold mb-[52px] max-sm:text-center">QuickPay is for everyone</p>
             <p className="text-[#333333] text-xl font-bold mb-[12px] max-sm:text-center">Individuals And Organization</p>
             <p className='text-[#999999] '>QuickPay doesn't just serve businesses – it's equally well-suited for individuals and organizations. If you're looking for a hassle-free way to manage your financial responsibilities, QuickPay has you covered.</p>
             <p className='mt-8 text-[#0083C7] text-xl font-bold'>Recharge and pay bills with QuickPay</p>
             <section className="pt-[32px] px-[25px] bg-[#F0F5F8] mt-6">
                 <div className="flex gap-5 max-xlg:flex-wrap max-xxsm:justify-center max-xxsm:flex-col">
                     {
                        images.map((items,index)=>{
                            return(
                                <div key={index}>
                                    <div className="mb-2 flex max-xxsm:justify-center"><img src={items.img} alt={`${items.img}`} /></div>
                                    <p className="text-[12px] text-[#565252]">{items.text}</p>
                                </div>
                            )
                        })
                     }
                 </div>
                 <button className="bg-[#0045A5] text-white my-8  rounded-[40px] h-[51px] w-[157px] ">
                 Get Started
                </button>

             </section>

         </section>
    </section>
  )
}

export default Info