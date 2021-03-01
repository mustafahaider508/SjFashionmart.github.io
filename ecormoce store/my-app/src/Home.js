import React from 'react'
import Header from "./Header";
import {Tabs, Tab,AppBar,Paper,Typography,Button, Container,Hidden,Divider} from "@material-ui/core";
import Catagory from "./Catagory";
import "./Home.css";
import SliderHome from "./SliderHome";
import SelectTab from "./SelectTabs";
import ShopByCat from "./ShopByCat";
import Img from "./Img";
import {CssBaseline} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import BestSeller from "./BestSeller";
import NewArrivals from "./NewArrivals";
import Sale from "./Sale";
import FlashSale from './FlashSale';
import IkeaBanner from "./IkeaBanner";
import Box from "./Box";
import SaleCounter from "./SaleCounter";
import TopSelling from "./TopSelling";
import Simple from "./MultiSlider";
import  {Electronics,WomenFashion,HomeLiving,MenFashion,KidFashion,Makeup,Mobile,Footer,Security} from "./HomePageCat";
import Box1 from "./Box1";
import Product from "./Product";
import { Route,Switch,Link,BrowserRouter} from "react-router-dom";
import {Fashion,Menfashion} from "./Fashion";
import ProductSlider from "./ProductSlider";

const useStyles = makeStyles((theme) =>({
  root:{
    // background:"#f5f5f5",   
  },
  heading:{
    padding:"0px", 
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
    width:"30vh",
    height:"4px",
    [theme.breakpoints.down("md")]:{
      width:"18vh",
    }
  
   },
   tab:{
 
     paddingTop:theme.spacing(1),
     fontSize:"50px",
     fontWeight:600,
     
   },
   simple:{
     paddingBottom:theme.spacing(0),
    
   },
   SimpleName:{
    fontSize:"22px",
    fontWeight:600,
    paddingLeft:"10px",
  fontFamily:"'Roboto Slab', serif",
  paddingBottom:theme.spacing(1),
  [theme.breakpoints.down("md")]:{
    fontSize:"20px",
  }

 

   },
   div1:{
    display:"flex",
    flexDirection:"flex-end",
    justifyContent:"space-between",
    paddingTop:theme.spacing(3),
 paddingBottom:theme.spacing(1),
},
 divv:{
  padding:theme.spacing(2),

 },
   
      

   SimpleName2:{
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
})) 




function Home(props) {


  const Saleitems=[
    {
      name:"Stylish Womens Flats Comfortable Low-Heele",
      Price:"14,430",
      true:true,
      img:"https://4.imimg.com/data4/PS/PL/MY-28598010/party-wear-shirts-500x500.jpg",
    
    },
    {
      name:"Violet Foundation",
      Price:"500",
      Price2:"Rs.600",
      true:true,
      per:"-5%",
      img:"https://static-01.daraz.pk/p/ab4400668819bbc60954310cef1c8506.jpg_200x200q80-product.jpg_.webp",
    
    },
    {
      name:"Original Xiaomi Youpin TIMEROLLS-COB Watch",
      Price:"7,075",
      Price2:"Rs.11,757",
      true:true,
      per:"-40%",
      img:"https://static-01.daraz.pk/p/035b53a4f664379f9879f88b3c92e477.jpg_200x200q80-product.jpg_.webp",
    
    },
    {
      name:"Black Stylish Boski Ladies Kurti Embroidery Kurtis",
      Price:"1,550",
      Price2:"Rs.2000",
      true:true,
      per:"-40%",
      img:"https://static-01.daraz.pk/p/9113b625149e583efefb471508e020ee.jpg_200x200q80-product.jpg_.webp",
    
    },
    {
      name:"New Hand Portable Blender Mixer USB Charging Mode",
      Price:"1,099",
      Price2:"Rs.2,199",
      true:true,
      per:"-50%",
      img:"https://static-01.daraz.pk/p/mdc/1601e692fecfeffe9e213b587eecd8be.jpg_200x200q80-product.jpg_.webp",
     
    },
    {
      name:"Mini Flower Pot for Decoration - 1pc",
      Price:"248",
      Price2:"Rs.499",
      true:true,
      per:"-50%",
      img:"https://static-01.daraz.pk/p/19a418ff7f9644e6fce4adb3c56d83d9.jpg_200x200q80-product.jpg_.webp",
     
    },
  
    ]
  
     console.log(Saleitems[0]);
  
  
    const product=()=>[
      //arrvil poduct  
      Saleitems[0],Saleitems[1],Saleitems[2],Saleitems[3],Saleitems[4],Saleitems[5] 
    ]

    const category=[{name:"/Fashion",arr:["T-shirts","shoes","paints","Ties & Caps"]},]

  const classes = useStyles();

  const {match,history} = props;
  const {params} = match;
  const {page} = params;

  const TabNameToIndex = {
      0:"BestSeller",
      1:"NewArrivals",
      2:"Sale",
  };

  const IndexToTabName = {
     BestSeller:0,
     NewArrivals:1,
     Sale:2,
 };
  const [SelectedTab, setSelectedTab] = React.useState(IndexToTabName[page]);

  const handleChange = (event, newValue) => {
      history.push(`/home/${TabNameToIndex[newValue]}`);
      setSelectedTab(newValue);
      };
    return (
        <div className={classes.root}>

        <Header  /> 
                  
      <Typography component="div">
           <Catagory />
      </Typography>   


     <Typography component="div">
          <SliderHome />
      </Typography>   


       <Typography component="div">
        <ShopByCat />
      </Typography>   

 
       <Typography component='div'>
        <Container maxWidth="lg">
        <FlashSale items={product()} />
        </Container>
      </Typography>  


         <Hidden mdDown>
            <Container maxWidth="lg">
            <Typography component="div" className={classes.simple} >
            <div style={{paddingTop:"30px"}}>
            <Paper variant="outlined">
            <div className={classes.div}>
            <div className={classes.div1}>
            <Typography variant="h6" className={classes.SimpleName}>Electronics</Typography>
            <div style={{paddingRight:"10px"}}>
            <Button className={classes.SimpleName2} variant="small">Shop more</Button>
            </div>
            </div>
            <Divider />
            <Simple  />
            </div>
            </Paper>
            </div>
            </Typography> 
            </Container>
         </Hidden>
    

        <Hidden mdUp>
         <Container maxWidth="lg">
        <Typography component="div" className={classes.simple} >
        <div style={{paddingTop:"30px"}}>
        <Paper variant="outlined" >
        <div className={classes.div}>
        <div className={classes.div1}>
        <Typography className={classes.SimpleName} variant="h6">ELECTRONICS</Typography>
        <div style={{paddingRight:"10px"}}>
        <Button className={classes.SimpleName2} >See More</Button>
        </div>
        </div>
        <Divider />
        </div>
        <Electronics />
        </Paper>
        </div>
        </Typography> 
        </Container>
        </Hidden>


        
        <Container maxWidth="lg">
        <Typography component="div" className={classes.simple} >
        <div style={{paddingTop:"30px"}}>
        <Paper variant="outlined" >
        <div className={classes.div}>
        <div className={classes.div1}>
        <Typography className={classes.SimpleName} variant="h6">MOBILE ACCESSORIES</Typography>
        <div style={{paddingRight:"10px"}}>
        <Button className={classes.SimpleName2} >See More</Button>
        </div>
        </div>
        <Divider />
        </div>
        <Mobile />
        </Paper>
        </div>
        </Typography> 
        </Container>
       


        
        <Container maxWidth="lg">
        <Typography component="div" className={classes.simple} >
        <div style={{paddingTop:"30px"}} >
        <Paper variant="outlined" >
        <div className={classes.div}>
        <div className={classes.div1}>
        <Typography className={classes.SimpleName} variant="h6">HOME APPLICATIONS</Typography>
        <div style={{paddingRight:"10px"}}>
        <Button className={classes.SimpleName2} >See More</Button>
        </div>
        </div>
        </div>
        <Divider />
        <HomeLiving />
        </Paper>
        </div>
        </Typography> 
        </Container>
        

        <Container maxWidth="lg">
        <Typography component="div" className={classes.simple} >
        <div style={{paddingTop:"30px"}} >
        <Paper variant="outlined" >
        <div className={classes.div}>
        <div className={classes.div1}>
        <Typography className={classes.SimpleName} variant="h6">WOMAN FASHION</Typography>
        <div style={{paddingRight:"10px"}}>
        <Button className={classes.SimpleName2} >See More</Button>
        </div>
        </div>
        </div>
        <Divider />
        <WomenFashion />
        </Paper>
        </div>
        </Typography> 
        </Container>
        
        
        
        <Container maxWidth="lg">
        <Typography component="div" className={classes.simple} >
        <div style={{paddingTop:"30px"}} >
        <Paper variant="outlined" >
        <div className={classes.div}>
        <div className={classes.div1}>
        <Typography className={classes.SimpleName} variant="h6">MEN'S FASHION</Typography>
        <div style={{paddingRight:"10px"}}>
        <Link style={{textDecoration: 'none',color:"#505050"}} to='/fFashion'>
        <Button className={classes.SimpleName2} >See More</Button>
        </Link>
        </div>
        </div>
        </div>
        <Divider />
    <MenFashion />
        </Paper>
        </div>
        </Typography> 
        </Container>
        


        <Container maxWidth="lg">
        <Typography component="div" className={classes.simple} >
        <div style={{paddingTop:"30px"}} >
        <Paper variant="outlined" >
        <div className={classes.div}>
        <div className={classes.div1}>
        <Typography className={classes.SimpleName} variant="h6">BABY & TOYS</Typography>
        <div style={{paddingRight:"10px"}}>
        <Button className={classes.SimpleName2} >See More</Button>
        </div>
        </div>
        </div>
        <Divider />
        <KidFashion />
        </Paper>
        </div>
        </Typography> 
        </Container>
        



        <Container maxWidth="lg">
        <Typography component="div" className={classes.simple} >
        <div style={{paddingTop:"30px"}} >
        <Paper variant="outlined" >
        <div className={classes.div}>
        <div className={classes.div1}>
        <Typography className={classes.SimpleName} variant="h6">HEALTH & BEAUTY</Typography>
        <div style={{paddingRight:"10px"}}>
        <Button className={classes.SimpleName2} >See More</Button>
        </div>
        </div>
        </div>
        <Divider />
        <Makeup />
        </Paper>
        </div>
        </Typography> 
        </Container>
        



        <Typography component="div">
        <Container maxWidth="lg">
        <Box1 />
        </Container>
    </Typography>   
  
 

            
      {/* <Img />  */}

               <center>
      <Container maxWidth="lg">
       <Typography component="div">
      <CssBaseline />
      <div style={{paddingTop:"30px"}} >
      <Paper variant="outlined">
      <div className={classes.divv}>
      <Typography className={classes.SimpleName} variant="h3">MEGA DEALS</Typography>
      <Typography className={classes.line} component="div" ></Typography>
      </div>
      </Paper>
      </div>
     
    <Typography component="div" className={classes.tab}>
      <Tabs   centered   value={SelectedTab} onChange={handleChange} >
          <Tab label="Best Seller"  />
          <Tab label="New Arrivals"  />
          <Tab label="Sale" />
        </Tabs>
        </Typography>
        {SelectedTab === 0 && <BestSeller />}
        {SelectedTab === 1 && <NewArrivals />}
        {SelectedTab === 2 && <Sale />}
        
        </Typography>  
        </Container>
        </center>  

      <Typography component="div" style={{paddingTop:"20px"}}>
      <IkeaBanner />
      </Typography> 
           
    <Typography component="div">
    <Container maxWidth="lg">
     <Box />
     </Container>
    </Typography>   

    {/* <Typography component="div" >
      <SaleCounter />
    </Typography>  */}

    <Typography component="div">
      <TopSelling />
    </Typography>
    

    <Typography component="div">
      <Security />
    </Typography>
    

    <Typography component="div">
      <Footer />
    </Typography> 
    <BrowserRouter>

    {product().map((i)=>
        <Route path={`/${i.name}`}>
            <Product title={i.name} price={`PKR ${i.Price}`} img={`${i.img}`}/>
            </Route>
            )}   
</BrowserRouter>

        

           {/* <Typography component="div">
             <ProductSlider />
           </Typography>  */}


    {/* <Typography component="div">
      <Product />
    </Typography> */}

   

        </div>
    )
}

export default Home
