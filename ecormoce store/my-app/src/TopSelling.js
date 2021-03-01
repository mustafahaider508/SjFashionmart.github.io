import React,{Fragment}  from 'react';
import {makeStyles} from "@material-ui/core";
import {CssBaseline,Container,Typography,Grid,Divider,Paper} from "@material-ui/core";
import {Link} from "react-router-dom";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Rating from '@material-ui/lab/Rating';



const useStyles=makeStyles((theme) =>({
    item:{
        width:"90px", 
        height:"90px",
        backgroundSize:"cover",
        backgroundPosition:"center",
        },
        div:{
            backgroundColor:"white",
            display:"flex",
            paddingTop:"10px",
            paddingBottom:"10px",
            justifyContent:"space-around",
            alignItems:"center",
            boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.75)",
        },
        div1:{
            display:"flex",
            flexDirection:"column",
            alignItems:"flex-end",
        },
        name:{
            color:"#505050",
        },
        price:{
            color:"#FF6600",
             fontFamily:"Bebas Neue, cursive",
        },
        icon:{
            color:"#505050",
            fontSize:"15px",
        },
        icon1:{
            fontSize:"17px",
            paddingTop:"2px",
            color:"#C70000",
        },
        divider:{
            margin:"0px",
            backgroundColor:"#FF6600",
        },
        heading:{
    fontSize:"28px",
    fontWeight:600,
    fontFamily:"'Roboto Slab', serif",
    paddingTop:theme.spacing(3),
    [theme.breakpoints.down("md")]:{
      fontSize:"20px",
    }
  },
  line:{ 
    backgroundColor:"#f57224",
    width:"30vh",
    height:"5px",
   
   },
}));

const items=[{
    name:"Samsung Galaxy ",
     Price:"97000" ,
     image:"https://i.pcmag.com/imagery/reviews/00bTyFN4pGOEYuGN1d3fbd6-48.fit_scale.size_1028x578.v_1582659225.jpg",md:3
  },
  {
  name:"Apple Ipad 2020",
   Price:"182000",
    image:"https://images.idgesg.net/images/article/2020/05/ipad-pro-2020-100841697-large.jpg",
 
  },
  {
  name:"Thinkpad X2",
  Price:"284000" ,
  image:"https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
 
  },
  {
  name:"Oppo Reno",
   Price:"105000",
    image:"https://cdn57.androidauthority.net/wp-content/uploads/2019/04/Oppo-Reno-home-screen-840x473.jpg",

  },
  
  {
  name:"Apple watch 4",
  Price:"91000" ,
  image:"https://cdn.pocket-lint.com/r/s/970x/assets/images/149320-smartwatches-review-review-apple-watch-series-5-product-shots-image7-eyifwdu4nx-jpg.webp",

  },
  
  {
  name:"TCL 32inch smart tv",
   Price:"85000",
    image:"https://reviewed-com-res.cloudinary.com/image/fetch/s--BLJg2bt---/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_1200/https://reviewed-production.s3.amazonaws.com/1496947653000/TCL-PSeries-Hero_2.jpg",

  },
  {
  name:"mechanical keyboard",
   Price:"1800",
    image:"https://cdn.shopify.com/s/files/1/0549/2681/products/mechanical-keyboard-the-glorious-gmmk-1_d1faaca8-fdbf-43d3-85f0-a9a1d4995d3c_600x600.jpg?v=1525907576",
  
  },
  {
  name:"xbox one s",
  Price:"74000" ,
  image:"https://i.insider.com/5d6985282e22af41f8198115?width=1100&format=jpeg&auto=webp",

  },
  
  {
  name:"jbl flip 4",
  Price:"30000" ,
  image:"https://cdn.mos.cms.futurecdn.net/jPaHoHRdJVyaR2HgeMhemm.jpg",

  },
  {
  name:"Logitect mouse",
   Price:"PKR 4500",
    image:"https://cdn.mos.cms.futurecdn.net/6wzmNvDKDQXkzQCGvsw3KR.jpg",
  
  },
  
  {
    name:"polo shirt",
     Price:"PKR 500",
      image:"https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/419194/item/goods_69_419194.jpg?width=2000",
     
    },
  
    {
      name:"reebok nano",
       Price:"PKR 5500",
        image:"https://assets.reebok.com/images/w_600,f_auto,q_auto/fea5b2892ea04659b396ab9100329c14_9366/Reebok_Nano_X_Shoes_Black_EH3094.jpg",
       
      },
      {
        name:"polo shirt",
         Price:"PKR 500",
          image:"https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/419194/item/goods_69_419194.jpg?width=2000",
         
        },
        {
          name:"mechanical keyboard",
           Price:"1800",
            image:"https://cdn.shopify.com/s/files/1/0549/2681/products/mechanical-keyboard-the-glorious-gmmk-1_d1faaca8-fdbf-43d3-85f0-a9a1d4995d3c_600x600.jpg?v=1525907576",
          
          },
          {
            name:"reebok nano",
             Price:"PKR 5500",
              image:"https://assets.reebok.com/images/w_600,f_auto,q_auto/fea5b2892ea04659b396ab9100329c14_9366/Reebok_Nano_X_Shoes_Black_EH3094.jpg",
             
            },
            {
              name:"TCL 32inch smart tv",
               Price:"85000",
                image:"https://reviewed-com-res.cloudinary.com/image/fetch/s--BLJg2bt---/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_1200/https://reviewed-production.s3.amazonaws.com/1496947653000/TCL-PSeries-Hero_2.jpg",
            
              },
        
  ]

function TopSelling() {
    const classes=useStyles();
    return (
        <div>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{paddingTop:"30px"}}>
      <Paper variant="outlined">
        <Typography component="div" style={{ minheight: '100vh' }}>
        <center>
      <Typography className={classes.heading} variant="h6">TOP SELLING PRODUCTS</Typography>
       <Typography className={classes.line} component="div"></Typography>
       <div style={{paddingTop:"20px"}}>
       <Divider />
       </div>
       </center>
      <br/>
        <Grid container spacing={2}>
        {items.map((i) =>
              <Grid item xs={12} sm={6} md={4} lg={3}>
        <Fragment>
       <div className={classes.div}>
       <div className={classes.item} style={{backgroundImage:"url("+i.image+")"}}></div>
       <div className={classes.div1}>
       <Link style={{textDecoration: 'none'}} to={`/${i.name}`}>
       <Typography  className={classes.name} variant="h5">{i.name}</Typography></Link>
            <Rating name="size-small" defaultValue={2} size="small" /> 
       <Typography className={classes.price} variant="h6">
       <FontAwesomeIcon className={classes.icon} icon={faShoppingCart}/>&nbsp;&nbsp;{i.Price}&nbsp;&nbsp;
       <FavoriteBorderIcon className={classes.icon1}/>
       </Typography>
      </div>
      </div> 
      <Divider variant="middle" className={classes.divider} />
  </Fragment>
  </Grid> 
  )}
            
        </Grid>
  </Typography>
  </Paper>
      </Container>
      <br/>
    </React.Fragment>
 
        </div>
    )
}

export default TopSelling
