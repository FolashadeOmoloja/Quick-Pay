"use client"
import React, { useState } from 'react'
import {RiRefreshLine} from 'react-icons/ri'



const ContactButton = () => {
    const [message, setMessage] = useState('');
    const [load, setLoad] = useState(true)
    const [messageSent, setMessageSent] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
  
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setMessage('');
        setMessageSent(true);
        setButtonDisabled(true);  
        setLoad(true)
        setTimeout(() => {
          setLoad(false);
        }, 1000);
        setTimeout(() => {
            setMessageSent(false);
            setButtonDisabled(false)
          }, 2000);
        
      };
      
  return (
     <div>
          <div className="flex flex-col gap-3 text-sm mt-8" >
          <label className="text-[#3A3A3A] font-semibold">Message</label>
          <textarea  
          placeholder="I need  something..." 
          className="text-[#999999] w-full h-[90px] py-3 px-[18px] border border-[#796E6E] rounded-[4px] outline-none focus:border-[#0045A5] focus:border-2 resize-none"
          value={message}
          name='message'
          onChange={(e) => setMessage(e.target.value)}
          />
        </div>
          <button className="bg-[#0045A5] text-white mt-9 rounded-[40px] h-[51px] w-[157px] "
          onClick={handleClick}
          disabled={buttonDisabled}
          >
              {messageSent ? (
                load ? (
                  <span className='flex justify-center text-[25px] spinner'>
                    <RiRefreshLine />
                  </span>
                ) : (
                  <span className='text-white'>Sent &#10004;</span>
                )
              ) : (
                'Send'
              )}
       </button>
     </div>
  )
}

export default ContactButton