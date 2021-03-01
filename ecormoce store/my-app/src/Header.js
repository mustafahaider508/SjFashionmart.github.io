import React from 'react';
import {Container,Typography,AppBar,Toolbar,Grid,Hidden,TextField,Badge,Menu,MenuItem} from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Drawer from "./Drawer";
import { faCoffee,faAt,faMobileAlt,faSearch,faShoppingBag,faUser,faArrowRight,faHeart,faBars, faCaretDown, faAlignCenter,faHeadphones,faMapMarkerAlt,faEnvelope,faShieldAlt,faAngleDown,faMoneyBillAlt,faTruckMoving} from '@fortawesome/free-solid-svg-icons'
// #dd5b27
const useStyles = makeStyles((theme) =>({
    header1:{
       backgroundColor:"black",      
       height:"40px",
       color:"white",
       display:"flex",
       justifyContent:"space-around",
       alignItems:"center"
    },
    headerRight:{
      color:"white",
        [theme.breakpoints.down("sm")]:{
            display:"none",

        },
    },
    appbar:{
        boxShadow:theme.shadows[0],
        backgroundColor:"#fff",
        color:"black",
        paddingTop:"10px",
        paddingBottom:"0px",
     
        
      },
      logo:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
       
      },
      pic:{
          width:170,
          marginTop:theme.spacing(1),
      },
      list:{
       
        display:"flex",
        justifyContent:"center",
         alignItems:"center",
         listStyle:"none",
         fontSize:"20px",
         fontWeight:500,
         color:"black",
         fontFamily:"'Roboto Slab', serif",
         cursor:"pointer",
         backgroundColor:"white",
         textDecoration:"none",
         marginTop:theme.spacing(1),
         "& li":{
           marginRight:"15px",
         },
         
         
        
      },
      Searchbar:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"0px",
        paddingBottom:"0px",
        color:"white",
       
       
      },
      SearchIcon:{
        color:"white",
        fontSize:"44px",
        backgroundColor:"#fc4a1a",
        padding:"10px",
      },
      icon:{
        display:"flex",
       justifyContent:"space-evenly",
        alignItems:"center",
        listStyle:"none",
        fontSize:"25px",
        color:"#505050",
        fontFamily:"'Roboto Slab', serif",
        [theme.breakpoints.down("md")]:{
          padding:"20px",

        }
      },
      hover:{
        "&:hover":{
          color:"#9e9e9e",
        },
      },
      user:{
        textDecoration:"none",
        color:"#424242",
       
      },

}))

function Header() {
 const classes = useStyles();
const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
     };
     const handleClose = () => {
     setAnchorEl(null);
        };

    return (
        <div>
          {/*------------Header of the Website---------*/}
            <React.Fragment>
                <Container maxWidth="xl" disableGutters>
                   <Typography component="div" style={{ minheight: '100vh' }}>
                   <Typography component="div" className={classes.header1}>
                   <Typography variant="body1"> 3-5 Business Days Delivery & Free Returns </Typography>
                   <Typography variant="body1" className={classes.headerRight} > 
                   <Link style={{ textDecoration:"none",color:"white"}}  href="mailto:info@softech-i.com" >
                   <FontAwesomeIcon icon={faAt}/> example@email.com</Link>
                           &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                   <Link style={{ textDecoration:"none",color:"white"}}  href="https://api.whatsapp.com/send?phone=923119171113&text=Hello">
                   <FontAwesomeIcon icon={faMobileAlt}/> +923119171113</Link>
                   </Typography>
                   </Typography>

                     {/*---------- Navbar Start----------------- */}

       {/*----------- Logo section--------- */}
            <AppBar position="static" className={classes.appbar}>
               <Toolbar >
                  <Grid container className={classes.grid1}>
                  <Grid item xs={6} sm={6} md={2}>
                    <img src={process.env.PUBLIC_URL + '/logoblack.png'} width="200px"/>
                  </Grid>
   
    {/*----------- Drawer--------- */}

             <Hidden only={["md","lg","xl"]}>
              <Grid item xs={6} sm={6} md={6}>
             <Drawer/>
              </Grid>
              </Hidden>
                            

        {/*------- Navbar List----------- */}
                   <Hidden only={["xs","sm"]}>
                      <Grid item xs={6} sm={6} md={5} >
                          <Typography component="ul" className={classes.list}>
                              <Link style={{textDecoration:"none",color:"inherit",paddingLeft:15}}  to="/">Home</Link> 
                              <Link style={{textDecoration:"none",color:"inherit",paddingLeft:15}}   to="/shop">Shop</Link>
                              <Link style={{textDecoration:"none",color:"inherit",paddingLeft:15}}   to="/offer">Offer</Link>
                              <Link style={{textDecoration:"none",color:"inherit",paddingLeft:15}}   to="/tracker">Tracker</Link>
                              <Link  style={{textDecoration:"none",color:"inherit",paddingLeft:15}}  to="/contact">Contact</Link>
                          </Typography>
                       </Grid>
                  </Hidden>
 
            {/*------- Search Bar----------- */}
                    <Grid item xs={12} sm={12} md={3} className={classes.Searchbar} >
                      <TextField style={{border:"2px solid #fc4a1a",backgroundColor:"#fff"}} fullWidth variant="outlined" size="small"/>
                      <FontAwesomeIcon color="white" icon={faSearch} className={classes.SearchIcon} color="black"/> 
                    </Grid> 

                {/*------- Icons----------- */}
                    <Grid item xs={12} sm={12} md={2}  className={classes.icon}>
                       <FontAwesomeIcon className={classes.hover} onClick={handleClick} icon={faUser} color="#505050"/>
                       <Badge badgeContent={0} showZero color="secondary">
                      <FontAwesomeIcon className={classes.hover}  icon={faShoppingBag} color="#505050"/>
                      </Badge>
                   </Grid>   
                 </Grid>
               </Toolbar>
             </AppBar>


           {/* ---------User Registration Menu---------- */}
            <Menu 
                  id="simple-menu"
                  anchorEl={anchorEl}
                   keepMounted
                   open={Boolean(anchorEl)}
                   onClose={handleClose}  
                        >
              <Link className={classes.user}   to="/signin"><MenuItem  onClick={handleClose}> Signin</MenuItem></Link>
              <Link  className={classes.user} to="/signup"><MenuItem  onClick={handleClose}>Register</MenuItem></Link>
            </Menu>

                   </Typography>
                </Container>
            </React.Fragment>
        </div>
    )
}

export default Header
