import React from 'react';
import { Container, CssBaseline, Grid, Typography,Paper,Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {makeStyles} from "@material-ui/core";

const items=[{
    img:"http://localhost:3000/bag.png",
    name:"Ladies Bags",
    name2:"New collection",
    button:"Shop now",
},
{
    img:"http://localhost:3000/Cosmetic.png",
    name:"Cosmetics",
    name2:"New collection",
    button:"Shop now",
},
{
    img:"https://png.pngitem.com/pimgs/s/189-1895220_transparent-perfume-png-hd-picture-of-perfume-png.png",
    name:"Perfumes",
    name2:"New collection",
    button:"Shop now",
},
]








const useStyles = makeStyles((theme) => ({
    container:{
        maxWidth:"100%",    
        minheight: '100vh',
        textAlign:"center", 
        paddingTop:theme.spacing(3),

    },
    paper:{

        height:"180px",
        backgroundColor:"#F7F7F7",
        borderRadius:"2px",
       // border:" 2px solid #FF6600",
       boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        fontFamily:"Bebas Neue, cursive",
       

    },  
   name:{
    fontFamily:"'Roboto Slab', serif",
    fontWeight:"bold",
    color:"#FF6702",
    [theme.breakpoints.down('md')]:{
        fontSize:"25px",
        paddingRight:theme.spacing(1),
    }

   },
   name2:{
    fontFamily:"Bebas Neue, cursive",
    color:"#505050",
    [theme.breakpoints.down('md')]:{
        fontSize:"18px",
        paddingRight:theme.spacing(1),
    }
   },
   div:{
    fontFamily:"Bebas Neue, cursive",
    color:"#FF6702",
     paddingTop:theme.spacing(1),
     [theme.breakpoints.down('md')]:{
        fontSize:"18px",
        paddingRight:theme.spacing(1),
    }
   },
   Button:{
    color:"#FF6702",
    backgroundColor:"#FF6702",
        color:"#fff",
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
        <Typography component="div" className={classes.container}>
            <Grid container spacing={1}>
            {items.map((i) =>
            <Grid item  md={4} sm={12} xs={12}>
         
            <Paper className={classes.paper}>

        <img src={i.img} height="130" width="190px"/>
        <Typography component="div" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}} > 
         <Typography className={classes.name} variant="h4">{i.name}</Typography>
        <Typography className={classes.name2} variant="h5" >{i.name2}</Typography>
       
        <Typography  className={classes.div} variant="h6">
        <Button className={classes.Button}   variant="outlined">{i.button}  <FontAwesomeIcon icon={ faArrowRight} size="xs"/></Button>
        </Typography> 
         </Typography> 
      
        </Paper>
       
           </Grid>
           )}
            </Grid>
           
        </Typography>
        
        </>    
        </div>
    )
}

export default Box
