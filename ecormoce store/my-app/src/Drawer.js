import React, { useState } from 'react';
import clsx from "clsx";
import { makeStyles,Divider,List,ListItem,ListItemIcon,ListItemText,SwipeableDrawer} from "@material-ui/core";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import HomeIcon from '@material-ui/icons/Home';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { Slider } from 'react-burgers';
import {Link} from "react-router-dom";
import MailIcon from '@material-ui/icons/Mail';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const useStyles = makeStyles((theme) =>({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
  back:{
    backgroundColor:"white",
  },
  burger:{
    float:"right",
    boxShadow:theme.shadows[0],
    color:"black",
    
  },
  link:{
    textDecoration:"none",
    color:"#424242",
   
  },

}));

function Drawer() {
    const classes = useStyles();
    const[state,setState] = useState({
        top:false,
        left:false,
        bottom:false,
        right:false,
    });
    const [open, setOpen] = React.useState({
      "open1": false,
      "open2": false,
      "open3": false,
      "open4": false,
      "open5": false,
      "open6": false,
    });
  
  const handleClick1 = () => {
    setOpen({ ...open,open1:!open.open1});
  };
  const handleClick2 = () => {
    setOpen({ ...open,open2:!open.open2});
  };
  const handleClick3 = () => {
    setOpen({ ...open,open3:!open.open3});
  };
  const handleClick4 = () => {
    setOpen({ ...open,open4:!open.open4});
  };
  
  const handleClick5 = () => {
    setOpen({ ...open,open5:!open.open5});
  };
  const handleClick6 = () => {
    setOpen({ ...open,open6:!open.open6});
  };
    
  const toggleDrawer = (anchor, open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      };
      setState({ ...state, [anchor]: open });
    };  
  

    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation" 
        >
         <img src={process.env.PUBLIC_URL+"./logo.png"} style={{padding:"10px"}} width="200px"/>
         <Divider/>
  
          <List component="ul" className={classes.back} >
             {[{text:'HOME',Icon:<HomeIcon />,path:'/'}, 
             {text:'SHOP',Icon:<ShoppingBasketIcon />,path:'/shop'},
             {text:'OFFER',Icon:<CardGiftcardIcon />,path:'/offer'},
             {text:'TRACKER',Icon:<LocalShippingIcon />,path:'/tracker'},
             {text:"CONTACT",Icon:<ContactMailIcon />,path:'/contact'}].map((text, index) => (
           
           <Link className={classes.link} to={text.path}>
           <ListItem ContainerComponent="li" button key={text.text}>
           <ListItemIcon> {text.Icon}</ListItemIcon>
           <ListItemText  primary={text.text} />
           </ListItem>
           </Link>
            ))} 
        </List>
        <Divider />

        <List className={classes.back}>
        {[{name:"MEN'S FASHION",ope1:open.open1,func:handleClick1,Mensitem1:"T-SHIRT",Mensitem2:"SHOES",Mensitem3:"PAINTS",Mensitem4:"TIES & CAPS"},
        {name:"WOMEN's FASHTION",ope1:open.open2,func:handleClick2,Womenitem1:"SHOES",Womenitem2:"UNSTITCHED FIBRIC",Womenitem3:"DRESSES",Womenitem4:"MUSLIM WEAR"},
        {name:"MOBILE ACCESSORIES",ope1:open.open3,func:handleClick3,mob1:"MOBILE",mob2:"LAPTOP",mob3:"DESKTOP",mob4:"TEBLETS"},
        {name:"HOME & LIFESTYLE",ope1:open.open4,func:handleClick4,home1:"TOOLS",home2:"DECOR",home3:"KITCHEN",home4:"STATIONARY"},
        {name:"ELECTRONIC DEVICES",ope1:open.open5,func:handleClick5,elect1:"AIR COOLER",elect2:"AC",elect3:"HOME AUDIO",elect4:"IRON"},
        {name:"BABIES & TOYS",ope1:open.open6,func:handleClick6,kid1:"GAMES",kid2:"BABY GEAR",kid3:"MILK FORMULA",kid4:"NURSERY"},
        ].map((text, index) => (
 
          <List className={classes.back}>
          
          <ListItem button key={text.name} onClick={text.func}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text.name} />
            {text.ope1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          
          <Collapse in={text.ope1} timeout="auto" unmountOnExit>
        <List component="div">

         {/*==============MEN's FASHION Catogeries================= */}
         {/*---------- First Item--------------*/}

                  <Link className={classes.link} to="/">
                    <ListItem button>
                      <ListItemIcon> <StarBorder /> </ListItemIcon>
                      <ListItemText primary={text.Mensitem1} />
                    </ListItem>
                  </Link>

         {/*---------- Second Item --------------*/}
                  <Link className={classes.link} to="/">
                  <ListItem button>
                    <ListItemIcon> <StarBorder /> </ListItemIcon>
                    <ListItemText primary={text.Mensitem2} />
                  </ListItem>
                  </Link>
         {/*---------- Thired Item --------------*/}
                
                <Link className={classes.link} to="/">
                <ListItem button >
                  <ListItemIcon><StarBorder /> </ListItemIcon>
                  <ListItemText primary={text.Mensitem3} />
                </ListItem>
                </Link>
         {/*---------- Fourth Item --------------*/}
                <Link className={classes.link} to="/">
                <ListItem button>
                  <ListItemIcon> <StarBorder /> </ListItemIcon>
                  <ListItemText primary={text.Mensitem4 } />
                </ListItem>
                </Link>
        </List>
        <List component="div">
          {/*========================Women's FASHION Catogeries============== */}
           {/*---------- First Item--------------*/}
           <Link className={classes.link} to="/">
                    <ListItem button>
                      <ListItemIcon> <StarBorder /> </ListItemIcon>
                      <ListItemText primary={text.Womenitem1} />
                    </ListItem>
                  </Link>

           {/*---------- Second Item --------------*/}
                 <Link className={classes.link} to="/">
                   <ListItem button>
                    <ListItemIcon> <StarBorder /> </ListItemIcon>
                    <ListItemText primary={text.Womensitem2} />
                  </ListItem>
                </Link>

          {/*---------- Thired Item --------------*/}
                 <Link className={classes.link} to="/">
                   <ListItem button>
                    <ListItemIcon> <StarBorder /> </ListItemIcon>
                    <ListItemText primary={text.Womensitem3} />
                  </ListItem>
                </Link>
          
          {/*---------- Fourth Item --------------*/}
          <Link className={classes.link} to="/">
                   <ListItem button>
                    <ListItemIcon> <StarBorder /> </ListItemIcon>
                    <ListItemText primary={text.Womensitem4} />
                  </ListItem>
                </Link>
                </List>




      </Collapse>
          </List>
         ))}
      </List>
        </div>
      );


    return (
        <div>
           {['left'].map((anchor) => (
               <React.Fragment key={anchor}>
               <Slider  
                   active={state[anchor]}
                   color="black"
                   width={30}
                   lineSpacing={3}
                   lineHeight={3}
                   borderRadius={9}
                   onClick={toggleDrawer(anchor,true)}
                   className={classes.burger}
               />
               <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>


               </React.Fragment>
           ))} 
        </div>
    )
}

export default Drawer
