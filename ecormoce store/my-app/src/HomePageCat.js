import React,{Fragment} from 'react';
import {makeStyles} from "@material-ui/core";
import {Divider,Card,CardActionArea,CardMedia,CardContent,CardActions,Typography,Button,Grid, Container,
CssBaseline,Paper,TextField,Box} from "@material-ui/core";
import {EmailIcon,FacebookIcon,FacebookMessengerIcon,LinkedinIcon,TwitterIcon,ViberIcon, WhatsappIcon} from "react-share";
import Rating from '@material-ui/lab/Rating';
import {Link} from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faAt,faMobileAlt,faSearch,faShoppingCart,faUsers,faArrowRight,faHeart,faBars, faCaretDown, faAlignCenter,faHeadphones,faMapMarkerAlt,faEnvelope,faShieldAlt,faAngleDown,faMoneyBillAlt,faTruckMoving} from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth:"100%",    
      },
      heading1:{
        paddingTop:"50px", 
          fontSize:"28px",
          fontWeight:600,
          
        fontFamily:"'Roboto Slab', serif",
        paddingBottom:theme.spacing(1),
        [theme.breakpoints.down("md")]:{
          fontSize:"20px",
        }
    
      },
      line:{ 
        backgroundColor:"#f57224",
        width:"22vh",
        height:"4px",
        [theme.breakpoints.down("md")]:{
          width:"18vh",
        }
      
       },
      card:{
        textAlign:"left",
        cursor:"pointer",
  
        transition: "transform 0.2s",
        "&:hover ":{
            transform:" scale(1.03)", /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          

      },
    },
      Price:{
         textAlign:"left",
          color:"#f57224",
          fontFamily:"'Roboto Slab', serif",
          [theme.breakpoints.down("md")]:{
            fontSize:"15px",
         }
      },
      Price2:{
          fontSize:"11px",
          fontFamily:"'Roboto Slab', serif",
          textDecoration: "line-through",
          color:"#9e9e9e",
          [theme.breakpoints.down("md")]:{
            fontSize:"11px",
         }
      },
      Per:{
        fontSize:"11px",
        fontFamily:"'Roboto Slab', serif",
        paddingLeft:theme.spacing(1),
        [theme.breakpoints.down("md")]:{
            fontSize:"11px",
         }
      },
      div:{
          display:"flex",
      },
      Rating:{
        fontSize:"12px", 
        alignItems:"left",
        justifyContent:"left",
        alignItems:"left",

      },
      Button:{
         
        //  backgroundColor:"#f57224",
         color:"#f57224",
         border: "1px solid #f57224",
         fontSize:"12px",
         [theme.breakpoints.down("md")]:{
            fontSize:"11px",
         },
         "&:hover ":{
            backgroundColor:"#f57224",
            color:"#fff",
        },
      },
      heading:{
          textAlign:"left",
        fontSize:"14px",
          [theme.breakpoints.down("md")]:{
             fontSize:"10px",
          }
      },
      div1:{
          display:"flex",
          flexDirection:"flex-end",
          justifyContent:"space-between",
          paddingTop:theme.spacing(3),
       paddingBottom:theme.spacing(1),
      },
      Button2:{
         
        //  backgroundColor:"#f57224",
         color:"#f57224",
         border: "1px solid #f57224",
         fontSize:"12px",
   
         [theme.breakpoints.down("md")]:{
            fontSize:"11px",
         },
         "&:hover ":{
            backgroundColor:"#f57224",
            color:"#fff",
        },
      },
      heading2:{
         
        textAlign:"left",
      fontSize:"14px",
        [theme.breakpoints.down("md")]:{
           fontSize:"10px",
        }
    },
    sale:{
        color:"#f57224",
    },
    grid1:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      },
      list:{
        display:"flex",
       justifyContent:"center",
        alignItems:"center",
        listStyle:"none",
        fontSize:"25px",
        color:"#505050",
        fontFamily:"Bebas Neue, cursive",
        backgroundColor:"white",
        "& li":{
          marginRight:"15px"
        }
      },
      icon:{
        display:"flex",
       justifyContent:"space-evenly",
        alignItems:"center",
        listStyle:"none",
        fontSize:"25px",
        color:"#505050",
        fontFamily:"Bebas Neue, cursive"

      },
      burger:{
        fontSize:"25px",
        float:"right"
        
      },
      list2:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#505050",
      },
      hover:{
        "&:hover":{
          color:"#FF6600"
        }
      }
      
      
}))

//================================ELECTRONICS========================

const items=[
  {
    img:"https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/r/e/redragon_zeus_h510_surround_over_ear_gaming_headset_1.jpg",
    name:"Redragon Zeus H510 Surround Over Ear Gaming Headset",
   Price:"7,190",
   Price2:"8,250",
   Per:"0",
  },
  {
    img:"https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/small_image/265x265/9df78eab33525d08d6e5fb8d27136e95/u/a/uag_plyo_series_ice_case_for_iphone_11_pro.jpg",
   name:"Apple iPhone 12 Pro Max (5G 128GB Silver) - Non PTA",
   Price:"2344",
   Price2:"3545",
   Per:"20",
  },
  {
    img:"https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/small_image/265x265/9df78eab33525d08d6e5fb8d27136e95/u/a/uag_plyo_series_ice_case_for_iphone_11_pro.jpg",
   name:"Apple iPhone 12 Pro Max (5G 128GB Silver) - Non PTA",
   Price:"2344",
   Price2:"3545",
   Per:"20",
  },
  {
    img:"https://static-01.daraz.pk/p/163f7741a776a007bb2936fec96d0d99.png",
   name:"Green Cat RD 5 Pin & 11 Pin Micro USB MHL to HDMI 1080P HD TV Cable Adapter",
   Price:"960",
   Price2:"1,380",
   Per:"30",
  },
  {
    img:"https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/small_image/265x265/9df78eab33525d08d6e5fb8d27136e95/u/a/uag_plyo_series_ice_case_for_iphone_11_pro.jpg",
   name:"Apple iPhone 12 Pro Max (5G 128GB Silver) - Non PTA",
   Price:"2344",
   Price2:"3545",
   Per:"20",
  },
  {
    img:"https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/r/e/redragon_zeus_h510_surround_over_ear_gaming_headset_1.jpg",
    name:"Redragon Zeus H510 Surround Over Ear Gaming Headset",
   Price:"7,190",
   Price2:"8,250",
   Per:"0",
  },

  
]

export function Electronics() {
  const classes = useStyles();
  return (
      <div>
      <>
          <Container maxWidth="xl" className={classes.root}>
           <Typography component="div" className={classes.container}>

        <Grid container spacing={2} style={{paddingTop:"40px"}}>
        {items.map(i =>
          <Fragment>
          <Grid item  lg={2}  md={4} sm={4} xs={6}>
          <Card  variant="outlined" className={classes.card}  >
            
                  
                 <CardMedia  className={classes.Paper}
                     component="img" image={i.img} />
                  
                      <CardContent >
                      <Link style={{textDecoration: 'none',color:"#505050"}} to={i.link}>
                    
                        <Typography className={classes.heading} variant="body1">{i.name.slice(0,40)+"..."}</Typography>
                   
                   </Link>
                   <Typography className={classes.Price} variant="h6">Rs. {i.Price}</Typography>
                   <div className={classes.div}>
                   <Typography className={classes.Price2} variant="body2">{i.Price2}
                   </Typography>
                   <Typography className={classes.Per}  variant="body2">{i.per}</Typography>
                   </div>
                   <Rating className={classes.Rating} name="size-small" defaultValue={5} size="small" /> 
                   
                 
                    </CardContent>
                    <center>
                    <Typography style={{paddingBottom:"10px"}} component="div">
                    <Button   className={classes.Button} variant="outlined">Add To Cart</Button>
                    </Typography>
                    </center>
                
             </Card>
          
         </Grid>
         </Fragment>
         
         )}
        
         </Grid>
         </Typography>
    </Container>
      
          </>
          
      </div>
  )
}


   
//===============================HOME LIVING==========================
    const Hitems=[
     
      {
        name:"Hozada Heat Resistant Glass Teapot Stainless Steel Strainer Lid Tea Herbal Pot",
        Price:"2,298",
        img:"https://www.telemart.pk/uploads/product_image/product_122828_1_thumb.jpg",
      
      },
      {
        name:"AC 85-265V / 50-60Hz LEDs Bedside Wall Lamp 16W  ",
        Price:"3,291",
        Price2:"Rs.5000",
        per:"-40%",
        img:"https://static-01.daraz.pk/p/fcf558a8e682e63c03bd6557444187d0.jpg",
      
      },
      {
        name:"Xiaomi Deerma Water Bottle 350ML Electric Water Kettle Water Boil Touch Control ",
        Price:"7,075",
        Price2:"Rs.11,757",
        per:"-40%",
        img:"https://static-01.daraz.pk/p/7c710e25ece9c377097f52277eb80172.jpg",
      
      },
      {
        name:"Black Stylish deer head for wall decoration",
        Price:"1,550",
        Price2:"Rs.2000",
        per:"-40%",
        img:"https://static-01.daraz.pk/p/b0d42f9f96a8112971611bf3b55f79db.jpg",
      
      },
      {
        name:"iFlashDeal Smart Trash Can Mute Opening and Closing Trash Bin ",
        Price:"3,809",
        Price2:"Rs.6,199",
        per:"-50%",
        img:"https://www.telemart.pk/uploads/product_image/product_123521_1_thumb.jpg",
       
      },
      {
        name:"Mini Flower Pot for Decoration - 1pc",
        Price:"248",
        Price2:"Rs.499",
        per:"-50%",
        img:"https://static-01.daraz.pk/p/19a418ff7f9644e6fce4adb3c56d83d9.jpg_200x200q80-product.jpg_.webp",
       
      },
     
      ]
      

export function HomeLiving() {
    const classes = useStyles();
    return (
        <div>
        <>
            <Container maxWidth="xl" className={classes.root}>
             <Typography component="div" className={classes.container}>

          <Grid container spacing={2} style={{paddingTop:"40px"}}>
          {Hitems.map(i =>
            <Fragment>
            <Grid item  lg={2}  md={4} sm={4} xs={6}>
            <Card  variant="outlined" className={classes.card}  >
              
                    
                   <CardMedia  className={classes.Paper}
                       component="img" image={i.img} />
                    
                        <CardContent >
                        <Link style={{textDecoration: 'none',color:"#505050"}} to={i.link}>
                      
                          <Typography className={classes.heading} variant="body1">{i.name.slice(0,40)+"..."}</Typography>
                     
                     </Link>
                     <Typography className={classes.Price} variant="h6">Rs. {i.Price}</Typography>
                     <div className={classes.div}>
                     <Typography className={classes.Price2} variant="body2">{i.Price2}
                     </Typography>
                     <Typography className={classes.Per}  variant="body2">{i.per}</Typography>
                     </div>
                     <Rating className={classes.Rating} name="size-small" defaultValue={5} size="small" /> 
                     
                   
                      </CardContent>
                      <center>
                      <Typography style={{paddingBottom:"10px"}} component="div">
                      <Button   className={classes.Button} variant="outlined">Add To Cart</Button>
                      </Typography>
                      </center>
                  
               </Card>
            
           </Grid>
           </Fragment>
           
           )}
          
           </Grid>
           </Typography>
      </Container>
        
            </>
            
        </div>
    )
}



// =======================WOMEN FASHION CATOGAY=======================

const Womenitems=[
     
    {
      name:"Syriza Textile Green Unstitched 3-Pcs Chikan Lawn Suit",
      Price:"2,298",
      img:"https://d2idx9epdcbzys.cloudfront.net/media/catalog/product/cache/1/small_image/190x/9df78eab33525d08d6e5fb8d27136e95/f/5/f5838f5f0abf755eab978c895a6ba90d.jpg",
    
    },
    {
      name:"Syriza Textile Light Green Unstitched 3 Pcs Lawn Suit ",
      Price:"3,291",
      Price2:"Rs.5000",
      per:"-40%",
      img:"https://d2idx9epdcbzys.cloudfront.net/media/catalog/product/cache/1/small_image/190x/9df78eab33525d08d6e5fb8d27136e95/c/e/ce6cd89670664e8ad99c0d2568247c8f.jpg",
    
    },
    {
      name:"Khas stores Unstitched Idyllic Thong 3 Pcs Suit - Kla - 9075 ",
      Price:"7,075",
      Price2:"Rs.11,757",
      per:"-40%",
      img:"https://d2idx9epdcbzys.cloudfront.net/media/catalog/product/cache/1/image/400x400/9df78eab33525d08d6e5fb8d27136e95/3/a/3ab831d66f069453c2365a8ba336007e.jpg",
    
    },
    {
      name:"Syriza Textile Mehndi Unstitched 3 Pcs Lawn Suit - DL-107",
      Price:"1,550",
      Price2:"Rs.2000",
      per:"-40%",
      img:"https://d2idx9epdcbzys.cloudfront.net/media/catalog/product/cache/1/small_image/190x/9df78eab33525d08d6e5fb8d27136e95/4/0/4092713aa5a071ac10df75f0f87f7052.jpg",
    
    },
    {
      name:"Syriza Textile Grey Un-Stitched 3-Pcs Lawn Suit-SW-03",
      Price:"3,809",
      Price2:"Rs.6,199",
      per:"-50%",
      img:"https://d2idx9epdcbzys.cloudfront.net/media/catalog/product/cache/1/small_image/190x/9df78eab33525d08d6e5fb8d27136e95/4/f/4f2b37cc016ce9efed26aefe45917ced.jpg",
     
    },
    {
      name:"Syriza Textile Sea Green Un-Stitched 3-Pcs Lawn Suit-SW-01",
      Price:"248",
      Price2:"Rs.499",
      per:"-50%",
      img:"https://d2idx9epdcbzys.cloudfront.net/media/catalog/product/cache/1/small_image/190x/9df78eab33525d08d6e5fb8d27136e95/9/f/9f929d6db1c20314221424c65461f9e5.jpg",
     
    },
   
    ]

export function WomenFashion() {
    const classes = useStyles();
    return (
    
        <div>
             <>
            <Container maxWidth="xl" className={classes.root}>
             <Typography component="div" className={classes.container}>

          <Grid container spacing={2} style={{paddingTop:"40px"}}>
          {Womenitems.map(i =>
            <Fragment>
            <Grid item  lg={2}  md={4} sm={4} xs={6}>
            <Card  variant="outlined" className={classes.card}  >
              
                    
                   <CardMedia  className={classes.Paper}
                       component="img" image={i.img} />
                    
                        <CardContent >
                        <Link style={{textDecoration: 'none',color:"#505050"}} to={i.link}>
                     <Typography className={classes.heading} variant="body1">{i.name.slice(0,39)+"..."}</Typography>
                     </Link>
                     <Typography className={classes.Price} variant="h6">Rs. {i.Price}</Typography>
                     <div className={classes.div}>
                     <Typography className={classes.Price2} variant="body2">{i.Price2}
                     </Typography>
                     <Typography className={classes.Per}  variant="body2">{i.per}</Typography>
                     </div>
                     <Rating className={classes.Rating} name="size-small" defaultValue={5} size="small" /> 
                     
                   
                      </CardContent>
                      <center>
                      <Typography style={{paddingBottom:"10px"}} component="div">
                      <Button   className={classes.Button} variant="outlined">Add To Cart</Button>
                      </Typography>
                      </center>
                  
               </Card>
            
           </Grid>
           </Fragment>
           
           )}
          
           </Grid>
           </Typography>
      </Container>
        
            </> 
        </div>
    )
}

// =======================MEN FASHION CATOGAY=======================

const Menitems=[
     
    {
      name:"Black Leather Puffer Parachute Jacket For Men",
      Price:"2,298",
      img:"https://static-01.daraz.pk/p/b03f8f31eec2ce02969b019f253a21d9.jpg",
    
    },
    {
      name:"LATEST BLUE DENIM JACKET FOR MEN ",
      Price:"3,291",
      Price2:"Rs.5000",
      per:"-40%",
      img:"https://static-01.daraz.pk/p/bbb7b9d150e578f80c6be7c632de4561.jpg",
    
    },
    {
      name:"MK) Grey & Red - Synthetic Material Sneakers for Men HOCK004",
      Price:"7,075",
      Price2:"Rs.11,757",
      per:"-40%",
      img:"https://static-01.daraz.pk/p/823c8e6370bf2aa9c6fb09e0e91b3d7c.jpg",
    
    },
    {
      name:"Warm Woolen Beanie Cap",
      Price:"1,550",
      Price2:"Rs.2000",
      per:"-40%",
      img:"https://static-01.daraz.pk/p/73dca9e632d9599727377f42460e3f57.jpg",
    
    },
    {
      name:" Leather Watch for Men",
      Price:"3,809",
      Price2:"Rs.6,199",
      per:"-50%",
      img:"https://static-01.daraz.pk/p/7d52d1981501b4310f9eb6bfae6d577d.jpg",
     
    },
    {
      name:"Chinos for Men - Design 9 - Blue",
      Price:"248",
      Price2:"Rs.499",
      per:"-50%",
      img:"https://static-01.daraz.pk/p/mdc/5ef3a6ebb40794bca349296d1f1d03a8.jpg_200x200q80.jpg_.webp",
     
    },
   
    ]

export function MenFashion(props) {
    const classes = useStyles();
    return (
    
        <div>
             <>
            <Container maxWidth="xl" className={classes.root}>
             <Typography component="div" className={classes.container}>

          <Grid container spacing={2} style={{paddingTop:"40px"}}>
          {Menitems.map(i =>
            <Fragment>
            <Grid item  lg={2}  md={4} sm={4} xs={6}>
            <Card  variant="outlined" className={classes.card}  >
              
                    
                   <CardMedia  className={classes.Paper}
                       component="img" image={i.img} />
                    
                        <CardContent >
                        <Link style={{textDecoration: 'none',color:"#505050"}} to={i.link}>
                     <Typography className={classes.heading} variant="body1">{i.name.slice(0,39)+"..."}</Typography>
                     </Link>
                     <Typography className={classes.Price} variant="h6">Rs. {i.Price}</Typography>
                     <div className={classes.div}>
                     <Typography className={classes.Price2} variant="body2">{i.Price2}
                     </Typography>
                     <Typography className={classes.Per}  variant="body2">{i.per}</Typography>
                     </div>
                     <Rating className={classes.Rating} name="size-small" defaultValue={5} size="small" /> 
                     
                   
                      </CardContent>
                      <center>
                      <Typography style={{paddingBottom:"10px"}} component="div">
                      <Button   className={classes.Button} variant="outlined">Add To Cart</Button>
                      </Typography>
                      </center>
                  
               </Card>
            
           </Grid>
           </Fragment>
           
           )}
          
           </Grid>
           </Typography>
      </Container>
        
            </> 
        </div>
    )
}


// =======================Kid FASHION CATOGAY=======================

const Kiditems=[
     
    {
      name:"A+B A+B Booster Seat - Green",
      Price:"2,298",
      img:"https://d2idx9epdcbzys.cloudfront.net/media/catalog/product/cache/1/small_image/160x200/9df78eab33525d08d6e5fb8d27136e95/b/6/b6b534faed865a3558fc30960f6dc50b.jpg",
    
    },
    {
      name:"Charji Shop Red Dots Cute Baby Girl Sleeveless Flower ",
      Price:"3,291",
      Price2:"Rs.5000",
      per:"-40%",
      img:"https://d2idx9epdcbzys.cloudfront.net/media/catalog/product/cache/1/small_image/160x200/9df78eab33525d08d6e5fb8d27136e95/1/e/1eca073a01c2903fb1c252ec0ed1c472_4.jpg",
    
    },
    {
      name:"The Shop Pack Of 4 - High Quality Rich Colors Trendy T-Shirt For Kids - HQ-RC4",
      Price:"7,075",
      Price2:"Rs.11,757",
      per:"-40%",
      img:"https://d2idx9epdcbzys.cloudfront.net/media/catalog/product/cache/1/small_image/160x200/9df78eab33525d08d6e5fb8d27136e95/4/2/425b553a84ca51959d56456e3b2a81fe_2.jpg",
    
    },
    {
      name:"PkKids Multi functional large capacity baby daiper bag",
      Price:"1,550",
      Price2:"Rs.2000",
      per:"-40%",
      img:"https://d2idx9epdcbzys.cloudfront.net/media/catalog/product/cache/1/small_image/160x200/9df78eab33525d08d6e5fb8d27136e95/c/6/c616e827f0a4566d89f495e1c2450e29.jpg",
    
    },
    {
      name:"Magic Slinky Rainbow Springs Bounce Fun Toy For Kids",
      Price:"3,809",
      Price2:"Rs.6,199",
      per:"-50%",
      img:"https://static-01.daraz.pk/p/a908ee6bc08595937e53057f28fc87e8.jpg",
     
    },
    {
      name:"Rubiks QIYI Magic Cube 3x3 Smooth Fast Speed Original | Sail W | Warrior",
      Price:"248",
      Price2:"Rs.499",
      per:"-50%",
      img:"https://static-01.daraz.pk/p/9f4b2bd1c8ef8f51497a527e8362c30b.jpg",
     
    },
   
    ]
export function KidFashion() {
    const classes = useStyles();
    return (
    
        <div>
             <>
            <Container maxWidth="xl" className={classes.root}>
             <Typography component="div" className={classes.container}>

          <Grid container spacing={2} style={{paddingTop:"40px"}}>
          {Kiditems.map(i =>
            <Fragment>
            <Grid item  lg={2}  md={4} sm={4} xs={6}>
            <Card  variant="outlined" className={classes.card}  >
              
                    
                   <CardMedia  className={classes.Paper}
                       component="img" image={i.img} />
                    
                        <CardContent >
                        <Link style={{textDecoration: 'none',color:"#505050"}} to={i.link}>
                     <Typography className={classes.heading} variant="body1">{i.name.slice(0,39)+"..."}</Typography>
                     </Link>
                     <Typography className={classes.Price} variant="h6">Rs. {i.Price}</Typography>
                     <div className={classes.div}>
                     <Typography className={classes.Price2} variant="body2">{i.Price2}
                     </Typography>
                     <Typography className={classes.Per}  variant="body2">{i.per}</Typography>
                     </div>
                     <Rating className={classes.Rating} name="size-small" defaultValue={5} size="small" /> 
                     
                   
                      </CardContent>
                      <center>
                      <Typography style={{paddingBottom:"10px"}} component="div">
                      <Button   className={classes.Button} variant="outlined">Add To Cart</Button>
                      </Typography>
                      </center>
                  
               </Card>
            
           </Grid>
           </Fragment>
           
           )}
          
           </Grid>
           </Typography>
      </Container>
        
            </> 
        </div>
    )
}


// =====================================Makeup & Beauty================================
const Makeupitems=[
     
    {
      name:"BEAUTY BOX & COSMETICS Black Eyeliner Pencil ",
      Price:"2,298",
      img:"https://d2idx9epdcbzys.cloudfront.net/media/catalog/product/cache/1/small_image/160x200/9df78eab33525d08d6e5fb8d27136e95/6/0/602ca81abe0a224bb45ed728560be681_5.jpg",
    
    },
    {
      name:"6 In 1-Blush On Kit-Multicolor",
      Price:"3,291",
      Price2:"Rs.5000",
      per:"-40%",
      img:"https://d2idx9epdcbzys.cloudfront.net/media/catalog/product/cache/1/small_image/180x/9df78eab33525d08d6e5fb8d27136e95/4/5/45021161858ffc6c399b553b15610a3b_2.jpg",
    
    },
    {
      name:"BEST SELLING Pack Of 2 - YANQINA Volume 1 Seconde",
      Price:"7,075",
      Price2:"Rs.11,757",
      per:"-40%",
      img:"https://d2idx9epdcbzys.cloudfront.net/media/catalog/product/cache/1/small_image/180x/9df78eab33525d08d6e5fb8d27136e95/f/b/fbafbd14ece2f8b1814bfa8a7abfc765.jpg",
    
    },
    {
      name:"MEDORA PACK OF 2 LIPSTICK SET 1 DARK Or 1 LIGHT SHADES FULL",
      Price:"1,550",
      Price2:"Rs.2000",
      per:"-40%",
      img:"https://d2idx9epdcbzys.cloudfront.net/media/catalog/product/cache/1/small_image/180x/9df78eab33525d08d6e5fb8d27136e95/7/4/74c1dd1e6f9dd11a4e78aac16ceb6a9a.jpg",
    
    },
    {
      name:"New HUDA BEAUTY Rose Gold Edition Textured Eye Shadow",
      Price:"3,809",
      Price2:"Rs.6,199",
      per:"-50%",
      img:"https://d2idx9epdcbzys.cloudfront.net/media/catalog/product/cache/1/small_image/180x/9df78eab33525d08d6e5fb8d27136e95/5/3/531b2db7356956fa0054ba94f0502094_4.jpg",
     
    },
    {
      name:"Naked 3 Urban Decay - Pack Of 12 Makeup Brushes",
      Price:"248",
      Price2:"Rs.499",
      per:"-50%",
      img:"https://d2idx9epdcbzys.cloudfront.net/media/catalog/product/cache/1/small_image/180x/9df78eab33525d08d6e5fb8d27136e95/2/6/2639502fc84f58b7e2f02b9ffd99452a_4.jpg",
     
    },
   
    ]
export function Makeup() {
    const classes = useStyles();
    return (
    
        <div>
             <>
            <Container maxWidth="xl" className={classes.root}>
             <Typography component="div" className={classes.container}>

          <Grid container spacing={2} style={{paddingTop:"40px"}}>
          {Makeupitems.map(i =>
            <Fragment>
            <Grid item  lg={2}  md={4} sm={4} xs={6}>
            <Card  variant="outlined" className={classes.card}  >
              
                    
                   <CardMedia  className={classes.Paper}
                       component="img" image={i.img} />
                    
                        <CardContent >
                        <Link style={{textDecoration: 'none',color:"#505050"}} to={i.link}>
                     <Typography className={classes.heading} variant="body1">{i.name.slice(0,30)+"..."}</Typography>
                     </Link>
                     <Typography className={classes.Price} variant="h6">Rs. {i.Price}</Typography>
                     <div className={classes.div}>
                     <Typography className={classes.Price2} variant="body2">{i.Price2}
                     </Typography>
                     <Typography className={classes.Per}  variant="body2">{i.per}</Typography>
                     </div>
                     <Rating className={classes.Rating} name="size-small" defaultValue={5} size="small" /> 
                     
                   
                      </CardContent>
                      <center>
                      <Typography style={{paddingBottom:"10px"}} component="div">
                      <Button   className={classes.Button} variant="outlined">Add To Cart</Button>
                      </Typography>
                      </center>
                  
               </Card>
            
           </Grid>
           </Fragment>
           
           )}
          
           </Grid>
           </Typography>
      </Container>
        
            </> 
        </div>
    )
}



// =====================================MOBILE ACCESSORIES================================
const Mobileitems=[
     
    {
      name:"Apple MagSafe Charger ",
      Price:"7,899",
      img:"https://cdn.homeshopping.pk/product_images/p/251/MHXH3__00658_thumb.jpg",
    
    },
    {
      name:"Apple MagSafe Charger ",
      Price:"7,899",
      img:"https://cdn.homeshopping.pk/product_images/p/251/MHXH3__00658_thumb.jpg",
    
    },
    
    {
      name:"SAMSUNG Power Bank 10000 mah Micro/Type C",
      Price:"7,075",
      Price2:"Rs.11,757",
      per:"-40%",
      img:"https://cdn.homeshopping.pk/product_images/i/263/ae-battery-pack-eb-p1100c-eb-p1100csegae-frontsilver-128724523__75435_thumb.jpg",
    
    },
    {
      name:"Apple Silicone Case with MagSafe for iPhone 12 | 12",
      Price:"248",
      Price2:"Rs.499",
      per:"-50%",
      img:"https://cdn.homeshopping.pk/product_images/p/383/%25E9%25BB%25912__96604_thumb.jpg",
     
    },
    {
      name:"Amazon Echo Dot (4th Gen) | Smart speaker with",
      Price:"3,809",
      Price2:"Rs.6,199",
      per:"-50%",
      img:"https://cdn.homeshopping.pk/product_images/y/658/714Rq4k05UL._AC_SX679___24917_thumb.jpg",
     
    },
    {
      name:"Apple Silicone Case with MagSafe for iPhone 12 | 12",
      Price:"248",
      Price2:"Rs.499",
      per:"-50%",
      img:"https://cdn.homeshopping.pk/product_images/p/383/%25E9%25BB%25912__96604_thumb.jpg",
     
    },
   
    ]
export function Mobile() {
    const classes = useStyles();
    return (
    
        <div>
             <>
       
             <Typography component="div" className={classes.container}>

          <Grid container spacing={2} style={{paddingTop:"10px"}}>
          {Mobileitems.map(i =>
            <Fragment>
            <Grid item  lg={2}  md={4} sm={4} xs={6}>
            <Card  variant="outlined" className={classes.card}  >
              
                    
                   <CardMedia  className={classes.Paper}
                       component="img" image={i.img} />
                    
                        <CardContent >
                        <Link style={{textDecoration: 'none',color:"#505050"}} to={i.link}>
                     <Typography className={classes.heading} variant="body1">{i.name.slice(0,42)+"..."}</Typography>
                     </Link>
                     <Typography className={classes.Price} variant="h6">Rs. {i.Price}</Typography>
                     <div className={classes.div}>
                     <Typography className={classes.Price2} variant="body2">{i.Price2}
                     </Typography>
                     <Typography className={classes.Per}  variant="body2">{i.per}</Typography>
                     </div>
                     <Rating className={classes.Rating} name="size-small" defaultValue={5} size="small" /> 
                     
                   
                      </CardContent>
                      <center>
                      <Typography style={{paddingBottom:"10px"}} component="div">
                      <Button   className={classes.Button} variant="outlined">Add To Cart</Button>
                      </Typography>
                      </center>
                  
               </Card>
            
           </Grid>
           </Fragment>
           
           )}
          
           </Grid>
           </Typography>
     
        
            </> 
        </div>
    )
}

// =====================================Security===================================


export function Security() {

    const useStyles=makeStyles({
      container:{
        //backgroundColor: '#cfe8fc',
         minheight: '100vh'
      },
      paper:{
        backgroundColor:"white",
        height: '200px',
        display: 'flex',
        alignItems:"center",
        justifyContent:"center",
        boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
        flexDirection:"column",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundColor:"#505050",
        backgroundBlendMode:"multiply",
        color:"white",
      },
    
    })
    const classes=useStyles();
  
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography component="div" className={classes.container}>
          <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper} style={{backgroundImage:"url(https://specials-images.forbesimg.com/imageserve/5e8bcac2b0a4e4000746d4df/960x0.jpg?fit=scale)"}}>
                  <FontAwesomeIcon icon={faMoneyBillAlt} color="#FF6600" size="3x"/>
                  <br/>
                  <Typography variant="h5" style={{fontFamily:"sans-serif"}}>MONEY BACK GURANTEE</Typography>
                </Paper>
                </Grid>
  
  
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper} style={{backgroundImage:"url(https://www.cascade.app/hs-fs/hubfs/Images/Featured-Image-Product-management-KPIs-product-delivery.png?width=800&name=Featured-Image-Product-management-KPIs-product-delivery.png)"}}>
                    <FontAwesomeIcon icon={faTruckMoving} color="#FF6600" size="3x" />
                    <br/>
                    <Typography variant="h5" style={{fontFamily:"sans-serif"}}>DELIVERY ON TIME</Typography>
                </Paper>
                </Grid>
  
  
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper} style={{backgroundImage:"url(https://jamfield.com/wp-content/uploads/2018/10/Yeastar-Call-Center-Solution.png)"}}>
                <FontAwesomeIcon icon={faHeadphones} color="#FF6600" size="3x"/>
                <br/>
                <Typography variant="h5" style={{fontFamily:"sans-serif"}}>ALWAYS SUPPORT</Typography>
                </Paper>
                </Grid> 
  
                
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper} style={{backgroundImage:"url(https://www.phoneworld.com.pk/wp-content/uploads/2019/11/cybersecurity-750x450.jpg)"}}>
                <FontAwesomeIcon icon={faShieldAlt} color="#FF6600" size="3x"/>
                <br/>
                <Typography variant="h5" style={{fontFamily:"sans-serif"}}>SECURE PAYMENT</Typography> 
                </Paper>
                </Grid> 
            </Grid>
          </Typography>
        </Container>
        <br/>
      </React.Fragment>
    );
  }

  
// =================================FOOTER=================================

export function Footer() {
    const useStyles=makeStyles({
      container:{
        backgroundColor: '#25272E',
         minheight: '50vh',
        
      },
      paper:{
        minheight:"300px",
        color:"#DDDDDD",
        backgroundColor:"#25272E",
        padding:"15px",
        display:"flex",
        flexDirection:"column",
       
      },
      ul:{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#25272E",
        fontSize:"16px",
        "& li":{
          marginBottom:"10px",
          backgroundColor:"#25272E",
        }
      },
      input:{
        width:"260px",
        border:"2px solid #FF6600",
        color:"white",
        backgroundColor:"white"
    },
    card:{
      width:"65px",height:"35px",
      backgroundColor:"white"
    },
   body:{
       fontSize:"16px",
   },
  })
    const classes=useStyles();
  
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" disableGutters>
          <Typography component="div" className={classes.container}>
          <Grid container>
              <Grid item xs={12} sm={6} md={3}>
                <Box className={classes.paper}>
                <img style={{padding:"1px"}} src={process.env.PUBLIC_URL + '/Transparent.png'} width="250px"/><br/>
                <Typography className={classes.body} variant="body2"><b><FontAwesomeIcon icon={faMapMarkerAlt}/> Address:</b><br/>27 Sial Flat, Grand Trunk Rd, University Town, Peshawar, Khyber Pakhtunkhwa, Pakistan.</Typography>
  
                <Typography className={classes.body} variant="body2"><FontAwesomeIcon icon={faEnvelope}/> <b>Email:</b><br/><Link href="mailto:info@softech-i.com" underline="none">info@softech-i.com</Link>
                </Typography>
  
               
                </Box>
                </Grid>
  
  
                <Grid item xs={12} sm={6} md={2}>
                <Paper variant="outlined" className={classes.paper}>
                  <Typography variant="h4" style={{fontFamily:"sans-serif"}}>Information</Typography><br/>
                  <Typography variant="body2" component="ul" className={classes.ul}>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Return Policy</li>
                    </Typography>
                  </Paper>
                  </Grid>
  
  
                <Grid item xs={12} sm={6} md={2}>
                <Box className={classes.paper}>
                  <Typography variant="h4" style={{fontFamily:"sans-serif"}}>Quick links</Typography><br/>
                  <Typography variant="body2" component="ul" className={classes.ul}>
                    <li>My Account</li>
                    <li>Free shapping</li>
                    <li>Delivery infomation</li>
                    <li>Shopping Cart</li>
                    <li>Order History</li>
                    </Typography>
                </Box>
                </Grid> 
  
                <Grid item xs={12} sm={6} md={5}>
                <Box className={classes.paper}>
                <Typography variant="h4" style={{fontFamily:"sans-serif"}}>Join Our Newsletter Now</Typography><br/>
                <Typography className={classes.body} variant="body2">Get E-mail updates about our latest shop and special offers.</Typography><br/>
                <div style={{display:"flex",alignItems:"center"}}>
               <TextField type="email" size="small" InputProps={{ placeholder:"Email Address"}}  variant="outlined" className={classes.input}></TextField>
               <Link style={{fontSize:"16px",backgroundColor:"#FF6600",padding:"9px",fontFamily:"Bebas Neue, cursive",color:"#fff"}} underline="none" color="white">subscribe</Link>
               </div>
               <br/>
  
               <div>
               <FacebookIcon size={40} style={{marginRight:"10px"}} />
               <TwitterIcon size={40} style={{marginRight:"10px"}}/>
               <WhatsappIcon size={40} style={{marginRight:"10px"}}/>
               <ViberIcon size={40} style={{marginRight:"10px"}}/>
               <EmailIcon size={40} style={{marginRight:"10px"}}/>
                </div>
                </Box>
  
                </Grid>
            </Grid>
            <Divider variant="middle" style={{backgroundColor:"#DDDDDD"}}/>
            <Grid container style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
              <Grid item>
            <Typography className={classes.body} variant="body2" style={{color:"#DDDDDD",padding:"20px"}}>Copyright ©2020 All rights reserved | This Website is made with love by SoftTech</Typography>
            </Grid>
  
        <Grid item style={{display:"flex" ,paddingBottom:"10px"}}>
          <Typography component="div" className={classes.card} style={{marginRight:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
  
              <img src="https://i.ya-webdesign.com/images/visa-logo-png-2.png" width="40px"/>
            </Typography>
            <Typography component="div" className={classes.card} style={{marginRight:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src="https://i.ya-webdesign.com/images/master-card-png-6.png" width="40px"/>
            </Typography>
            <Typography component="div" className={classes.card} style={{marginRight:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src="https://pngimage.net/wp-content/uploads/2018/06/union-pay-logo-png-1.png" width="60px"/>
            </Typography>
            <Typography component="div" className={classes.card} style={{marginRight:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/cod-credit-debit-bank-transaction-32259.png" width="60px"/>
          </Typography>
          </Grid>
          </Grid>
  
  
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
  





