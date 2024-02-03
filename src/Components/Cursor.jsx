import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

function Cursor() {

    const [mousePos, setMousePos] = useState({
        x: 0,
        y: 0,
    })

    const [cursorVar, setCursorVar] = useState("default")


    useEffect(() => {

        const mouseMove = (e) => {
            setMousePos({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener('mousemove', mouseMove)

    }, []);

    const variants = {
        default: {
            x: mousePos.x - 16,
            y: mousePos.y - 12
        },
    }

    return (

        <motion.div
            style={{ boxShadow: "0 0 0.9rem #00FF19" }}
            variants={variants}
            animate={cursorVar}
            className='w-6 h-6 bg-[#00FF19] rounded-full fixed z-50 pointer-events-none'>

        </motion.div>
    )
}

export default Cursor