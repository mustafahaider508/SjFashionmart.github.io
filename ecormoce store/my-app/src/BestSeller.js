import {React,Fragment} from 'react';
import {makeStyles} from "@material-ui/core";
import {Card,CardActionArea,CardMedia,CardContent,CardActions,Typography,Button,Grid, Container} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import {Link} from "react-router-dom";
import { useRouteMatch } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth:"100%",    
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
      }
      
}))
   

    const items=[{
        name:"Bottle Gift for girl pendent necklace red",
        Price:"545",
        Price2:"Rs.555",
        per:"-2%",
        img:"https://static-01.daraz.pk/p/19cf161b597f90c46761e962a25a5b01.jpg_200x200q80-product.jpg_.webp",
      
      },
      {
        name:"USB Charger Cradle Charging Dock ",
        Price:"1,108",
        Price2:"Rs.2,216",
        per:"-50%",
        img:"https://static-01.daraz.pk/p/38c5a800688c25abd8d29056bc902b63.jpg_200x200q80-product.jpg_.webp",
      
      },
      {
        name:" Men’s Office Shirts - Half Sleeve",
        Price:"1,350",
        Price2:"Rs.3,000",
        per:"-55%",
        img:"https://static-01.daraz.pk/p/1e960044f8203671e604553df22d1cdb.jpg_200x200q80-product.jpg_.webp",
      
      },
      {
        name:"Stylish Womens Flats Comfortable Low-Heele",
        Price:"14,430",
        img:"https://4.imimg.com/data4/PS/PL/MY-28598010/party-wear-shirts-500x500.jpg",
      
      },
      {
        name:"Violet Foundation",
        Price:"500",
        Price2:"Rs.600",
        per:"-5%",
        img:"https://static-01.daraz.pk/p/ab4400668819bbc60954310cef1c8506.jpg_200x200q80-product.jpg_.webp",
      
      },
      {
        name:"Original Xiaomi Youpin TIMEROLLS-COB Watch",
        Price:"7,075",
        Price2:"Rs.11,757",
        per:"-40%",
        img:"https://static-01.daraz.pk/p/035b53a4f664379f9879f88b3c92e477.jpg_200x200q80-product.jpg_.webp",
      
      },
      {
        name:"Black Stylish Boski Ladies Kurti Embroidery Kurtis",
        Price:"1,550",
        Price2:"Rs.2000",
        per:"-40%",
        img:"https://static-01.daraz.pk/p/9113b625149e583efefb471508e020ee.jpg_200x200q80-product.jpg_.webp",
      
      },
      {
        name:"New Hand Portable Blender Mixer USB Charging Mode",
        Price:"1,099",
        Price2:"Rs.2,199",
        per:"-50%",
        img:"https://static-01.daraz.pk/p/mdc/1601e692fecfeffe9e213b587eecd8be.jpg_200x200q80-product.jpg_.webp",
       
      },
      {
        name:"Mini Flower Pot for Decoration - 1pc",
        Price:"248",
        Price2:"Rs.499",
        per:"-50%",
        img:"https://static-01.daraz.pk/p/19a418ff7f9644e6fce4adb3c56d83d9.jpg_200x200q80-product.jpg_.webp",
       
      },
      {
        name:"MAANGE Makeup Brush Set Soft Hair Powder",
        Price:"1,726",
        Price2:"Rs.3,452",
        per:"-50%",
        img:"https://static-01.daraz.pk/p/2656810d7506a86183b942123447c22a.jpg_200x200q80-product.jpg_.webp",
       
      },
      {
        name:"Green Aqeeq Stone Silver Ring GB(5)4349",
        Price:"4,150",
        Price2:"Rs.5000",
        per:"-10%",
        img:"https://static-01.daraz.pk/original/28ffe2514b395a2456936e2898e16aa3.jpg_200x200q80-product.jpg_.webp",
       
      },
      {
        name:"Mini Flower Pot for Decoration - 1pc",
        Price:"248",
        Price2:"Rs.499",
        per:"-50%",
        img:"https://static-01.daraz.pk/p/19a418ff7f9644e6fce4adb3c56d83d9.jpg_200x200q80-product.jpg_.webp",
       
      },
      {
        name:"Blackweb wall charger with usb-c cable and usb-c ",
        Price:"1,500",
        Price2:"Rs.2500",
        per:"-50%",
        img:"https://static-01.daraz.pk/p/01f6148e06e9d86b7deb561815246b5a.jpg_200x200q80-product.jpg_.webp",
       
      },
      {
        name:"Customized Best Friend Forever Silk Hidden Zipper",
        Price:"745",
        Price2:"Rs.1,195",
        per:"-38%",
        img:"https://static-01.daraz.pk/p/dc5607acdc4134c2e3415aeb196cb82a.jpg_200x200q80-product.jpg_.webp",
       
      },
      {
        name:"150X120cm Car Heating Blanket 12V Winter Electric Blanket Energy Saving",
        Price:"7,316",
        Price2:"Rs.18,200",
        per:"-60%",
        img:"https://static-01.daraz.pk/p/63844c804be468374874951d3125d0cf.jpg_200x200q80-product.jpg_.webp",
       
      },
      {
        name:"Mini Flower Pot for Decoration - 1pc",
        Price:"248",
        Price2:"Rs.499",
        per:"-50%",
        img:"https://static-01.daraz.pk/p/19a418ff7f9644e6fce4adb3c56d83d9.jpg_200x200q80-product.jpg_.webp",
       
      },
      {
        name:"Mini Flower Pot for Decoration - 1pc",
        Price:"248",
        Price2:"Rs.499",
        per:"-50%",
        img:"https://static-01.daraz.pk/p/19a418ff7f9644e6fce4adb3c56d83d9.jpg_200x200q80-product.jpg_.webp",
       
      },
      {
        name:"Customized Best Friend Forever Silk Hidden Zipper",
        Price:"745",
        Price2:"Rs.1,195",
        per:"-38%",
        img:"https://static-01.daraz.pk/p/dc5607acdc4134c2e3415aeb196cb82a.jpg_200x200q80-product.jpg_.webp",
       
      },
      
      ]
      
      
function BestSeller(props) {
    const classes = useStyles();
    return (
        <div>
            <>
           
             <Typography component="div" className={classes.container}>

          <Grid container spacing={1} style={{paddingTop:"40px"}}>
          {items.slice(0,19).map(i =>
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
    
        
            </>
        </div>
    )
}

export default BestSeller
