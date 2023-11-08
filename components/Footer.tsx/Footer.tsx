import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F0F5F8] p-[72px] max-xmd:p-[20px]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div className="col-span-1">
          <img src="footerlogo.svg" alt="Footer Logo" />
          <p className="text-sm text-[#565252] mt-6">
            QuickPay is more than just a payment platform. We're here to simplify your financial journey, whether you're an individual or a business. Stay informed with our latest news, engage with us on social media, and be part of our growing community.
          </p>
          <div className="flex gap-[28px] mt-6">
            <img src="facebook.svg" alt="Facebook" />
            <img src="twitter.svg" alt="Twitter" />
            <img src="instagram.svg" alt="Instagram" />
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-span-1">
           <ul>
          <li className="text-[16px] text-[#656464] font-bold">Company</li>
          <li className="text-sm text-[#565252] mt-2 cursor-pointer font-semibold hover:text-[#0045A5]"><a href='#'>Home</a></li>
          <li className="text-sm text-[#565252] mt-2 cursor-pointer font-semibold hover:text-[#0045A5]"><a href='#'>Features</a></li>
          <li className="text-sm text-[#565252] mt-2 cursor-pointer font-semibold hover:text-[#0045A5]"><a href='#'>About Us</a></li>
          <li className="text-sm text-[#565252] mt-2 cursor-pointer font-semibold hover:text-[#0045A5]"><a href='#'>How it works</a></li>
          <li className="text-sm text-[#565252] mt-2 cursor-pointer font-semibold hover:text-[#0045A5]"><a href='#'>Contact Us</a></li>
           </ul>
        </div>

        {/* Column 3 */}
        <div className="col-span-1">
           <ul>
          <li className="text-[16px] text-[#656464] font-bold">Support</li>
          <li className="text-sm text-[#565252] mt-2 cursor-pointer font-semibold hover:text-[#0045A5]"><a href='#'>Help/FAQ</a></li>
          <li className="text-sm text-[#565252] mt-2 cursor-pointer font-semibold hover:text-[#0045A5]"><a href='#'>Terms of Service</a></li>
          <li className="text-sm text-[#565252] mt-2 cursor-pointer font-semibold hover:text-[#0045A5]"><a href='#'>Legal</a></li>
          <li className="text-sm text-[#565252] mt-2 cursor-pointer font-semibold hover:text-[#0045A5]"><a href='#'>Privacy Policy</a></li>
           </ul>
        </div>

        {/* Column 4 */}
        <div className="col-span-1">
          <span className="text-[16px] text-[#656464] font-bold">Subscribe To Our Newsletter</span>
          <div className="flex mt-6 text-[12px]">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-3/4 md:w-96 h-12 p-6 bg-white text-[#565252] outline-none  rounded-l-[60px]"
            />
            <button className="w-1/4 md:w-[200px] font-bold h-12 bg-[#0045A5] text-white rounded-r-[20px] ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className='mt-[42px]  w-full h-[1px] bg-[#BFBFBF]'></div>
      <div className='w-full  flex items-center justify-center pt-[42px]'>
        <span className='text-[12px] text-[#565252]'>Copyright 2023 All right reserve QuickPay.com</span>
      </div>
    </footer>
  );
};

export default Footer;
