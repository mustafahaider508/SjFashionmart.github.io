import React from 'react';
import "./ProductSlider.css";

const items=[
    {
        img:"https://static-01.daraz.pk/p/f4ce8e21a0fbf0e3ae394b67023781e7.jpg",
        name:"product name",
         Description:"product description"
    },
    {
        img:"https://static-01.daraz.pk/p/f4ce8e21a0fbf0e3ae394b67023781e7.jpg",
        name:"product name",
         Description:"product description"
    },
    {
        img:"https://static-01.daraz.pk/p/f4ce8e21a0fbf0e3ae394b67023781e7.jpg",
        name:"product name",
         Description:"product description"
    },
    {
        img:"https://static-01.daraz.pk/p/f4ce8e21a0fbf0e3ae394b67023781e7.jpg",
        name:"product name",
         Description:"product description"
    },
    
    

    
   
]

function ProductSlider() {

      
    return (
     
        <>
        <div className="wrapper">
         <div className="app">
         {items.map(i =>(
            <div className="card">
           <img src={i.img}/>
            <div>
                <h2>{i.name}</h2>
                <p>{i.Description}</p>
                <button>Shop Now</button>
            </div>
          </div>
         ))}

         </div>
         <div className="row">
             <div className="prev">
              <img src={process.env.PUBLIC_URL + '/arrow2.png'} width="50px"/>
             </div>

             <div className="next">
              <img src={process.env.PUBLIC_URL + '/arrow1.png'} width="40px" />
             </div>

           </div>
        </div>
        </>
    )
}

export default ProductSlider
