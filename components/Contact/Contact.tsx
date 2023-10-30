import ContactForm from "./ContactForm"


const contact = () => {
  return (
    <section className='pt-[250px]   max-sm:p-[72px] max-xmd:p-[20px] max-xmd:pb-[70px] '>
      <section className="bg-[url('/contactbg.svg')] bg-cover flex gap-[145px] pb-[250px] px-[72px] ">
               <section>
                   <h3 className="text-[50px] text-[#333333] max-md:text-[30px] font-bold max-sm:text-[40px] max-sm:text-center">Contact Us</h3>
                   <div className="w-[115px] h-[3px] bg-[#0045A5] mb-6 max-sm:mx-auto"></div>
                   <p className="text-[#565252] font-semibold mb-[52px] max-sm:text-center">Got Questions? Let's Talk</p>
                    <div className="flex flex-col gap-8">
                    <div className="flex gap-[13px] text-[#565252] text-sm  ">
                             <div><img src="email.svg" alt="img" /></div>
                             <div className="flex-col flex gap-1">
                                <span className="font-bold">Email Address</span>
                                <span>Jodanrovel@gmail.com</span>
                             </div>
                         </div>
                         <div className="flex gap-[13px] text-[#565252] text-sm  ">
                             <div><img src="phone.svg" alt="img" /></div>
                             <div className="flex-col flex gap-1">
                                <span className="font-bold">Call Us</span>
                                <span>(505) 555-0125m</span>
                             </div>
                         </div>
                         <div className="flex gap-[13px] text-[#565252] text-sm  ">
                             <div><img src="location.svg" alt="img" /></div>
                             <div className="flex-col flex gap-1">
                                <span className="font-bold">Address</span>
                                <span>2972 Westheimer Rd. <br /> Santa  Ana, Illinois 85486 </span>
                             </div>
                         </div>
                    </div>
               </section>
               <ContactForm/>
      </section>
</section>
  )
}

export default contact