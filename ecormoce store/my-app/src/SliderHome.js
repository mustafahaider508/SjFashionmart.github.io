import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import "./SliderHome.css";
 

const slides = [
  {img:"https://icms-image.slatic.net/images/ims-web/TB1bu7W6lr0gK0jSZFnXXbRRXXa.jpg"},
  {img:"https://icms-image.slatic.net/images/ims-web/df987b74-dead-461e-b083-79c02937835b.jpg"},
  {img:"https://icms-image.slatic.net/images/ims-web/a355498a-868b-4425-bed4-a4106480f396.jpg_1200x1200.jpg"},
  {img:"https://icms-image.slatic.net/images/ims-web/0d8e6a65-a48d-4915-bb97-4ac68359ed98.jpg"},
  {img:"https://d11zer3aoz69xt.cloudfront.net/media/responsivebannerslider/responsivebannerslider/Series6.jpg"},
];
 

function SliderHome() {
  return (
    <div className="slider-content">
<Slider autoplay={2000}
  className="slider-wrapper">
  {slides.map((slide, index) => <div key={index}>
    <img className="slider-img" src={slide.img} />
  </div>)}
</Slider>
    </div>
  )
}

export default SliderHome
