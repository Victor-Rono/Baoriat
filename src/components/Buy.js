import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Buy.css"
import ImageUpload from "./ImageUpload";
import { useStateValue } from '../state/StateProvider';
import Avatar from "@material-ui/core/Avatar"
import {Home} from "@material-ui/icons"
import {GiFarmTractor, GiForestCamp, GiHobbitDwelling, GiHomeGarage, GiFamilyHouse, GiKenya} from "react-icons/gi"
import{FaBuilding, FaBookReader} from "react-icons/fa"
import {AiOutlineShop} from "react-icons/ai"
import{FiEdit} from "react-icons/fi"
const Buy = () => {
    const [{user}, dispatch] = useStateValue();
    const username = user.displayName;
    return (
        <>
               <center>
               {/* {
         username != undefined?(<>
         
         </>):(<>
          <h6 className="text-danger"><b>NOTE: </b>For easy use of the app, and to access all features, log in or create an account.</h6>
         </>)
       } */}


               <h5 className="headerText">Buy or sell assets and services within Uasin Gishu County. <Link to ="/about">Click here</Link> to learn more about us</h5>
      

  <b className="" aria-expanded="false" >
    Categories <i className="fa fa-angle-down"></i>
  </b>
</center>
        <div className="row">
   
</div>

<div className="container">
<div className="row padded">  
<Link className="col-xs-2 card buy" to = "/buy_land">         
            <div className="">
            
<div className="buy_header">
{/* <Avatar alt= {username} src={imageUrl} className="post_avatar"/> */}
<h5 className="buy_username">  </h5> 
</div>
    
<center>
<GiForestCamp color="#2338d9" size={25}/> 
<h7 className="buy_caption">
Land
</h7>
</center>

</div>
</Link>


<Link className="col-xs-2 card buy" to="/buy_home">
<div className="">

<div className="buy_header">
{/* <Avatar alt= {username} src={imageUrl} className="post_avatar"/> */}
<h5 className="buy_username">  </h5> 
</div>
    
<center>
<GiFamilyHouse color="#2338d9" size={25}/>
<h7 className="buy_caption">
 Homes
</h7>
</center>

</div>
</Link>


<Link className="col-xs-2 card buy" to="buy_building">
<div className="">

<div className="buy_header">
{/* <Avatar alt= {username} src={imageUrl} className="post_avatar"/> */}
<h5 className="buy_username">  </h5> 
</div>
<center>
<FaBuilding color="#2338d9" size={25}/>
<h7 className="buy_caption">
 Commercial Buildings
</h7>
</center>
</div>
</Link>


<Link className="col-xs-2 card buy" to="/buy_business">
<div className="">

<div className="buy_header">
{/* <Avatar alt= {username} src={imageUrl} className="post_avatar"/> */}
<h5 className="buy_username">  </h5> 
</div>
 <center>
 <AiOutlineShop color="#2338d9" size={25} />  
 <h7 className="buy_caption">
Businesses for Sale
</h7>
 </center>

</div>
</Link>

<Link className="col-xs-2 card buy" to="/get_services">
<div className="">

<div className="buy_header">
{/* <Avatar alt= {username} src={imageUrl} className="post_avatar"/> */}
<h5 className="buy_username">  </h5> 
</div>
<center>
  <FaBookReader color="#2338d9" size={25} /> 
  <h7 className="buy_caption">
Professional Services
</h7>
</center> 

</div>
</Link>


<Link className="col-xs-2 card sell2" to="/sell">
<div className="">

<div className="buy_header">
{/* <Avatar alt= {username} src={imageUrl} className="post_avatar"/> */}
<h5 className="buy_username">  </h5> 
</div>
<center>
  <FiEdit color="white" size={25} /> 
  <h7 className="text-darkgreen">
Sell an asset or service
</h7>
</center> 

</div>
</Link>

       
        </div>
</div>


        </>
    )
}

export default Buy
