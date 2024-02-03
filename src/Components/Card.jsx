import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import {motion} from "framer-motion"

function Card({ width, start, para, hover, head, desc}) {

    
    return (
        

        <motion.div whileHover={{backgroundColor: hover === "true" ? "#8F00FF" : "#000"}} className={`w-1/2 bg-zinc-800 px-5 py-8 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between transition ease-in-out`}>

            <motion.div whileHover={{ x:"5px"}} className='w-full h-full'>
                <div className='w-full flex items-center justify-between px-3'>
                    <h3>{head === "true" ? "Up Next: News" : "Get In Touch"}</h3>
                    <FaArrowRightLong />
                </div>
                <h1 className='text-3xl font-medium mt-5'>{desc === "true" ? "Insights and behind the scenes" : "Let's get to it, together."}</h1>
            </motion.div>

            <motion.div className='w-full'>
                {
                    start && (
                        <>
                            <h1 className='text-[4.5vw] font-semibold'>Start a Project</h1>
                            <button className='border border-white rounded-full px-4 py-2 mt-1'>Contact us</button>
                        </>
                    )
                }

                {
                    para && (
                        <>

                            <p className='text-sm text-zinc-500 font-medium'>Explore what drives our team</p>

                        </>
                    )
                }


            </motion.div>

        </motion.div>
    )
}

export default Card