import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Cursor from './Cursor';

function Work() {

    const [images, setImages] = useState([
        { url: "https://images.unsplash.com/photo-1668942576149-6ed5ba3c1bb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjByZW5kZXJzfGVufDB8fDB8fHww", top: "50%", left: "50%", isActive: false },
        { url: "https://images.unsplash.com/photo-1640927781187-8e6fdd944737?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fDNkJTIwcmVuZGVyc3xlbnwwfHwwfHx8MA%3D%3D", top: "56%", left: "44%", isActive: false },
        { url: "https://images.unsplash.com/photo-1647915167676-9c5c525fc07f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fDNkJTIwcmVuZGVyc3xlbnwwfHwwfHx8MA%3D%3D", top: "45%", left: "56%", isActive: false },
        { url: "https://images.unsplash.com/photo-1685695828822-0e6d8a10d5c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fDNkJTIwcmVuZGVyc3xlbnwwfHwwfHx8MA%3D%3D", top: "60%", left: "53%", isActive: false },
        { url: "https://images.unsplash.com/photo-1645526407847-52de201945f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fDNkJTIwcmVuZGVyc3xlbnwwfHwwfHx8MA%3D%3D", top: "43%", left: "40%", isActive: false },
        { url: "https://images.unsplash.com/photo-1706547661184-148ac33badcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D", top: "65%", left: "55%", isActive: false },
    ]);



    const { scrollYProgress } = useScroll();

    scrollYProgress.on("change", (data)=>{

        function imagesShow(arr){
            setImages(prev=>(
                prev.map((item, index)=>(
                   arr.indexOf(index) === -1 ?(
                    {...item, isActive: false}
                   ) : {...item, isActive: true} 
                ))
            ))
        }


        switch(Math.floor(data*100)){
            case 0:
                imagesShow([])
                break;

            case 1:
                imagesShow([0])
                break;

            case 2:
                imagesShow([0,1])
                break;

            case 3:
                imagesShow([0,1,2])
                break;

            case 4:
                imagesShow([0,1,2,3])
                break;

            case 5:
                imagesShow([0,1,2,3,4])
                break;
        }
    })


return (

    <div className='w-full mt-12'>

        <div onMouseEnter={()=>textEnter()} onMouseLeave={()=>textLeave()} className='relative max-w-screen-xl mx-auto text-center'>
            <h1 className='text-[35vw] leading-none font-medium tracking-tight select-none'>work</h1>

            <div className='absolute top-0 w-full h-full'>

                {images.map((elem, index) => (elem.isActive && (<img className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]' style={{ top: elem.top, left: elem.left }} src={elem.url} alt="no img" />))

                )}

            </div>
        </div>



    </div>
)
}

export default Work