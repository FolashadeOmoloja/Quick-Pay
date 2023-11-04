import React from 'react'

const Floater = () => {
  return (
    <div className='relative h-[250px]'>
    <div>
        <img src="icon5.svg" alt="" className='w-[70px] absolute right-0 bottom-0 box-5'/>
        <img src="icon4.svg" alt="" className='w-[70px] absolute right-[100px] top-[50px] box-4'/>
        <img src="icon3.svg" alt="" className='w-[70px] absolute right-[250px] top-[0px] box-3'/>
        <img src="icon2.svg" alt="" className='w-[70px] absolute left-[120px] top-[50px] box-2'/>
        <img src="icon1.svg" alt="" className='w-[70px] absolute left-[20px] bottom-[-10px] box-1'/>
    </div>

</div>
  )
}

export default Floater