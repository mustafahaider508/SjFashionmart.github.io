import { Button,CardContent,Paper, CardActionArea, Card,CardActions, CardMedia, Container, Grid, Typography,Divider} from '@material-ui/core'
import React from 'react';
import { Link,Switch,Route,useParams,
  useRouteMatch} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import Fashion from "./Fashion";


const useStyles = makeStyles((theme) => ({
    root:{
        width:"100%",
      minheight: '100vh',
       textAlign:"center", 
     
     

      
    },
   
    image:{
     
   
    },
Paper:{
  maxWidth:"100%",
  height:"150px",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    transition: "transform .2s",
    justifyContent:"center",
    alignItems:"center",
    cursor:"pointer",
    boxSizing: "border-box",
  
    "&:hover ":{
     transform:" scale(1.1)" /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
   },
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
   Button:{
    
     color:"black",
      fontSize:"20px",
      fontWeight:"500",
   },
   Name:{
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
    [theme.breakpoints.down("md")]:{
      textAlign:"center",
 

   }
  },
  name:{
    fontSize: "16px",
    padding:"0px",
    margin: 0,
    fontFamily:"'Fira Sans', sans-serif",
    color: "black",
    [theme.breakpoints.down("md")]:{
      fontSize:"12px",
 

   }
  },
  One:{
    fontSize:"15px",
    fontWeight:600,
    paddingTop:theme.spacing(1),
  },
  Two:{
    paddingLeft:theme.spacing(1),
    color:"orange",
    fontSize:"28px",
  },
  Three:{
    fontSize:"17px",
    fontWeight:600,
    paddingTop:theme.spacing(1),
    paddingLeft:theme.spacing(1),
  }

     
  
    
}));

const items=[{
    name:"Fashion & Lifestyle",
   img:"https://thumbs.dreamstime.com/b/fashion-coat-hanger-symbol-logo-design-fashion-coat-hanger-symbol-logo-design-illustration-111385990.jpg",
   link:"/Ffashion"
  },
  {
   name:"Woman's Fashion",
  img:"https://img.jakpost.net/c/2019/09/17/2019_09_17_79579_1568684756._large.jpg",
   c2:"Shoes",
   c3:"Dresses & Skirts",
   c4:"Muslim Wear",
   link:"/womenfashion"
 },
 {
  name:"Kid's Fashion",
  img:"https://www.alkaramstudio.com/media/homepagetool/homepagetool/nKids-revised.JPG",
  c2:"Baby Gear",
  c3:"Games",
  c4:"Nursery",
  link:"/Babies"
},
{
  name:"Jewellery",
  img:"https://assets0.mirraw.com/frontpages/5226/1_main_webp.webp?1600271401",
  c2:"Gold",
  c3:"Silver",
  c4:"Artifical",
  link:"/jewellery"
},



 {
   name:"Home & LifeStyle",
   img:"https://img.jakpost.net/c/2019/09/17/2019_09_17_79579_1568684756._large.jpg",
   c2:"Tools",
   c3:"Kitchen",
   c4:"Stationery",
   link:"/homeL"
 },
 {
  name:"Electronic Devices",
  img:"https://s3.amazonaws.com/wevv-com-44a/wp-content/uploads/ELECTRONICS.jpg",
  c2:"Tablets",
  c3:"Laptop",
  c4:"Desktop",
  link:"/electronic"
},
{
  name:"Home & LifeStyle",
  img:"https://img.jakpost.net/c/2019/09/17/2019_09_17_79579_1568684756._large.jpg",
  c2:"Tools",
  c3:"Kitchen",
  c4:"Stationery",
  link:"/homeL"
},
{
  name:"Electronic Devices",
  img:"https://s3.amazonaws.com/wevv-com-44a/wp-content/uploads/ELECTRONICS.jpg",
  c2:"Tablets",
  c3:"Laptop",
  c4:"Desktop",
  link:"/electronic"
},





]



function  ShopByCat() {
  
    const classes = useStyles();
    let { path, url } = useRouteMatch();
    
 
    return (
      <Container maxWidth="lg" className={classes.root}>
      <div style={{paddingTop:"30px"}}>
      <Paper variant="outlined">
             <Typography component="div" className={classes.container}>
             <center>
             <Typography className={classes.heading} varient="h3" >
                 SHOPPING BY CATEGORY
             </Typography>
             <Typography className={classes.line} component="div" ></Typography>
             </center>
             <div style={{paddingTop:"20px"}}>
             <Divider />
             <Divider />
             </div>

          <Grid container spacing={0} style={{paddingTop:"20px"}}>
          {items.map((i) =>
            <Grid item  lg={3}  md={4} sm={6} xs={6}>
            <Link style={{textDecoration: 'none'}} to={i.link}>
               <Card  variant="outlined" style={{border:"3px solid #eeeeee"}} >
                   <CardMedia  className={classes.Paper}
                       component="img" image={i.img} />
                         <CardContent >
                     <Typography className={classes.name} 
                   variant="h3">{i.name}
                   
                   {/* <Typography className={classes.One}>UP TO</Typography>
                   <Typography variant="h4" className={classes.Two}>50%</Typography>
                   <Typography className={classes.Three}>OFF</Typography> */}
                   </Typography>
                      </CardContent> 
               </Card>
               </Link>
           </Grid>
           )}
          
           </Grid>
           </Typography>
           </Paper>
           </div>
      </Container>
     
    )
}

export default ShopByCat





// <Typography  variant="h5" style={{backgroundColor:"#424242",color:"white",padding:"3px",fontFamily:"'Fira Sans', sans-serif",fontSize:"16px"}}>{i.name}</Typography>  

//  <Paper className={classes.Paper} style={{backgroundImage:"url("+i.img+")"}}>
//                 <Typography variant="h5" className={classes.Name}>{i.name}</Typography>

//                 </Paper>