import React from 'react';
import {makeStyles} from "@material-ui/core";
import {Divider,Card,CardActionArea,CardMedia,CardContent,CardActions,Typography,Button,Grid, Container} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import {
  Link 
 
} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth:"100%",   
        textAlign:"left", 
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
        width:"95%",
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
         fontSize:"8px",
     
         [theme.breakpoints.down("md")]:{
            fontSize:"11px",
        
         },
         "&:hover ":{
            backgroundColor:"#f57224",
            color:"#fff",
        },
      },
      image:{
        
      width:"100%",
   
        [theme.breakpoints.down('md')]:{
            width:"100%",
            
        },
         
      },
      heading:{
          textAlign:"left",
          justifyContent:"flex-start",
        fontSize:"14px",
          [theme.breakpoints.down("md")]:{
             fontSize:"10px",
          }
      },
      div1:{
          display:"flex",
          flexDirection:"flex-end",
          justifyContent:"space-between",
          paddingTop:theme.spacing(0),
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
    slider:{
        maxWidth:"100%",
        height:"60vh",
   justifyContent:"space-evenly",
    }
      
      
}))
   

function Cardd(props) {
    const classes = useStyles();
    return (
        <div>
      
  
         

          
         
            <Card  variant="outlined" className={classes.card}>
            <Link style={{textDecoration: 'none',color:"#505050"}} to={props.link}>
            <Grid container >
           <Grid item lg={12}>
          
                 <CardMedia  className={classes.image}
                    component="img" image={props.img} /> 
                     </Grid>
         </Grid>
                     <CardContent >
                     
                  <Typography variant="h5" className={classes.heading} variant="body1">{props.name.slice(0,30)+"..."}</Typography>
                 
                  <Typography className={classes.Price} variant="h6">{props.Price}</Typography>
                  <div className={classes.div}>
                  <Typography className={classes.Price2} variant="body2">{props.Price2}
                  </Typography>
                  <Typography className={classes.Per}  variant="body2">{props.Per}</Typography>
                  </div>
                  <Rating className={classes.Rating} name="size-small" defaultValue={5} size="small" /> 
                  
                
                   </CardContent>
                   <center>
                   <Typography style={{paddingBottom:"10px"}} component="div">
                   <Button   className={classes.Button} variant="outlined">Add To Cart</Button>
                   </Typography>
                   </center>
                   </Link>
            </Card>
        
        
        </div>
    )
}

export default Cardd
