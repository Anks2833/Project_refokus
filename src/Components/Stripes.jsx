import React from 'react'
import Stripe from './Stripe'

function Stripes() {

    var data = [
        { url: "https://www.svgrepo.com/show/354108/netflix.svg", number: "52", },
        { url: "https://www.svgrepo.com/show/303141/spotify-1-logo.svg", number: "2", },
        { url: "https://www.svgrepo.com/show/303246/google-1-1-logo.svg", number: "12", },
        { url: "https://www.svgrepo.com/show/328145/paypal.svg", number: "52", },
        { url: "https://www.svgrepo.com/show/303315/flipkart-logo.svg", number: "12", },
    ]

    return (
        <div className='flex mt-16'>
            {data.map((elem, index) => (
                <Stripe key={index} val={elem}/>
            ))}
        </div>
    )
}

export default Stripes