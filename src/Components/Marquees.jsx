import React from 'react'
import Marquee from './Marquee'

function Marquees() {

    const images = [
        [
            "https://www.svgrepo.com/show/303141/spotify-1-logo.svg",
            "https://www.svgrepo.com/show/303183/google-2015-logo.svg",
            "https://www.svgrepo.com/show/303143/microsoft-logo.svg",
            "https://www.svgrepo.com/show/303196/netflix-2-logo.svg",
            "https://www.svgrepo.com/show/303257/paypal-logo.svg",
            "https://www.svgrepo.com/show/303264/amazon-2-logo.svg",
            "https://www.svgrepo.com/show/353825/google-pay.svg",
            "https://www.svgrepo.com/show/328108/mastercard.svg",
            "https://www.svgrepo.com/show/376356/aws.svg",
            "https://www.svgrepo.com/show/353698/ember.svg",
            "https://www.svgrepo.com/show/353398/angular.svg"
        ],

        [
            "https://www.svgrepo.com/show/303141/spotify-1-logo.svg",
            "https://www.svgrepo.com/show/303183/google-2015-logo.svg",
            "https://www.svgrepo.com/show/303143/microsoft-logo.svg",
            "https://www.svgrepo.com/show/303196/netflix-2-logo.svg",
            "https://www.svgrepo.com/show/303257/paypal-logo.svg",
            "https://www.svgrepo.com/show/303264/amazon-2-logo.svg",
            "https://www.svgrepo.com/show/353825/google-pay.svg",
            "https://www.svgrepo.com/show/328108/mastercard.svg",
            "https://www.svgrepo.com/show/376356/aws.svg",
            "https://www.svgrepo.com/show/353698/ember.svg",
            "https://www.svgrepo.com/show/353398/angular.svg"
        ]

    ]

    return (

        <div className='relative mt-44 overflow-hidden'>
            <div className='bg-black w-[20vw] h-[15vw] absolute left-0 -translate-x-20 z-50 rounded-full blur-2xl'></div>
            <div className='bg-black w-[20vw] h-[15vw] absolute right-0 translate-x-20 z-50 rounded-full blur-2xl'></div>
            {images.map((item, index) => (
                <Marquee direction={index === 0 ? "left" : "right"} key={index} imagesurls={item}/>
            ))}

        </div>
    )
}

export default Marquees