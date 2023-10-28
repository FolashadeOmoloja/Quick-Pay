import React from 'react'

const button =[
    {
        img: 'apple.svg',
        text: 'Apple Store'
    },
    {
        img: 'playstore.svg',
        text: 'Google Play'
    }
]

const CTAButton = () => {
  return (
   <section className='flex gap-6 text-[#0045A5] max-sm:flex-col'>
         {
            button.map((item,index)=>{
                return     (
                <div key={index} className='flex w-[177px] h-[55px] bg-white rounded-[40px] items-center justify-center cursor-pointer'>
                     <div>
                        <img src={item.img} alt="img" />
                     </div>
                     <div className='flex flex-col'>
                      <span className='text-[12px]'>Get QuickPay on</span>
                      <span className='font-bold'>{item.text}</span>
                         
                     </div>
            </div>)
            })
         }
   </section>
  )
}

export default CTAButton