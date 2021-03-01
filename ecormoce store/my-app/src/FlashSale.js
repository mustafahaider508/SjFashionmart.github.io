import {React,Fragment} from 'react';
import {makeStyles} from "@material-ui/core";
import {Divider,Paper,Card,CardActionArea,CardMedia,CardContent,CardActions,Typography,Button,Grid, Container} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import {Link} from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import Cardd from "./Card";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth:"100%",    
      },
      heading1:{
        
          fontSize:"22px",
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
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.9)",
          

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
      heading2:{
         
        textAlign:"left",
      fontSize:"14px",
        [theme.breakpoints.down("md")]:{
           fontSize:"10px",
        }
    },
    sale:{
        paddingLeft:theme.spacing(1),
        color:"#f57224",
    },
    Divider:{
     
    },
    paper:{
      padding:theme.spacing(2),
     
    },
    paperDiv:{
      paddingTop:theme.spacing(2),
    }
      
      
}))
   

    
      
function FlashSale(props) {
  var match = useRouteMatch();
  console.log(match);
    const classes = useStyles();
    return (
        <div>
            <>
            
         
             <Typography component="div" className={classes.container}>
              <div className={classes.paperDiv}>
             <Paper variant="outlined" className={classes.paper}>
             <Typography className={classes.heading1} variant="h3">FlashSale</Typography>
             </Paper>
             </div>

             <Paper variant="outlined">
             <div className={classes.div1}>
          
             <Typography variant="h6" className={classes.sale}>Sale items</Typography>
             <div style={{paddingRight:"10px"}}>
             <Button className={classes.Button2} variant="small">Shop more</Button>
             </div>
            </div>
            {/* <div className={classes.Divider}>
            <Divider className={classes.Divider} />
            </div> */}
          <Grid container spacing={1} style={{paddingTop:"0px"}}>
          {props.items.map(i =>
            <Fragment>
            <Grid item  lg={2}  md={4} sm={4} xs={6}>
           
             <Cardd link={`/${i.name}`}  name={i.name.slice(0,45)+"..."} img={i.img} Price={i.Price}
             Price2={i.Price}>
               
             </Cardd>
          
            
           </Grid>
           </Fragment>
           
           )}
          
           </Grid>
           </Paper>
           </Typography>
      
        
            </>
        </div>
    )
}

export default FlashSale
