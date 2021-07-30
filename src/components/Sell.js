import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Sell.css"
import ImageUpload from "./ImageUpload";
import { useStateValue } from '../state/StateProvider';
import Avatar from "@material-ui/core/Avatar"
import {Home} from "@material-ui/icons"
import {GiFarmTractor, GiForestCamp, GiHobbitDwelling, GiHomeGarage, GiFamilyHouse, GiKenya} from "react-icons/gi"
import{FaBuilding, FaBookReader} from "react-icons/fa"
import {AiOutlineShop} from "react-icons/ai"
const Sell = () => {
    const [{user}, dispatch] = useStateValue();
    const username = user.displayName;
    return (
        <>
        <br />
        <div className="">
        <div className="">
    <div className="col-lg-10 padded2">
        <center><h3 className="sell_intro">Choose the type of asset or service you want to sell</h3></center>
    </div>
</div>
        <div className="container">
        <div className="row">  
<Link className="col-md-2 card sell" to = "/land_sale">         
            <div className="">
            
<div className="sell_header">
{/* <Avatar alt= {username} src={imageUrl} className="post_avatar"/> */}
<h5 className="sell_username">  </h5> 
</div>
    
<center>
<GiForestCamp color="#059b05" size={30}/>
<h6 className="sell_caption">
 Sell or lease land
</h6>
</center>

</div>
</Link>


<Link className="col-md-2 card sell" to="/home_sale">
<div className="">

<div className="sell_header">
{/* <Avatar alt= {username} src={imageUrl} className="post_avatar"/> */}
<h5 className="sell_username">  </h5> 
</div>
    
<center>
<GiFamilyHouse color="#059b05" size={30}/>
<h6 className="sell_caption">
 Sell or rent out a house
</h6>
</center>

</div>
</Link>


<Link className="col-md-2 card sell" to="building_sale">
<div className="">

<div className="sell_header">
{/* <Avatar alt= {username} src={imageUrl} className="post_avatar"/> */}
<h5 className="sell_username">  </h5> 
</div>
<center>
<FaBuilding color="#059b05" size={30}/>
<h6 className="sell_caption">
 Sell commercial buildings or rent them out
</h6>
</center>
</div>
</Link>


<Link className="col-md-2 card sell" to="/business_sale">
<div className="">

<div className="sell_header">
{/* <Avatar alt= {username} src={imageUrl} className="post_avatar"/> */}
<h5 className="sell_username">  </h5> 
</div>
 <center>
 <AiOutlineShop color="#059b05" size={30} />  
 <h6 className="sell_caption">
Sell or lease your business
</h6>
 </center>

</div>
</Link>

<Link className="col-md-2 card sell" to="/professional_services">
<div className="">

<div className="sell_header">
{/* <Avatar alt= {username} src={imageUrl} className="post_avatar"/> */}
<h5 className="sell_username">  </h5> 
</div>
<center>
  <FaBookReader color="#059b05" size={30} /> 
  <h6 className="sell_caption">
Offer Professional Services
</h6>
</center> 

</div>
</Link>

       
        </div>
        </div>

<br /><br />
<center><Link to="/" className="btn btn-danger">
    <i className="fa fa-angle-left"></i> &nbsp;
    Back Home</Link></center>
<br /><br />
        </div>
        </>
    )
}

export default Sell
