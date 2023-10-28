import {BsStarFill } from 'react-icons/bs'
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
  return (
    <section  className="pt-[154px] bg-white pb-[243px] px-[72px]">
       <section className="relative">
             <h3 className="text-[50px] font-bold max-sm:text-[40px] max-xmd:text-center">Our Testimonial</h3>
             <div className="w-[115px] h-[3px] bg-[#0045A5] mb-6"></div>
             <p className="text-[#565252] font-semibold mb-[50px]">What Our Users Say</p>
             <div className="flex gap-[80px] absolute right-0 top-[20px]">
                 <img src="leftbtn.svg" alt="" />
                 <img src="rightbtn.svg" alt="" />
             </div>
             <section className="flex gap-5">
                 {
                    users.map((user, index)=>{
                        const stars = [];

                        for (let i = 0; i < 5; i++) {
                            stars.push(<BsStarFill key={i} color="#FFA500" fontSize='24px' />);
                          }

                        return(
                             <div className="relative flex flex-col" key={index}>
                                  <div>
                                     <img src={user.img} alt="img" />
                                  </div>
                                  <span>{user.user}</span>
                                  <p>{user.text}</p>
                                  <div className='flex gap-4'>{stars}</div>
                             </div>
                        )
                    })
                 }
                  
           </section>
        </section>
    </section>
  )
}

export default Testimonials