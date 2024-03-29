import { motion } from "framer-motion"
import React from 'react'


function Marquee({ imagesurls, direction }) {
    return (

        <div className='w-full flex overflow-hidden'>

            <motion.div
                initial={{ x: direction==="left" ? "0" : "-100%" }}
                animate={{ x: direction==="left" ? "-100%" : "0%" }}
                transition={{ ease: "linear", duration: 15, repeat: Infinity}}
                className='flex flex-shrink-0 gap-28 pr-28'>{imagesurls.map(url => <img src={url} className='w-[7vw]' />)}
            </motion.div>

            <motion.div
                initial={{ x: direction==="left" ? "0" : "-100%" }}
                animate={{ x: direction==="left" ? "-100%" : "0%" }}
                transition={{ ease: "linear", duration: 15, repeat: Infinity}}
                className='flex flex-shrink-0 gap-28 pr-28'>{imagesurls.map(url => <img src={url} className='w-[7vw]' />)}
            </motion.div>

        </div>
    )
}

export default Marquee