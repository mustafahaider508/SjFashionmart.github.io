import {React,useState,useRef,useEffect} from 'react';
import {Typography,Grid,Paper, Button, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container:{
        maxWidth:"100%",
        paddingTop:theme.spacing(3),
    },
    img:{
        height:"60vh",
        paddingLeft:theme.spacing(15),
        paddingTop:theme.spacing(5),
        [theme.breakpoints.down("md")]:{
            height:"50vh",
            paddingLeft:theme.spacing(0),
        },
    },

    paper:{
        display:"flex",
        justifyContent:"space-between",
        [theme.breakpoints.down("md")]:{
           flexDirection:"column",
        },
    },
    heading:{
        paddingTop:theme.spacing(10),
        paddingLeft:theme.spacing(30),
        color:"#FF6702",
        fontSize:"20px",
        [theme.breakpoints.down("md")]:{
            fontSize:"15px",
            textAlign:"center",
            fontWeight:600,
            paddingTop:theme.spacing(7),
            paddingLeft:theme.spacing(0),

        },
    },
    name:{
        fontSize:"50px",
        paddingTop:theme.spacing(2),
        [theme.breakpoints.down("md")]:{
            fontSize:"23px",
            fontWeight:600,
            paddingLeft:theme.spacing(0),
            paddingTop:theme.spacing(2),
            textAlign:"center",
        },
    },
    div:{
        display:"flex",
        justifyContent:"center",
        paddingTop:theme.spacing(3),
        [theme.breakpoints.down("md")]:{
            justifyContent:"center",
        }
    },
    span:{
        fontSize:"30px",
        justifyContent:"space-between",
        paddingLeft:theme.spacing(4),
        paddingRight:theme.spacing(4),
        [theme.breakpoints.down("md")]:{
            fontSize:"18px",
            paddingLeft:theme.spacing(2),
            paddingRight:theme.spacing(2),
         
        }
    },
    number:{
        fontSize:"45px",
        [theme.breakpoints.down("md")]:{
            fontSize:"22px",
            fontWeight:600,
    
        }
    },
    small:{
        color:"#757575",
        fontSize:"18px",
        textAlign:"center",
        [theme.breakpoints.down("md")]:{
            fontSize:"12px",
        
        }
    },
    button:{
        backgroundColor:"#FF6702",
        color:"#fff",
    border:"1px solid #FF6702",
    fontSize:"20px",
    "&:hover ":{
        backgroundColor:"#FF6702",
        color:"#fff",
        
   },
   [theme.breakpoints.down("md")]:{
    fontSize:"10px",
    justifyContent:"center",
}
    },
    btnDiv:{
          paddingTop:theme.spacing(5),
          paddingBottom:theme.spacing(3),
          paddingLeft:theme.spacing(32),
          [theme.breakpoints.down("md")]:{
            justifyContent:"center",
            textAlign:"center",
            paddingLeft:theme.spacing(0),
            paddingTop:theme.spacing(2),
        }
    }


}))

function SaleCounter() {
     
    const[timerDays,SettimerDays] = useState('00');
    const[timerHours,SettimerHours] = useState('00');
    const[timerMinutes,SettimerMinutes] = useState('00');
    const[timerSecond,SettimeSecond] = useState('00');

    let interval = useRef();

    const startTimer = () =>{
        const countDownDate = new Date('jan 30, 2021 00:00:00').getTime();
        interval = setInterval(() =>{
               const now = new Date().getTime();
               const distance = countDownDate - now;
               const days =Math.floor(distance/(1000*60*60*24));
               console.log(days);
               const hours =Math.floor(distance % (1000*60*60*24)/ (1000*60*60));
               console.log(hours);
               const minutes =Math.floor(distance % (1000*60*60) / (1000*60));
               console.log(minutes);
               const second =Math.floor((distance % (1000*60)) /1000);
               console.log(second);
               
             if(distance < 0) {
                 //stop our timer
                 clearInterval(interval.current);
             }else{
                SettimerDays(days);
                SettimerHours(hours);
                SettimerMinutes(minutes);
                SettimeSecond(second);
             }
           
        },1000) 
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    })
       
    const classes = useStyles();
    return (
        <div >
            <>
            <Container maxWidth="lg">
            <Typography component="div" className={classes.container} >
            <Grid container>
             <Grid item xs={12} md={12}>
             <Paper variant="outlined" className={classes.paper}>
                <img className={classes.img} src="https://preview.colorlib.com/theme/malefashion/img/product-sale.png" />
                <Typography component="div"  >
                    <Typography className={classes.heading} variant="h6">DEAL OF THE WEEK </Typography>
                    <Typography className={classes.name} variant="h3">Multi-pocket Chest Bag Black</Typography>
                    <Typography  component="div" className={classes.div}>
                    <section>
                        <Typography className={classes.number} variant="h4">{timerDays}</Typography>
                        <Typography className={classes.small} variant="body1"><small>Days</small></Typography>
                        </section>
                        <span className={classes.span}>:</span>
                        <section>
                        <Typography className={classes.number} variant="h4">{timerHours}</Typography>
                        <Typography className={classes.small} variant="body1"><small>Hours</small></Typography>
                        </section>
                        <span className={classes.span}>:</span>
                        <section>
                        <Typography className={classes.number} variant="h4">{timerMinutes}</Typography>
                        <Typography className={classes.small} variant="body1"><small>Minutes</small></Typography>
                        </section>
                        <span className={classes.span}>:</span>
                        <section>
                        <Typography className={classes.number} variant="h4">{timerSecond}</Typography>
                        <Typography  className={classes.small} variant="body1"><small>Seconds</small></Typography>
                        </section>
                    </Typography>
                    <Typography className={classes.btnDiv} component="div">
                    <Button className={classes.button} variant="contained" size="large">Shop Now</Button>
                </Typography>
                </Typography>
               
                <Typography>

                </Typography>
            </Paper>
             </Grid>
            </Grid>
            </Typography>
            </Container>
            </>
        </div>
    )
}

export default SaleCounter
