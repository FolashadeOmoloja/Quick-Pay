const users = [
{
    img: 'user1',
    user: 'John Doe',
    text: '"QuickPay has truly revolutionized how I manage my finances. With the ability to pay utility bills and recharge my phone credit in just a few clicks, my daily life has become remarkably convenient.”'

}
]

// const stars = [];

// for (let i = 0; i < 5; i++) {
//   if (i < integerPart) {
//     stars.push(<BsStarFill key={i} color="#29AFFD" fontSize='14px' />);
//   } else if (i === integerPart && decimalPart >= 0.3 && decimalPart <= 0.7) {
//     stars.push(<BsStarHalf key={i} color="#29AFFD" fontSize='14px' />);
//   } else {
//     stars.push(<BsStar key={i} color="#29AFFD" fontSize='14px' />);
//   }
// }

const Testimonials = () => {
  return (
    <section  className="pt-[154px] bg-white pb-[243px] px-[72px]">
      <h3 className="text-[50px] font-bold max-sm:text-[40px] max-xmd:text-center">Our Testimonial</h3>
      <div className="w-[115px] h-[3px] bg-[#0045A5] mb-6"></div>
      <p className="text-[#565252] font-semibold mb-[50px]">What Our Users Say</p>
      <section className="flex gap-5">
        

      </section>
    </section>
  )
}

export default Testimonials