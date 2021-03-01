import React,{useState} from 'react';
import {CssBaseline,Typography,Container,Paper,Grid} from '@material-ui/core';
import { makeStyles,withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Rating from '@material-ui/lab/Rating';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faAt,faMobileAlt,faSearch,faShoppingCart,faUsers,faArrowRight,faHeart,faBars, faCaretDown, faAlignCenter,faHeadphones,faMapMarkerAlt,faEnvelope,faShieldAlt,faAngleDown,faMoneyBillAlt,faTruckMoving} from '@fortawesome/free-solid-svg-icons'
export default function Product(props) {
   

    const [state, setstate] = useState(props.img)

const useStyles=makeStyles({
    root:{
        backgroundColor: '#fff', 
    },
    container:{
    
      minheight: '100vh' 
    },
    paper:{
        maxheight:"500px"
    },
    img:{
       // border:"2px solid #FF6600",
        height: '400px',
        backgroundImage:`url(${state})`,
        backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"
    },
    imgs:{
        height:"100px",
        display:"flex",
        justifyContent:"center",alignItems:"center",
        //border:"2px solid #FF6600",
    },
    imgss:{
        //border:"2px solid #FF6600",
        height:"80px",
        backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",
        //width:"95px",
        flexGrow:"1",
        backgroundColor:"black",
        marginLeft:"4px",
        marginRight:"4px",
        "&:hover":{
            border:"1px solid #FF6600",
            backgroundColor:"gray",
        backgroundBlendMode: "multiply",
        }
    },
    div:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    },
    price:{
        color:"#FF6600",
        fontFamily:"Bebas Neue, cursive",
    },
  })
  const classes=useStyles();
  const click=(a)=>{
      setstate(a)
  }

  const StyledRating = withStyles({
    iconFilled: {
      color: '#FF6600',
    },
    iconHover: {
      color: '#FF6600',
    },
  })(Rating);

  const [value, setValue] = React.useState('white');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [state2, setstate2] = useState(1)
  const [state3, setstate3] = useState(true)

  const click2=(add)=>{
      if(add=="in"){
        setstate2(a=>a+1)
        setstate3(false)
      }
      else{
        setstate2(a=>a-1)
            if(state2==2){
                setstate3(true)
            }
      }
      
  }
  return (
    <React.Fragment>
      <CssBaseline />
     
    <br/>
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Typography component="div" className={classes.container}>
         <Grid container spacing={1}>
            
            <Grid item xs={12} sm={12} md={6} >
              <Paper variant="outlined" className={classes.paper}>
            <div className={classes.img}></div>
                       <Typography component="div" className={classes.imgs}>
                             <div
                              onClick={()=>click("https://www.dualshockers.com/wp-content/uploads/2016/06/XboxOneS_CnslCntrllr_Vrt_ANR_TransBG_RGB-2.jpg")} 
                              style={{backgroundImage:"url(https://www.dualshockers.com/wp-content/uploads/2016/06/XboxOneS_CnslCntrllr_Vrt_ANR_TransBG_RGB-2.jpg   )"}}
                               className={classes.imgss}/>
                             <div 
                             onClick={()=>click("https://www.slashgear.com/wp-content/uploads/2019/05/Fortnite_Xbox_One_Leak_Main.jpg")}
                              style={{backgroundImage:"url(https://www.slashgear.com/wp-content/uploads/2019/05/Fortnite_Xbox_One_Leak_Main.jpg)"}}
                                className={classes.imgss}/>
                             <div
                              onClick={()=>click("https://www.kindpng.com/picc/m/468-4682563_a-xbox-one-s-1tb-two-controller-console.png")} 
                              style={{backgroundImage:"url(https://www.kindpng.com/picc/m/468-4682563_a-xbox-one-s-1tb-two-controller-console.png)"}} 
                               className={classes.imgss}/>
                             <div 
                             onClick={()=>click("https://cdn.pocket-lint.com/r/s/970x/assets/images/148296-games-review-xbox-one-s-all-digital-edition-product-shots-image1-xct4hs5njv-jpg.webp")}
                              style={{backgroundImage:"url(https://cdn.pocket-lint.com/r/s/970x/assets/images/148296-games-review-xbox-one-s-all-digital-edition-product-shots-image1-xct4hs5njv-jpg.webp)"}}  
                              className={classes.imgss}/>
                             <div 
                             onClick={()=>click("https://cdn.pocket-lint.com/r/s/970x/assets/images/137915-games-review-xbox-one-s-review-image5-kytuqyr8mg.jpg")} 
                             style={{backgroundImage:"url(https://cdn.pocket-lint.com/r/s/970x/assets/images/137915-games-review-xbox-one-s-review-image5-kytuqyr8mg.jpg)"}}  
                             className={classes.imgss}/>

                       </Typography>
    
              </Paper>
              </Grid>


              <Grid item xs={12} sm={12} md={6} >
              <Paper variant="outlined" className={classes.paper} style={{padding:"10px"}}>
                <Typography variant="h4">{props.title}</Typography>
                <Divider />
                <br/>
                 
                <Typography component="div" className={classes.div}>
                    <Typography variant="h4" className={classes.price}>PKR 5,400</Typography>
                    <div style={{display:"flex",alignItems:"center"}}>
                    
                    <StyledRating size="medium" name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    <Typography component="legend" align="center">3.5</Typography>
                </div>

                <FavoriteBorderIcon style={{color:"#B01712"}}/>
                </Typography>
                <Divider />
        
                <Typography variant="body1" style={{color:"#505050",fontWeight:"bold"}}>Description</Typography>
                <Typography variant="body2" style={{color:"#505050"}}>The Xbox One is an eighth-generation home video game console developed by 
                Microsoft. Announced in May 2013, it is the successor to Xbox 360 and the third console in 
                the Xbox series of video game consoles. It was first released in North America, parts of Europe,
                 Australia, and South America in November 2013, and in Japan, China, and other European countries in September 2014.
                 </Typography><br/>
               
               
               
                
      <Divider />
                <Typography variant="body1"style={{color:"#505050",fontWeight:"bold"}}>Quantity</Typography><br/>
                <div style={{display:"flex"}}>
             
  <Button disabled={state3} onClick={()=>click2("de")} variant="outlined" color="primary" size="small">-</Button>
  <Typography  variant="h5" style={{marginLeft:"2px",marginRight:"2px",padding:"2px",paddingRight:"10px",paddingLeft:"10px"}}>{state2}</Typography>
  
  
  <Button  onClick={()=>click2("in")} variant="outlined" color="primary" size="small">+</Button>
            </div>
            
            <br/>
            
            <center>
            <Button variant="contained" color="secondary" size="large" style={{fontFamily:"Bebas Neue, cursive"}}>ADD TO CART</Button>&nbsp;&nbsp;
            <Button style={{fontFamily:"Bebas Neue, cursive"}} variant="contained" color="primary" size="large">BUY NOW</Button>
            </center>
              </Paper>
              </Grid> 
          </Grid>
        </Typography>
      </Container>
      </div>
    </React.Fragment>
  );
}