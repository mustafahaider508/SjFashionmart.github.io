import React from "react"
import './App.css';
import {Box} from "@material-ui/core";
import {BrowserRouter,Redirect,Route,Switch} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import "./App.css";
import Home from "./Home";
import Shop from "./Shop";
import Tracker from "./Tracker";
import Offer from "./Offer";
import Contact from "./Contact";
import SliderHome from "./SliderHome";
import SelectTab from "./SelectTabs";
import {Menfashion} from "./Fashion";
import {MenFashion} from "./HomePageCat";
import Product from "./Product";

const useStyles = makeStyles((theme) =>({
  root:{
    background:"#eeeeee",   
  },
    
 

}));


const category=[{path1:"/Ffashion",path2:["MensClothing"]}]

  

function App(props) {
  const classes= useStyles();
  return (
    <div className="App">
  <BrowserRouter>
    <Box className={classes.root} >
       <Switch>
     <Route  path="/home" exact component={Home} />
     <Route path="/shop" component={Shop} />
     <Route  path="/tracker" component={Tracker} />
     <Route  path="/offer" component={Offer} />
     <Route   path="/contact" component={Contact} />
      <Redirect exact from="/" to="/home/BestSeller" />
     <Route  exact path="/home/:page?" render={props =><Home {...props} />} /> 


    
     </Switch> 

    </Box>
    <Switch>
    <Route path={category[0].path1}  component={()=>
           <Menfashion
           path2_data={category[0].path2} 
           pathName="Ffashion"
           />}/>  
    </Switch>
     


    
  </BrowserRouter>
    </div>
  );
}

export default App;
