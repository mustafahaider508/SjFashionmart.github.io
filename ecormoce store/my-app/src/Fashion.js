import React,{Fragment,useState}from 'react';
import {Container, Typography,Grid,Paper,Button,Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import Header from "./Header";
import Catagory from "./Catagory";
import Cardd from "./Card";
import Product from "./Product";
import { useRouteMatch,Switch,Route,Link,BrowserRouter} from "react-router-dom";
import Pagination from '@material-ui/lab/Pagination';
import { Footer } from './HomePageCat';

// ==================STYLING========================
const useStyles = makeStyles((theme) => ({
  banner:{
    color: "white",
    maxWidth: "100%",
    height: "60vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    justifyContent: "center",
    alignItems: "center",
      backgroundImage:`url(${process.env.PUBLIC_URL + '/banner2.jpg'})` ,
      [theme.breakpoints.down("md")]:{
        height: "40vh",
        width:"100%",
      },
  },
  container:{
    maxWidth:"100%",    
    minheight: '100vh',
    textAlign:"center", 
    paddingTop:theme.spacing(3),

},
paper:{
    width:"100%",
    height:"30vh",
    backgroundColor:"#fff",
   backgroundImage:("url(https://media.istockphoto.com/photos/mens-accessories-picture-id626085868?k=6&m=626085868&s=612x612&w=0&h=HQUL9JRekBsl534X3s6HEex8iDl4B2P29wWQZ3Xq95g=)"),
    borderRadius:"2px",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    fontFamily:"Bebas Neue, cursive",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
    backgroundSize:"cover",
    backgroundColor:"#505050",
    backgroundBlendMode:"multiply",
    color:"white",
    [theme.breakpoints.down("md")]:{
        boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
        backgroundSize:"cover",
        backgroundColor:"#505050",
        backgroundBlendMode:"multiply",
        color:"white",
       },
   

},  
paper1:{
    width:"100%",
   backgroundImage:("url(https://niche.com.pk/wp-content/uploads/2020/12/optimized-zthe.png)"),
   backgroundColor:"white",
   height: '30vh',
   display: 'flex',
   alignItems:"center",
   justifyContent:"center",
   flexDirection:"column",
   backgroundPosition:"center",
   backgroundSize:"cover",
   boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
   backgroundSize:"cover",
   backgroundColor:"#505050",
   backgroundBlendMode:"multiply",
   color:"white",
   [theme.breakpoints.down("md")]:{
    boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
    backgroundSize:"cover",
    backgroundColor:"#505050",
    backgroundBlendMode:"multiply",
    color:"white",
   },
   

},


paper2:{
  width:"100%",
 backgroundImage:("url(https://p.globalsources.com/IMAGES/PDT/BIG/165/B1171075165.jpg)"),
 backgroundColor:"white",
 height: '30vh',
 display: 'flex',
 alignItems:"center",
 justifyContent:"center",
 flexDirection:"column",
 backgroundPosition:"center",
 backgroundSize:"cover",
 boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
 backgroundSize:"cover",
 backgroundColor:"#505050",
 backgroundBlendMode:"multiply",
 color:"white",
 [theme.breakpoints.down("md")]:{
  boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
  backgroundSize:"cover",
  backgroundColor:"#505050",
  backgroundBlendMode:"multiply",
  color:"white",
 },
 

},

paper3:{
  width:"100%",
 backgroundImage:("url(https://i.pinimg.com/originals/bf/36/1f/bf361f7e76b7035b9c15d87892cc2782.jpg)"),
 backgroundColor:"white",
 height: '30vh',
 display: 'flex',
 alignItems:"center",
 justifyContent:"center",
 flexDirection:"column",
 backgroundPosition:"center",
 backgroundSize:"cover",
 boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
 backgroundSize:"cover",
 backgroundColor:"#505050",
 backgroundBlendMode:"multiply",
 color:"white",
 [theme.breakpoints.down("md")]:{
  boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
  backgroundSize:"cover",
  backgroundColor:"#505050",
  backgroundBlendMode:"multiply",
  color:"white",
 },
 

},

paper4:{
  width:"100%",
 backgroundImage:("url(https://buggtimes.com/wp-content/uploads/2019/10/5.jpg)"),
 backgroundColor:"white",
 height: '35vh',
 display: 'flex',
 alignItems:"center",
 justifyContent:"center",
 flexDirection:"column",
 backgroundPosition:"center",

 [theme.breakpoints.down("md")]:{
  boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
  backgroundSize:"cover",
  backgroundColor:"#505050",
  backgroundBlendMode:"multiply",
  color:"white",
 },
 

},


paper5:{
  width:"100%",
 backgroundImage:("url(https://static-01.daraz.pk/p/c3b2e52f36d15981aef1030223bbc27e.jpg)"),
 backgroundColor:"white",
 height: '35vh',
 display: 'flex',
 alignItems:"center",
 justifyContent:"center",
 flexDirection:"column",
 backgroundPosition:"center",
 boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
  backgroundSize:"cover",
  backgroundColor:"#505050",
  backgroundBlendMode:"multiply",
  color:"white",

 [theme.breakpoints.down("md")]:{
  boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
  backgroundSize:"cover",
  backgroundColor:"#505050",
  backgroundBlendMode:"multiply",
  color:"white",
 },
},

paper6:{
  width:"100%",
 backgroundImage:("url(https://apollo-singapore.akamaized.net/v1/files/9a08nscio27b1-PK/image;s=850x0)"),
 backgroundColor:"white",
 height: '35vh',
 display: 'flex',
 alignItems:"center",
 justifyContent:"center",
 flexDirection:"column",
 backgroundPosition:"center",
 boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
  backgroundSize:"cover",
  backgroundColor:"#505050",
  backgroundBlendMode:"multiply",
  color:"white",

 [theme.breakpoints.down("md")]:{
  boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
  backgroundSize:"cover",
  backgroundColor:"#505050",
  backgroundBlendMode:"multiply",
  color:"white",
 },
},
namee:{
fontFamily:"'Roboto Slab', serif",
fontWeight:"bold",
color:"white",
fontSize:"30px",
[theme.breakpoints.down('md')]:{
    fontSize:"28px",
paddingLeft:theme.spacing(0),

}

},

name2:{
fontFamily:"Bebas Neue, cursive",
color:"#fff",
textAlign:"center",
fontSize:"28px",
[theme.breakpoints.down('md')]:{
    fontSize:"22px",
    paddingTop:theme.spacing(1),
    paddingLeft:theme.spacing(0),
}
},
div:{
fontFamily:"Bebas Neue, cursive",
color:"#FF6702",
textAlign:"center",
 paddingTop:theme.spacing(1),
 [theme.breakpoints.down('md')]:{
    fontSize:"15px",
    paddingLeft:theme.spacing(0),
    paddingTop:theme.spacing(1),
    textAlign:"center",
}
},
Button:{
color:"#fff",
background:"black",
"&:hover ":{
    backgroundColor:"#FF6702",
    color:"#fff",
},
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
 backgroundColor:"#f57224",
    color:"#fff",

 [theme.breakpoints.down("md")]:{
    fontSize:"11px",
 },
 "&:hover ":{
    backgroundColor:"#f57224",
    color:"#fff",
},
},
sale:{
  paddingLeft:theme.spacing(1),
  color:"#f57224",
},
}))

// ===================MAIN FUNCTION WITH ROUTING ====================
export function Menfashion(props) {        
  var match = useRouteMatch();
  return (
  
      <>
    <Switch>
    <Route exact path={`/${props.pathName}`}>
    <Fashion Path={match} Path_2={props.path2_data} />
    </Route>
    </Switch>
  
       </>  
  );
}

//=========================FASHION COMPONENT==================
export function Fashion(props) {
 console.log(props.Path.path);

  const item1 = [
    
      {
        name:"cotton T-shirt",
        true:true,
        Price:"450",
        img:"https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1492015505/475740_X3G17_1060_002_100_0000_Light-Childrens-cotton-T-shirt-with-Gucci-logo.jpg",
        S:"3",md:3,
    },
    {
        name:" Men’s Office Shirts - Half Sleeve",
        Price:"600",
        true:true,
        img:"https://cms.cloudinary.vpsvc.com//image/fetch/q_auto:eco,w_700,f_auto,dpr_auto/https://s3-eu-west-1.amazonaws.com/sitecore-media-bucket/prod%2Fen%2F%7B41ED0F83-1DC4-4568-B273-4DBCCE756419%7D",
        S:"3",md:3,
    },
    {
        name:"Mens Stylish Check Shirts",
        Price:"340",
        true:true,
        img:"https://4.imimg.com/data4/PS/PL/MY-28598010/party-wear-shirts-500x500.jpg",
        S:"3",md:3,
    },
    {
      name:"full sleeves shirt",
      Price:"200",
      true:true,
      img:"https://imgmedia.lbb.in/media/2020/05/5eac0e7c833b2b7acdc583b2_1588334204878.jpg",
      S:"3",md:3,
  },
  {
      name:"Printed Formal Shirt",
      Price:"500",
      true:true,
      img:"https://cf.fgroup.workers.dev/bf/resize?key=1001270767BLUE_New_default_super_zoom_image_f47156a2835c47739496d7e81130dd81.jpg",
      S:"3",md:3,
  },
  {
      name:"Coral Men Formal Shirt",
      Price:"570",
      true:true,
      img:"https://techcity.pk/thumbnails/h/950/images/coral-plain-formal-shirt-1.JPG",
      S:"3",md:3,
  },
  {
    name:"Men's Flannel Casual Shirt",
    true:true,
    Price:"590",
    img:"https://hangten.com.pk/wp-content/uploads/2020/02/MH92632-RED-NAVY.jpg",
    S:"3",md:3,
},
{
    name:"Men's Casual Shirts",
    Price:"799",
    img:"https://static.fibre2fashion.com/MemberResources/LeadResources/1/2019/6/Buyer/19164885/Images/19164885_0_men-s-casual-shirts.jpg",
    S:"3",md:3,
    true:true,
},
{
    name:"2020 New Hot Mens Shirts",
    Price:"499",
    true:true,
    img:"https://www.dhresource.com/albu_298688897_00/1.0x0.jpg",
    S:"3",md:3,
},
{
    name:"Casual Shirts - Grey",
    Price:"780",
    true:true,
    img:"https://www.zellbury.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/z/e/zellbury_shit_for_man_casual_shirts_-_grey_-_zmcs20010-2.jpg",
    S:"3",md:3,
},
{
    name:"YNG Empire Black Cotton Casual",
    Price:"970",
    true:true,
    img:"https://menswear.pk/wp-content/uploads/2018/08/yng-empire-black-cotton-casual-shirt-for-men-mw124-image1.jpeg",
    S:"3",md:3,
},
{
    name:"RT CASUAL SHIRT F/S PL",
    Price:"999",
    true:true,
    img:"https://cdn.shopify.com/s/files/1/1033/9361/products/P19102-MR.jpg?v=1583316997",
    S:"3",md:3,
},
  ]

 const item2=[{

    name:"Casual Shirts For Men A161",
    Price:"699",
    true:true,
    img:"https://www.buyon.pk/image/cache/data/members/ayaz/casual-shirt-rf-10-01-600x600.jpg",
    S:"3",md:3,
},
{
    name:"Plain Casual Shirts",
    Price:"560",
    true:true,
    img:"https://3.imimg.com/data3/BY/ML/MY-9539982/gg-500x500.jpg",
    S:"3",md:3,
},
{
  name:"cotton T-shirt 1",
  Price:"450",
  img:"https://cdn.shopify.com/s/files/1/0044/6270/6788/products/ZohaZA-0041-2_800x.jpg?v=1595342198",
  S:"3",
},
{
  name:"METH WITH ME T-SHIRT 1",
  Price:"500",
  img:"https://cdn.shopify.com/s/files/1/0044/6270/6788/products/ZohaZA-0042_800x.jpg?v=1595342160",
  S:"3",
},
{
  name:" Men’s Office Shirts 1",
  Price:"600",
  img:"https://cdn.shopify.com/s/files/1/0044/6270/6788/products/ZohaZA-0043_800x.jpg?v=1595342124",
  S:"3",
},
{
  name:"tylish Check Shirts 1",
  Price:"340",
  img:"https://cdn.shopify.com/s/files/1/0044/6270/6788/products/ZohaZA-0044_800x.jpg?v=1595342036",
  S:"3",
},
{
  name:"Men Check Shirts 1",
  Price:"230",
  img:"https://cdn.shopify.com/s/files/1/0044/6270/6788/products/ZohaZA-0045_800x.jpg?v=1595341975",
  S:"3",
},
{
  name:"full sleeves shirt 1",
  Price:"200",
  img:"https://cdn.shopify.com/s/files/1/0044/6270/6788/products/ZohaZA-0048-2_800x.jpg?v=1595341837",
  S:"3",
},
{
  name:"Superstar Shoes 1",
  Price:"1050",
  img:"https://www.unze.com.pk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/l/3/l34144.jpg",
  S:"3",
},
{
  name:"Old Skool 1",
  Price:"1500",
  img:"https://www.unze.com.pk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/l/3/l34145.jpg",
  S:"3",
},
{
  name:" BLACK CONVERSE MEN1 ",
  Price:"2600",
  img:"https://www.unze.com.pk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/l/3/l34142.jpg",
  S:"3",
},
{
  name:"Loafers Shoes Men 1",
  Price:"2340",
  img:"https://www.unze.com.pk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/l/3/l34139.jpg"
},
 ]

const item3=[
{
  name:" Loafer Shoes 1",
  Price:"2130",
  img:"https://www.unze.com.pk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/l/3/l34136.jpg",
  S:"3",
},
{
  name:"Men's Imported Shoes 1",
  Price:"2100",
  img:"https://www.unze.com.pk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/l/3/l33992.jpg",
  S:"3",
},
{
  name:"Waliicorners Men 1",
  Price:"3500",
  img:"https://www.unze.com.pk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/l/3/l33851.jpg",
  S:"3",
},
{
  name:"Nike® Tanjun Mens ",
  Price:"3350",
  img:"https://s7d9.scene7.com/is/image/JCPenney/DP0330202017003493M?resmode=sharp2&op_sharpen=1&wid=350&hei=350",
  S:"3",md:3,
},
{
  name:"Merkmak Bristish Style Men",
  Price:"3670",
  img:"https://shoedazed.com/image/cache/catalog/Merkmakmen//Merkmak-Bristish-Style-Men-Shoes-Fashion-Pointed-Toe-Lace-up-Dress-Shoes-Business-Formal-Footwear-Me-4000166159568-3-550x550.jpeg",
  S:"3",md:3,
},
{
  name:"Classic Men Dress Shoes",
  Price:"7600",
  img:"https://cf.shopee.ph/file/9bd54421a7ff68c6b4feea387bc6c974",
  S:"3",md:3,
},
{
  name:" Men's Business Genuine Leather",
  Price:"3740",
  img:"https://cdn.shopify.com/s/files/1/1509/8876/products/32391921ae0c42c560f3d8a8b256ae8b_grande_7cc56e1b-52f7-4a39-b2a4-bc8d4e71a5c4_grande.jpg?v=1571440499",
  S:"3",md:3,
},
{
  name:"KAAUM Luxury Pointy",
  Price:"230",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQBTL5ezgPriaXsKY-K8nWRxdF1Pe4sGgoJw&usqp=CAU",
  S:"3",md:3,
},
{
  name:" Fashion Leather Flat Dress Shoes",
  Price:"2200",
  img:"https://cdn.shopify.com/s/files/1/1509/8876/products/Shoes-Men-Fashion-leather-Shoes-Flat-Casual-Shoes-DB030_5f807910-b134-49af-94fc-20145d968216_grande.jpg?v=1571441054",
  S:"3",md:3,
},
{
  name:"Fashion Studded Men's Casual Loafers",
  Price:"4500",
  img:"https://www.dhresource.com/0x0/f2/albu/g1/M01/09/B3/rBVaGFnx2-SABUyfAADPkAjsncE375.jpg",
  S:"3",md:3,
},
{
  name:"2018 New Concept Luxury Men",
  Price:"1570",
  img:"https://www.dhresource.com/0x0/f2/albu/g5/M00/04/85/rBVaJFoEBnmAQgBYAAGgavEYz2k045.jpg",
  S:"3",md:3,
},
{
  name:"Mens Slim Fit Business",
  Price:"1590",
  img:"https://ae01.alicdn.com/kf/HTB1J0psazDuK1RjSszdq6xGLpXaS/New-2019-Mens-Slim-Fit-Business-Dress-Pants-for-Men-Suit-Pants-Ankle-Length-Men-Summer.jpg",
  S:"3",md:3,
},
{
  name:"Men Suit Pants Ankle",
  Price:"7199",
  img:"https://cdn.shopify.com/s/files/1/0020/0762/9883/products/New-2019-Mens-Slim-Fit-Business-Dress-Pants-for-Men-Suit-Pants-Ankle-Length-Men-Summer_a00825d1-ad6d-4251-a01c-7c51a0ff91eb_2000x.jpg?v=1572110687",
  S:"3",md:3,
},
{
  name:"U&SHARK",
  Price:"4999",
  img:"https://ae01.alicdn.com/kf/HTB11nPhc6bguuRkHFrdq6z.LFXaN/U-SHARK-New-Arrival-Black-Formal-Business-Suit-Pants-Men-Brand-Clothing-Fashion-Leisure-Suit-Pants.jpg",
  S:"3",md:3,
},
{
  name:"Sport Pants for Men",
  Price:"1780",
  img:"https://www.folksgo.com.au/wp-content/uploads/2018/12/New-Gym-Sport-Pants-Men-Jogging-Pants-Fitness-Joggers-Grey-Pants-Men-Sportswear-Sweatpants-Training-Trousers.jpg",
  S:"3",md:3,
},
{
  name:"Sweatpants Running Pants",
  Price:"1970",
  img:"https://ae01.alicdn.com/kf/Hf535d9eb9026409c87a91a109e66e807G/New-Jogging-Pants-Men-Sport-Sweatpants-Running-Pants-GYM-Pants-Men-Joggers-Cotton-Trackpants-Slim-Fit.jpg_q50.jpg",
  S:"3",md:3,
},
{
  name:" Go-Dry Built-In Flex",
  Price:"1399",
  img:"https://5.imimg.com/data5/TF/IW/MY-17554435/men-casual-pant-500x500.jpg",
  S:"3",md:3,
},

{
  name:"Formal Grey Trouser ",
  Price:"1560",
  img:"https://www.lordsindia.com/image/cache/1/TROUSER/103992-16-500x500.jpg",
  S:"3",md:3,
},
]

const jewelleryItems=[
  {
    name:"1 Pair Women Dangle Earrings Wood Star Vintage Lady Girl Simple Earring Jewelry Gift",
  Price:"1560",
  img:"https://static-01.daraz.pk/p/ff48e68b4ee83408b5fbe5da78e3e124.jpg",
  

},
{
  name:"Formal Grey Trouser ",
  Price:"1560",
  img:"https://static-01.daraz.pk/p/9bd1d76395f14aa2fe3c64ea26e19d90.jpg",
  S:"3",md:3,
},
{
  name:"Formal Grey Trouser ",
  Price:"1560",
  img:"https://static-01.daraz.pk/p/1e9e24050f3dc939246bc781e97f07f5.jpg",
  S:"3",md:3,
},
{
  name:"Formal Grey Trouser ",
  Price:"1560",
  img:"https://static-01.daraz.pk/p/087eef9c236bdda6bcfea010f253ea19.jpg",
  S:"3",md:3,
},
{
  name:"Formal Grey Trouser ",
  Price:"1560",
  img:"https://www.lordsindia.com/image/cache/1/TROUSER/103992-16-500x500.jpg",
  S:"3",md:3,
},
{
  name:"Formal Grey Trouser ",
  Price:"1560",
  img:"https://www.lordsindia.com/image/cache/1/TROUSER/103992-16-500x500.jpg",
  S:"3",md:3,
},
{
  name:"Formal Grey Trouser ",
  Price:"1560",
  img:"https://www.lordsindia.com/image/cache/1/TROUSER/103992-16-500x500.jpg",
  S:"3",md:3,
},
{
  name:"Formal Grey Trouser ",
  Price:"1560",
  img:"https://www.lordsindia.com/image/cache/1/TROUSER/103992-16-500x500.jpg",
  S:"3",md:3,
},
]

//=================PAGE PAGINATION FUNCTION=======================
const [state, setstate] = useState(1)

  var matchh = useRouteMatch();
  console.log(matchh);

const change=(e)=>{
console.log(e.target)
setstate(parseInt(e.target.textContent))
   }

   if(state==1){
       var item=item1
}
else if(state==2){
   var item=item2
}
else{
   var item=item3
}

  const classes = useStyles();
  console.log(props);
    return (
    
      <>
       <Header  />           
          <Typography component="div">
           <Catagory />
          </Typography>  
    <BrowserRouter>
    <Route exact path={`${matchh.path}`}>
        <div>
   
        

         <Typography component="div" className={classes.banner}></Typography>
           <Typography component="div">
            <Container maxWidth="lg">
              <Typography component="div" className={classes.container} >
               <Grid container spacing={2}>
          
                <Grid item  md={6} sm={6} xs={12}>
                 <Paper className={classes.paper}>
                 <Typography component="div" style={{display:"flex",flexDirection:"column",justifyContent:"center"}} > 
                 <Typography className={classes.namee} variant="h2">MEN'S CLOTHING</Typography>
                 <Typography  className={classes.div} variant="h6">
                 <Link style={{textDecoration:"none"}} to={`${props.Path.path}/${props. Path_2[0]}`}>
                 <Button className={classes.Button}   variant="outlined">See More</Button>
                 </Link>
                 </Typography> 
                 </Typography> 
                 </Paper>
                </Grid>


                <Grid item  md={6} sm={6} xs={12}>
                <Paper className={classes.paper1}>
                <Typography component="div" style={{display:"flex",flexDirection:"column",justifyContent:"center"}} > 
                <Typography className={classes.namee} variant="h4">WOMEN'S CLOTHING </Typography>
                <Typography  className={classes.div} variant="h6">
                <Link style={{textDecoration:"none"}} to={`${props.Path.path}/${props. Path_2[0]}`}>
                <Button className={classes.Button}   variant="outlined">See More</Button>
                </Link>
                </Typography> 
                </Typography> 
                </Paper>
                </Grid>   


                <Grid item  md={6} sm={6} xs={12}>
                <Paper className={classes.paper2}>
                <Typography component="div" style={{display:"flex",flexDirection:"column",justifyContent:"center"}} > 
                <Typography className={classes.namee} variant="h4">MEN'S SHOES </Typography>
                <Typography  className={classes.div} variant="h6">
                <Link style={{textDecoration:"none"}} to={`${props.Path.path}/${props. Path_2[0]}`}>
                <Button className={classes.Button}   variant="outlined">See More</Button>
                </Link>
                </Typography> 
                </Typography> 
                </Paper>
                </Grid> 


                <Grid item  md={6} sm={6} xs={12}>
                <Paper className={classes.paper3}>
              <Typography component="div" style={{display:"flex",flexDirection:"column",justifyContent:"center"}} > 
              <Typography className={classes.namee} variant="h4">WOMEN'S SHOES </Typography>
              <Typography  className={classes.div} variant="h6">
              <Link style={{textDecoration:"none"}} to={`${props.Path.path}/${props. Path_2[0]}`}>
              <Button className={classes.Button}   variant="outlined">See More</Button>
              </Link>
              </Typography> 
              </Typography> 
              </Paper>
              </Grid> 


            <Grid item  md={12} sm={12} xs={12}>
            <Paper className={classes.paper4}>
            <Typography component="div" style={{display:"flex",flexDirection:"column",justifyContent:"center"}} > 
            <Typography className={classes.namee} variant="h4">JEWELLERY </Typography>
            <Typography  className={classes.div} variant="h6">
            <Link style={{textDecoration:"none"}} to={`${props.Path.path}/${props. Path_2[0]}`}>
            <Button className={classes.Button}   variant="outlined">See More</Button>
            </Link>
            </Typography> 
            </Typography> 
            </Paper>
            </Grid>     
            </Grid>
            </Typography>

 {/* ========================JEWELLERY ITEMS DISPLAY HERE=================== */}
            <Grid container spacing={1} style={{paddingTop:"20px"}}>
          {jewelleryItems.map(i =>
            <Fragment>
             <Grid item  lg={3}  md={4} sm={4} xs={6}>
              <Cardd link={`${matchh.path}/${i.name}`}  name={i.name.slice(0,45)+"..."} img={i.img} Price={i.Price}
                    Price2={i.Price}>
              </Cardd>  
             </Grid>
            </Fragment>
           )}
           </Grid>
           
          
  {/* ============================TWO BOXES=======================================  */}

  <Container maxWidth="lg">
              <Typography component="div" className={classes.container} >
               <Grid container spacing={2}>
          
                <Grid item  md={6} sm={6} xs={12}>
                 <Paper className={classes.paper5}>
                 <Typography component="div" style={{display:"flex",flexDirection:"column",justifyContent:"center"}} > 
                 <Typography className={classes.namee} variant="h2">WATCHES</Typography>
                 <Typography  className={classes.div} variant="h6">
                 <Link style={{textDecoration:"none"}} to={`${props.Path.path}/${props. Path_2[0]}`}>
                 <Button className={classes.Button}   variant="outlined">See More</Button>
                 </Link>
                 </Typography> 
                 </Typography> 
                 </Paper>
                </Grid>


                <Grid item  md={6} sm={6} xs={12}>
                <Paper className={classes.paper6}>
                <Typography component="div" style={{display:"flex",flexDirection:"column",justifyContent:"center"}} > 
                <Typography className={classes.namee} variant="h4">BAGS & ACCESSORIES</Typography>
                <Typography  className={classes.div} variant="h6">
                <Link style={{textDecoration:"none"}} to={`${props.Path.path}/${props. Path_2[0]}`}>
                <Button className={classes.Button}   variant="outlined">See More</Button>
                </Link>
                </Typography> 
                </Typography> 
                </Paper>
                </Grid>   
                </Grid>
                </Typography>
                </Container>




          
    {/* ===========================JUST FOR YOU SECTION========================= */}
         
        

         
      <Grid container style={{paddingTop:"20px"}}>
        <Grid item  md={12} sm={12} xs={12}>
          <Paper style={{backgroundColor:"#212121",height:"10vh"}} >
           <Typography component="div" style={{display:"flex",flexDirection:"column",justifyContent:"center"}} > 
             <Typography style={{color:"white",textAlign:"center",paddingTop:"20px",fontStyle:"italic"}} variant="h4">JUST FOR YOU</Typography>
           </Typography> 
          </Paper>
        </Grid>   
      </Grid>  
           </Container>
         </Typography>
        </div>

      
        <Container maxWidth="lg" style={{paddingTop:"20px"}}>
         <Paper variant="outlined">
          <Grid container spacing={1} style={{paddingTop:"0px"}}>
          {item.map(i =>
            <Fragment>
             <Grid item  lg={2}  md={4} sm={4} xs={6}>
              <Cardd link={`${matchh.path}/${i.name}`}  name={i.name.slice(0,45)+"..."} img={i.img} Price={i.Price}
                    Price2={i.Price}>
              </Cardd>  
             </Grid>
            </Fragment>
           )}
           </Grid>
            {/* ===============PAGINATION=========================================== */}
            <div style={{display:"flex",justifyContent:"center",paddingTop:"20px",paddingBottom:"20px"}}>
           <Pagination  page={state} onChange={change}  count={3} color="primary"/>
           </div>
           </Paper>
           
          
          </Container>
         
          </Route>
         

          {item.map(i=>
          
   <Route  path={`${matchh.path}/${i.name}`}>
   <Product title={i.name} price={`PKR ${i.Price}`} img={`${i.img}`}/>
   </Route>

  )}

  {jewelleryItems.map(i=>
          
          <Route  path={`${matchh.path}/${i.name}`}>
          <Product title={i.name} price={`PKR ${i.Price}`} img={`${i.img}`}/>
          </Route>
       
         )}
       
</BrowserRouter>
   <Footer /> 
        </>
    )
}


