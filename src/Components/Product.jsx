import React from 'react'
import Button from './Button'

function Product({ prodData, mover, count }) {


    const { title, description, isOn, col } = prodData;

    return (


            <div className='w-full py-5 h-[25rem] text-white'>

                <div onMouseEnter={() => { mover(count) }} className={`w-full flex justify-between items-center ${col === 1 ? "hover:bg-sky-800" : (col === 2 ? "hover:bg-violet-800" : (col === 3 ? "hover:bg-green-600" : (col === 4 ? "hover:bg-red-600" : (col === 5 && "hover:bg-zinc-900"))) ) } ${isOn === true && "p-28 bg-blue-700"} p-32 hover:py-36 transition-all`}>
                    <h1 className='font-semibold text-[3vw]'>{title}</h1>
                    <div className="dets">
                        <p className='w-[19vw] mb-7'>{description}</p>

                        <div className='flex gap-3'>
                            {prodData.live && <Button title='Live Website' />}
                            {prodData.case && <Button title='Case Study' />}
                        </div>

                    </div>
                </div>

        </div>
    )
}

export default Product