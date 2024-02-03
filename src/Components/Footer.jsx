import React from 'react'

function Footer() {
  return (

    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-10'>
            <div className='basis-1/2'>
                <h1 className='text-[10vw] font-semibold tracking-tight'>refokus.</h1>
            </div>

            <div className='basis-1/2 flex'>
                <div className='flex flex-col gap-2 basis-1/3'>
                    <h4 className='mb-4 text-zinc-500'>Socials</h4>
                    {["Instagram", "Twitter (X?)", "LinkedIn"].map((item, index) => <a className='text-zinc-500'>{item}</a>)}
                </div>

                <div className='flex flex-col gap-2 basis-1/3'>
                    <h4 className='mb-4 text-zinc-500'>Sitemap</h4>
                    {["Home", "Work", "Careers", "Contact"].map((item, index) => <a className='text-zinc-500'>{item}</a>)}
                </div>

                <div className='basis-1/3'>
                    <p className='mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quae quo dicta sunt consequatur odio.</p>
                    <div className='bg-blue-800 flex justify-between items-center px-5 py-3 rounded-lg'>
                        <img className='w-[1.5vw]' src="https://www.svgrepo.com/show/475656/google-color.svg" alt="" />
                        <h1>Enterprise Partner</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer