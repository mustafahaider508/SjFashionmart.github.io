import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FlashSale from "./FlashSale";
import {makeStyles} from "@material-ui/core";
import {Divider,Card,CardActionArea,CardMedia,CardContent,CardActions,Typography,Button,Grid, Container} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import {Link} from "react-router-dom";
import Cardd from "./Card";

const useStyles = makeStyles((theme) => ({
    slider:{
        maxWidth:"100%",
        height:"70vh",
        paddingTop:"0px",
  [theme.breakpoints.down("md")]:{
    maxWidth:"100%",
        height:"100vh",
  }
    },
}))


function Simple() {
  const classes = useStyles();
    return (
        <div className={classes.slider}>
        <Carousel
  additionalTransfrom={0}
  arrows
  className=""
  containerClass="container"
  dotListClass=""

  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 6,
    
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
 
>
 <div>
  <Cardd img="https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/r/e/redragon_zeus_h510_surround_over_ear_gaming_headset_1.jpg"
    name="Redragon Zeus H510 Surround Over Ear Gaming Headset"
   Price="7,190"
   Price2="8,250"
   Per="0"
   />
   </div>
   <div>
   <Cardd img="https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/small_image/265x265/9df78eab33525d08d6e5fb8d27136e95/u/a/uag_plyo_series_ice_case_for_iphone_11_pro.jpg"
   name="Apple iPhone 12 Pro Max (5G 128GB Silver) - Non PTA"
   Price="2344"
   Price2="3545"
   Per="20"
   />
   </div>
   <div>
   <Cardd img="https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/small_image/265x265/9df78eab33525d08d6e5fb8d27136e95/u/a/uag_plyo_series_ice_case_for_iphone_11_pro.jpg"
   name="Apple iPhone 12 Pro Max (5G 128GB Silver) - Non PTA"
   Price="2344"
   Price2="3545"
   Per="20"
   />
   </div>
   
  <Cardd img="https://static-01.daraz.pk/p/163f7741a776a007bb2936fec96d0d99.png"
   name="Green Cat RD 5 Pin & 11 Pin Micro USB MHL to HDMI 1080P HD TV Cable Adapter"
   Price="960"
   Price2="1,380"
   Per="30"
   />
   
   <Cardd img="https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/small_image/265x265/9df78eab33525d08d6e5fb8d27136e95/u/a/uag_plyo_series_ice_case_for_iphone_11_pro.jpg"
   name="Apple iPhone 12 Pro Max (5G 128GB Silver) - Non PTA"
   Price="2344"
   Price2="3545"
   Per="20"
   />
   


   <Cardd img="https://static-01.daraz.pk/p/6b23b62a90cab969b7bbc0940a480e23.jpg"
   name="Xiaomi Mi Smart Band 5 Sports Bracelet Dynamic Color AMOLED Screen- Chinese Version"
   Price="5,399"
   Price2="6,999"
   Per="23"
   />
   <Cardd img="https://static-01.daraz.pk/p/6b23b62a90cab969b7bbc0940a480e23.jpg"
   name="Xiaomi Mi Smart Band 5 Sports Bracelet Dynamic Color AMOLED Screen- Chinese Version"
   Price="5,399"
   Price2="6,999"
   Per="23"
   /><Cardd img="https://static-01.daraz.pk/p/6b23b62a90cab969b7bbc0940a480e23.jpg"
   name="Xiaomi Mi Smart Band 5 Sports Bracelet Dynamic Color AMOLED Screen- Chinese Version"
   Price="5,399"
   Price2="6,999"
   Per="23"
   />
  
   
   
</Carousel>
        </div>
    )
}

export default Simple
