import React from 'react';
import { Container, CssBaseline, Grid, Typography,Paper,Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container:{
        maxWidth:"100%",    
        minheight: '100vh',
        textAlign:"center", 
        paddingTop:theme.spacing(3),

    },
    paper:{
        width:"100%",
        height:"35vh",
        backgroundColor:"#fff",
       backgroundImage:("url(https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-noble-quartz-watch-large-promotional-texture-black-background-image_154635.jpg)"),
        borderRadius:"2px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        fontFamily:"Bebas Neue, cursive",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
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
       backgroundImage:("url(https://laxmijewellersshop.net/images/15.jpg)"),
       backgroundColor:"white",
       height: '35vh',
       display: 'flex',
       alignItems:"center",
       justifyContent:"center",
       flexDirection:"column",
       backgroundPosition:"center",
       backgroundSize:"cover",
       [theme.breakpoints.down("md")]:{
        boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
        backgroundSize:"cover",
        backgroundColor:"#505050",
        backgroundBlendMode:"multiply",
        color:"white",
       },
       

    },
   name:{
    fontFamily:"'Roboto Slab', serif",
    fontWeight:"bold",
    color:"#FF6702",
    fontSize:"40px",
    paddingLeft:theme.spacing(44),
    [theme.breakpoints.down('md')]:{
        fontSize:"28px",
    paddingLeft:theme.spacing(0),
    
    }

   },

   namee:{
    fontFamily:"'Roboto Slab', serif",
    fontWeight:"bold",
    color:"#FF6702",
    fontSize:"40px",
    paddingLeft:theme.spacing(52),
    [theme.breakpoints.down('md')]:{
        fontSize:"28px",
    paddingLeft:theme.spacing(0),
    
    }

   },

   name2:{
    fontFamily:"Bebas Neue, cursive",
    color:"#fff",
    textAlign:"center",
    paddingLeft:theme.spacing(50),
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
     paddingLeft:theme.spacing(50),
     [theme.breakpoints.down('md')]:{
        fontSize:"15px",
        paddingLeft:theme.spacing(0),
        paddingTop:theme.spacing(1),
        textAlign:"center",
    }
   },
   Button:{
    color:"#fff",
    background:"#FF6702",
    border:"1px solid #FF6702",
   
    "&:hover ":{
        backgroundColor:"#FF6702",
        color:"#fff",
   },
},
}))

function Box() {
    const classes = useStyles();
    return (
        <div>
        <>
        <CssBaseline />
       
        <Typography component="div" className={classes.container} >
            <Grid container spacing={2}>
          
            <Grid item  md={6} sm={6} xs={12}>
            <Paper className={classes.paper}>
        <Typography component="div" style={{display:"flex",flexDirection:"column",justifyContent:"center"}} > 
         <Typography className={classes.namee} variant="h2">WATCH</Typography>
        <Typography className={classes.name2} variant="h5" >NEW COLLECTION</Typography>
       
        <Typography  className={classes.div} variant="h6">
        <Button className={classes.Button}   variant="outlined">See More</Button>
        </Typography> 
         </Typography> 
        </Paper>
           </Grid>


           
           <Grid item  md={6} sm={6} xs={12}>
            <Paper className={classes.paper1}>
        <Typography component="div" style={{display:"flex",flexDirection:"column",justifyContent:"center"}} > 
         <Typography className={classes.name} variant="h4">JEWELLERY</Typography>
        <Typography className={classes.name2} variant="h5" >NEW COLLECTION</Typography>
       
        <Typography  className={classes.div} variant="h6">
        <Button className={classes.Button}   variant="outlined">See More</Button>
        </Typography> 
         </Typography> 
        </Paper>
           </Grid>


        
            </Grid>
        </Typography>
     
        </>    
        </div>
    )
}

export default Box
