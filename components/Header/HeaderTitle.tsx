import { useEffect, useState } from 'react'

const HeaderTitle = () => {
    const [firstTitle, setFirstTitle] = useState(true);
    const [secondTitle, setSecondTitle] = useState(false);
  
    const showTitle = () => {
      setFirstTitle(!firstTitle);
      setSecondTitle(!secondTitle);
    };
  
    useEffect(() => {
      const interval = setInterval(showTitle, 5000); // Toggle titles every 5 seconds
  
      // Clean up the interval when the component unmounts
      return () => {
        clearInterval(interval);
      };
    }, [firstTitle, secondTitle]);
  return (
    <section className='max-lg:text-center'>
           {
            firstTitle &&  <div className=''>
            <h3 className=" text-[72px] font-bold mb-6 underline decoration-1 max-slg:text-[60px] max-sm:text-[40px] ">Instant Recharge</h3>
            <p className="lg:mb-[60px] mb-8 text-lg">Top up your mobile airtime instantly, anytime, anywhere. Stay connected effortlessly</p>
        </div>
           }
           {
            secondTitle &&   <div className=''>
            <h3 className=" text-[72px] font-bold mb-6 underline decoration-1 max-slg:text-[60px] max-sm:text-[40px]">Subscribe Easily</h3>
            <p className="lg:mb-[60px] mb-8 text-lg">Unlock the Benefits of Hassle-free Subscriptions. Join QuickPay Today</p>
         </div>
           }
    </section>
  )
}

export default HeaderTitle