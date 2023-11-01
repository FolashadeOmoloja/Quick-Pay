import React from 'react'



interface IButton {
    img: string;
    text: string;
    title: string;
  }
  
  interface Iprops {
    button?: IButton[];
  }
  
  const CTAButton: React.FC<Iprops> = ({
    button = [
      {
        img: 'apple.svg',
        text: 'Apple Store',
        title: 'Get QuickPay on'
      },
      {
        img: 'playstore.svg',
        text: 'Google Play',
        title: 'Get QuickPay on'
      },
    ],

  }) => {
    return (
      <section className='flex gap-6 text-[#0045A5] max-sm:flex-col'>
        {button.map((item, index) => {
          return (
            <div
              key={index}
              className='flex w-[177px] h-[55px] bg-white rounded-[40px] items-center justify-center cursor-pointer'
            >
              <div>
                <img src={item.img} alt="" />
              </div>
              <div className='flex flex-col'>
                <span className='text-[12px]'>{item.title}</span>
                <span className='font-bold'>{item.text}</span>
              </div>
            </div>
          );
        })}
      </section>
    );
  };
  
  export default CTAButton;
  