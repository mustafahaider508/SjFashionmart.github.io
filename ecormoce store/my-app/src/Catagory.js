import React from 'react';
import {Link} from "react-router-dom";
import {Hidden,Typography,Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown,} from '@fortawesome/free-solid-svg-icons';
import "./Catagory.css";

const useStyles = makeStyles((theme) => ({
    list:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
      },
    }));

    const arr1=[{
        name:"Men's Fashion",
        c1:"T-shirts",
        c2:"Shoes",
        c3:"paints",
        c4:"Ties & Caps"
      },
      {
       name:"Woman's Fashion",
       c1:"Unstitched Fabric",
       c2:"Shoes",
       c3:"Dresses & Skirts",
       c4:"Muslim Wear"
     },
   
     {
       name:"Jewellery",
       c1:"Gold",
       c2:"Silver",
       c3:"Artifical",
     
     },
     {
      name:"Mobile Accessories",
      c1:"Chargers",
      c2:"Cables",
      c3:"Wireless earpods",
      c4:"Hand free"
    },
   
     {
       name:"Home & LifeStyle",
       c1:"Decor",
       c2:"Tools",
       c3:"Kitchen",
       c4:"Stationery"
     },
   
     {
       name:"Fragrances",
       c1:"Mens",
       c2:"Womens",
       c3:"Attar",
       c4:"Body Spray"
     },
   
   
     {
       name:"Electronic Accessories",
       c1:"Milk Formula",
       c2:"Baby Gear",
       c3:"Games",
       c4:"Nursery"
     },
   ]
   

function Catagory() {
    const classes = useStyles();
    return (
        <div>
            <Hidden only={["xs","sm"]}>
      <Typography component="div" className={classes.list}>
        {arr1.map((v,i)=>
        <ul>
        <li class="dropdown">
        <a href="#" class="dropbtn">{v.name}&nbsp;&nbsp;<FontAwesomeIcon icon={faAngleDown}/></a>
          <div class="dropdown-content">
     
         <Link to={`/${v.name}/${v.c1}`}>{v.c1}</Link>
        <Link to={`/${v.name}/${v.c2}`}>{v.c2}</Link>
        <Link to={`/${v.name}/${v.c3}`}>{v.c3}</Link>
        <Link to={`/${v.name}/${v.c4}`}>{v.c4}</Link> 
        </div>
          </li>
        </ul>
        )} 
</Typography>
</Hidden> 
        </div>
    )
}

export default Catagory
