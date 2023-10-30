import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F0F5F8] p-8 md:p-72">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1 */}
        <div className="col-span-1">
          <img src="/footerlogo.svg" alt="Footer Logo" />
          <p className="text-sm text-[#565252] mt-6">
            QuickPay is more than just a payment platform. We're here to simplify your financial journey, whether you're an individual or a business. Stay informed with our latest news, engage with us on social media, and be part of our growing community.
          </p>
          <div className="flex gap-28 mt-6">
            <img src="/facebook.svg" alt="Facebook" />
            <img src="/twitter.svg" alt="Twitter" />
            <img src="/instagram.svg" alt="Instagram" />
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-span-1">
          <span className="text-[16px] text-[#656464]">Company</span>
          <span className="text-sm text-[#565252] mt-2 cursor-pointer">Home</span>
          <span className="text-sm text-[#565252] mt-2 cursor-pointer">Features</span>
          <span className="text-sm text-[#565252] mt-2 cursor-pointer">About Us</span>
          <span className="text-sm text-[#565252] mt-2 cursor-pointer">How it works</span>
          <span className="text-sm text-[#565252] mt-2 cursor-pointer">Contact Us</span>
        </div>

        {/* Column 3 */}
        <div className="col-span-1">
          <span className="text-[16px] text-[#656464]">Support</span>
          <span className="text-sm text-[#565252] mt-2 cursor-pointer">Help/FAQ</span>
          <span className="text-sm text-[#565252] mt-2 cursor-pointer">Terms of Service</span>
          <span className="text-sm text-[#565252] mt-2 cursor-pointer">Legal</span>
          <span className="text-sm text-[#565252] mt-2 cursor-pointer">Privacy Policy</span>
        </div>

        {/* Column 4 */}
        <div className="col-span-1">
          <span className="text-[16px] text-[#656464]">Subscribe To Our Newsletter</span>
          <div className="flex mt-2">
            <input
              type="text"
              placeholder="Enter Email"
              className="w-3/4 md:w-96 h-12 p-2 bg-white text-[#565252] focus:outline-none border border-gray-300"
            />
            <button className="w-1/4 md:w-28 h-12 bg-[#0045A5] text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
