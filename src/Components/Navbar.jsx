import React from 'react'
import Button from './Button'

function Navbar() {
    return (
        <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-600'>

            <div className='nleft flex items-center'>

                <h1 className='font-bold underline -rotate-12 text-[1.2vw]'>reFokus</h1>

                <div className="links flex gap-14 ml-20">
                    {["Home", "Work", "Culture", "", "News"].map(((elem, index) =>

                        elem.length === 0 ? <span className='w-[1px] h-7 bg-zinc-500'></span> : (

                            <a className='text-sm flex items-center gap-1'>

                                {index === 1 && (<span style={{ boxShadow: "0 0 0.45rem #00FF19" }} className='inline-block w-1 h-1 bg-green-500 rounded-full'></span>)}

                                {elem}

                            </a>)
                    ))}
                </div>

            </div>

            <Button/>

        </div>
    )
}

export default Navbar