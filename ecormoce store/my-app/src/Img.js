import React from 'react'

function Img() {
    return (
        <div>
           <img src={process.env.PUBLIC_URL + '/Mensfashion.jpeg'} />
           <img src={process.env.PUBLIC_URL + '/Womensfashion.jpeg'} />
           <img src={process.env.PUBLIC_URL + '/perfume.png'} />
           <img src={process.env.PUBLIC_URL + '/bag.png'} />
           <img src={process.env.PUBLIC_URL + '/Cosmetic.png'} />
           
        </div>
    )
}

export default Img
