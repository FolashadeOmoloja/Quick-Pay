import Business from "./Business"
import Companies from "./Companies"
import Info from "./Info"

const offers = [
    {
        image: 'offer1.svg',
        image2:'offer5.svg',
        title:'Pay Bills Effortlessly',
        text:'Simplify bill payments with QuickPay’s intuitive platform',
        button:'Pay Now'
    },
    {
        image: 'offer2.svg',
        image2:'offer6.svg',
        title:'Instant Recharges',
        text:'Top-Up your airtime in a flash, anytime, anywhere',
        button:'Recharge Now'
    },
    {
        image: 'offer3.svg',
        image2:'offer7.svg',
        title:'Subscription Service',
        text:'Effortlessly subscribe to your favorite services',
        button:'Access Now'
    },
    {
        image: 'offer4.svg',
        image2:'offer8.svg',
        title:'Secure & Convenient',
        text:'Trustworthy transactions at your fingertips',
        button:'Get Started'
    },
]

const Offer = () => {
  return (
    <section id="features"  className='pt-[100px] bg-white px-[72px] max-sm:p-[72px] max-xmd:p-[20px]  relative'>
            <section className='text-center mb-[52px] '>
                  <h3 className="text-[50px] text-[#333333] max-md:text-[30px] font-bold max-sm:text-[40px]">What We Offer</h3>
                  <div className="w-[115px] h-[3px] bg-[#0045A5] mb-6 mx-auto"></div>
                   <p className="text-[#565252] font-semibold ">Experience the QuickPay Advantage</p>
            </section>
            <section className="flex gap-5 max-xlg:flex-wrap max-xlg:justify-center">
                 {
                    offers.map((offer,index)=>{
                        return(
                            <div key={index} className="flex flex-col rounded-[20px] border border-[#0083C7] h-[380px] w-[300px] pt-[42px] pb-5 px-[22px] items-center offer-div hover:bg-[#0045A5]">
                                     <div className="offer-img">
                                        <img src={offer.image} alt="offer" />
                                     </div>
                                     <div className="offer-img2 hidden">
                                        <img src={offer.image2} alt="offer" />
                                     </div>
                                     <span className="text-xl offer-text text-[#333333] font-semibold mt-[42px] mb-[14px]">{offer.title}</span>
                                     <p className="text-[#999999] offer-text mb-[40px] text-center">{offer.text}</p>
                                     <button className="bg-[#0045A5] offer-button font-semibold text-white rounded-[40px] h-[51px] w-full">{offer.button}</button>
                            </div>
                        )
                    })
                 }
            </section>
            <Companies/>
            <Info/>
            <Business/>
    </section>
  )
}

export default Offer