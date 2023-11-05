import React from 'react'
import Floater from './Floater'
import Floater2 from './Floater2'

const Floaters = () => {
  return (
    <div className='relative h-[500px] w-full'>
        <div className='absolute w-full top-0'>
        <Floater/>
        </div>
        <div className='relative top-0'>
        <Floater2/>
        </div>



    </div>
  )
}

export default Floaters