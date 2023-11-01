'use client'
import {BsStarFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
const users = [
{
    img: 'user1.svg',
    user: 'John Doe',
    text: '"QuickPay has truly revolutionized how I manage my finances. With the ability to pay utility bills and recharge my phone credit in just a few clicks, my daily life has become remarkably convenient.”'

},
{
    img: 'user2.svg',
    user: 'Jane Smith',
    text: `"QuickPay is the ultimate solution for anyone who values efficiency. The platform's secure and straightforward approach to bill payments and airtime recharges has transformed the way I handle my everyday expenses.”`

},
{
    img: 'user3.svg',
    user: 'Alogbe Rachael',
    text: `"I have full trust in QuickPay for all my payment needs. It's more than just a convenient tool; it's a reliable companion in my financial journey. The peace of mind knowing my transactions are secure is the icing on the cake.”`
}

]



const Testimonials = () => {
    const [view, changeView] = useState(false)
    const [transitionClass, setTransitionClass] = useState('opacity-1 ease');
    const handleClick = () => {
        setTransitionClass("opacity-0");
        setTimeout(() => {
          setTransitionClass("opacity-1");
        }, 150); 
    
        changeView(!view);
      };

  return (
    <section  className="pt-[154px] bg-white pb-[100px] px-[72px] max-sm:p-[72px] max-xmd:p-[20px]">
       <section className="relative">
             <h3 className="text-[50px] text-[#333333] max-md:text-[30px] font-bold  max-sm:text-center">Our Testimonial</h3>
             <div className="w-[115px] h-[3px] bg-[#0045A5] mb-6 max-sm:mx-auto"></div>
             <p className="text-[#565252] font-semibold mb-[52px] max-sm:text-center">What Our Users Say</p>
             <div className="flex gap-[80px] absolute right-0 top-[20px] max-sm:static max-sm:mb-7 ">
                 <img src="leftbtn.svg" alt=""  className='cursor-pointer w-full max-md:w-[30px] max-sm:mx-auto' onClick={handleClick}/>
                 <img src="rightbtn.svg" alt="" className='cursor-pointer w-full max-md:w-[30px] max-sm:mx-auto' onClick={handleClick}/>
             </div>
              <section className={`flex gap-5  max-xlg:overflow-x-scroll h-[590px] items-center  ${view?'flex-row-reverse':''}  transition ${transitionClass}`}>
                 {users.map((user, index) => {
                   const stars = [];
             
                   for (let i = 0; i < 5; i++) {
                     stars.push(<BsStarFill key={i} color="#FFA500" fontSize="24px" />);
                   }
             
                   return (
                     <div
                       className="relative flex flex-col text-center items-center p-6 pt-8 bg-[#F0F5F8] rounded-[20px] min-w-[350px] h-[428px] justify-between" 
                       key={index}
                     >
                       <div className="mt-[-110px] max-h-[200px] w-[140px] h-[140px]">
                         <img
                           src={user.img}
                           alt="img"
                           className="max-h-[200px]" 
                         />
                       </div>
                       <span className="mt-5 font-bold">{user.user}</span>
                       <p className="text-[#656464] leading-[2]">{user.text}</p>
                       <div className="flex gap-4 mb-[52px]">{stars}</div>
                     </div>
                   );
                 })}
             </section>
                  {/* */}

              </section>
        </section>
  )
}

export default Testimonials