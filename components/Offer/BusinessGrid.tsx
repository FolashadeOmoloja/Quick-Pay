
const items = [
    {
        image:'business1.svg',
        title:'Bulk Payments',
        txt:' QuickPay facilitates seamless international transactions, helping businesses expand their reach and grow globally.'
    },
    {
        image:'business2.svg',
        title:'Remote Payroll',
        txt:" Managing remote employees' salaries and finances is effortless with QuickPay, ensuring a smooth and reliable payroll process."
    },
    {
        image:'business3.svg',
        title:'Invoicing',
        txt:' Simplify your invoicing process with QuickPay, ensuring prompt payments from your clients and customers.'
    },
    {
        image:'business4.svg',
        title:'International Payment',
        txt:' QuickPay facilitates seamless international transactions, helping businesses expand their reach and grow globally.'
    },
    {
        image:'business5.svg',
        title:'Enhanced Financial Security',
        txt:"QuickPay prioritizes your financial security, ensuring that your business's sensitive information remains protected."
    },
    {
        image:'business6.svg',
        title:'Expense Management',
        txt:"Streamline your expense tracking and control with QuickPay's efficient tools and features."
    },
]
const BusinessGrid = () => {
  return (
    <section className=" bg-[#F0F5F8] py-[42px] px-[72px] max-xmd:p-[20px] relative z-10">
         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {
                items.map((item,index)=>{
                    return(
                        <div key={index} className="text-sm col-span-1 mt-4 flex flex-col max-md:items-center max-md:text-center">
                            <div className="flex gap-2 mb-3 items-center">
                                <div><img src={item.image} alt="img" /></div>
                                <span className="text-[#333333] font-semibold">{item.title}</span>
                            </div>
                            <p className="text-[#565252]">{item.txt}</p>
                        </div>
                    )
                })
              }
         </section>
         <div className="flex max-md:justify-center w-full">
         <button className="bg-[#0045A5] text-white my-8  rounded-[40px] h-[51px] w-[157px] ">
                 Get Started
         </button>
         </div>


    </section>
  )
}

export default BusinessGrid