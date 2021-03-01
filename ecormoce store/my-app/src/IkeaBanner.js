import React from 'react';
import {Grid, Paper, Typography,Button, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import "./Ikea.css";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) =>({
      container:{
        color: "white",
        maxWidth: "100%",
        height: "80vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        justifyContent: "center",
        alignItems: "center",
          backgroundImage:`url(${process.env.PUBLIC_URL + '/banner.png'})` ,
          [theme.breakpoints.down("md")]:{
            height: "40vh",
            width:"100%",
          },
         
      },
    heading:{
        color:"#fff",
    },
    heading1:{
        color:"#fff",
        fontSize:"180px",
        fontWeight:1000,
        paddingLeft:theme.spacing(13),
        paddingTop:theme.spacing(8),
        color:"yellow",
        [theme.breakpoints.down("md")]:{
            fontSize:"70px",
            paddingLeft:theme.spacing(13),
            paddingTop:theme.spacing(3),
           
        }
    
    },
    heading2:{
        color:"#fff",
        fontSize:"35px",
        fontWeight:600,
        paddingLeft:theme.spacing(10),
        paddingTop:theme.spacing(5),
        [theme.breakpoints.down("md")]:{
            fontSize:"20px",
            paddingLeft:theme.spacing(5),
            paddingTop:theme.spacing(2),
        }
    },
    div:{
        paddingTop:theme.spacing(2),
        paddingLeft:theme.spacing(10),
        [theme.breakpoints.down("md")]:{
            paddingLeft:theme.spacing(15),
            paddingTop:theme.spacing(0),
        },
    },
    Button:{
        backgroundColor:"yellow",
        [theme.breakpoints.down("md")]:{
            fontSize:"10px",
        },
    },
    arrow:{
        paddingLeft:theme.spacing(10),
            paddingTop:theme.spacing(1),
            [theme.breakpoints.down("md")]:{
                paddingLeft:theme.spacing(20),
            },
    }
   
}))

function IkeaBanner() {
 const classes = useStyles();
    return (
        <>
       <Container maxWidth="lg">
       <div   className={classes.container} >  
         <div className={classes.site_title}>
         <Typography className={classes.heading1}  variant="h2">IKEA</Typography> 
         <Typography className={classes.heading2}  variant="h3">Go shopping on your local site</Typography> 
        <Typography className={classes.arrow} component='div'> <ArrowDownwardIcon /></Typography> 
         <Typography className={classes.div} component="div">
         <Button  className={classes.Button} size="large" variant="contained" >Shop Now</Button>
         </Typography>
         
    {/* <Typography className={classes.heading1}  variant="h4">Wear a mask And Save lives</Typography>
      <Typography className={classes.heading2} variant="h4">Stay aware of the latest COVID-19 information by regularly checking updates from  your national and local public health authorities.</Typography>
      <Typography className={classes.heading} color="secondary" variant="h5">Select your Region</Typography> */}
      </div>
        </div>
        </Container>
       
        </>
    )
}

export default IkeaBanner
