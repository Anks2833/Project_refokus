import React from 'react'

function Stripe({val}) {


    const {url, number} = val;

  return (
    <div className='w-[20%] px-[3vw] py-3 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex justify-between items-center mb-36'>
        <img className='w-[6vw]' src={url} alt="" />
        <span className='font-semibold'>{number}</span>
    </div>
  )
}

export default Stripe