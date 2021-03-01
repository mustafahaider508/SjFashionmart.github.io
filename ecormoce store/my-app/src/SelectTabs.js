import React from 'react';
import {Tabs,Tab,AppBar,Paper} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import BestSeller from "./BestSeller";
import NewArrivals from "./NewArrivals";
import Sale from "./Sale";
const useStyles = makeStyles((theme) => ({
    
      root: {
     flexGrow: 1,
     textAlign:"center",
     alignItems:"center",
     justifyContent:"space-between",
     
     paddingLeft:theme.spacing(30),
      paddingRight:theme.spacing(30),
          },
   
}))
    

const  SelectTab = props => {
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
    history.push(`/SelectTab/${TabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
    };
    return (
        <div>
       
             <Tabs  centered   value={SelectedTab} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Best Seller"  />
          <Tab label="New Arrivals"  />
          <Tab label="Sale" />
        </Tabs>
        {SelectedTab === 0 && <BestSeller />}
        {SelectedTab === 1 && <NewArrivals />}
        
        </div>
    )
}

export default SelectTab
