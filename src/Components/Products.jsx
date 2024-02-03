import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {

    const [rect, setRect] = useState(false);


    const products = [
        { title: "Arqitel", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case: false, isOn: true},
        { title: "Cula", description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: true, case: false, isOn: false, col: 1 },
        { title: "TTR", description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live: true, case: false, isOn: false, col: 2 },
        { title: "Maniv", description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: true, case: true, isOn: false, col: 3 },
        { title: "YIR 2022", description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.", live: true, case: true, isOn: false, col: 4 },
        { title: "Yahoo!", description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", live: true, case: true, isOn: false, col: 5 },
    ]

    const [pos, setPos] = useState(0)


    const mover = (val) => {
        setPos(val * 25)
    }


    return (
        <div className='relative mt-32'>
            {products.map((elem, index) => (
                <Product prodData={elem} mover={mover} count={index} key={index}/>
            ))}

            <div className={`w-full h-full  absolute top-0 pointer-events-none`}>
                <motion.div
                    initial={{ y: pos, x: "-50%" }}
                    animate={{ y: pos + `rem` }}
                    className={`w-[32rem] h-[25rem] bg-zinc-700 absolute left-[44%] overflow-hidden`}>

                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className={`w-full h-full`}>
                        <img className='w-full h-full' src="https://i.gifer.com/J4o.gif" alt="no-img" />
                    </motion.div>

                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className='w-full h-full bg-sky-600'>
                        <img className='w-full h-full' src="https://i.pinimg.com/originals/36/e4/d0/36e4d0b856694fc471344b644a1dd6e4.gif" alt="no-img" />
                    </motion.div>

                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className='w-full h-full bg-sky-800'>
                        <img className='w-full h-full' src="https://media2.giphy.com/media/QpVUMRUJGokfqXyfa1/giphy.gif" alt="no-img" />
                    </motion.div>

                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className='w-full h-full bg-green-400'>
                        <img className='w-full h-full' src="https://i.gifer.com/VJi.gif" alt="no-img" />
                    </motion.div>

                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className='w-full h-full bg-yellow-700'>
                        <img className='w-full h-full' src="https://i.pinimg.com/originals/5a/64/63/5a6463e51b284bfcbc34869dc72cf0cd.gif" alt="no-img" />
                    </motion.div>

                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className='w-full h-full bg-red-800'>
                        <img className='w-full h-full' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/212b34104893379.5f6cc87656bf0.gif" alt="no-img" />
                    </motion.div>

                </motion.div>
            </div>
        </div>
    )
}

export default Products