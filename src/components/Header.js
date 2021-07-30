import React from "react";
import {useHistory, BrowserRouter as Router, Route, Link } from "react-router-dom";
import {BrowserRouter,  Switch } from 'react-router-dom';
import{useState, memo, createContext, useContext} from "react";
import { useStateValue } from '../state/StateProvider';
import {db, auth} from "../firebase";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SearchIcon from '@material-ui/icons/Search';
import reducer, {initialState} from "../state/Reducer";
import {GiFarmTractor, GiForestCamp, GiHobbitDwelling, GiHomeGarage, GiFamilyHouse, GiKenya} from "react-icons/gi"
import {FaUserAlt} from "react-icons/fa"
const Header = () => {
const history= useHistory();
const [{user}, dispatch] = useStateValue();
  const signOut = (e)=>{
   const promise = auth.signOut();

   promise.catch(e => alert(e.message));
    

  }

  return (
    <>
   
        <nav className="navbar navbar-expand-md fixed-top navbar-light bg-light" id="navbar">
        <h4 className="logo">
          <Link to="/" className="no_underline"><GiKenya size={50} /> Baoriat Agencies </Link>
        </h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse bg-light" id="navbarCollapse">

          <div className="navbar-nav mr-auto">
         
            
          </div>

          <div className="navbar-nav mx-auto">


              {
                user !="" && 20 > 100000?(<>
                <Link to="/notifications" className="nav-item nav-link text-primary" data-toggle="collapse" data-target="#navbarCollapse">
             <center> <h5><NotificationsActiveIcon/> Notifications</h5> </center>
              </Link>

              
          <Link to="/profile" className="nav-item nav-link text-primary" data-toggle="collapse" data-target="#navbarCollapse">
             <center> <h5><FaUserAlt/> My Profile</h5> </center>
              </Link>
                
                
                </>):(<></>)
              


              }

<Link to="/about" className="nav-item nav-link text-danger" data-toggle="collapse" data-target="#navbarCollapse">
              <center><h5>About Us</h5></center>
              </Link>

            {/* <Link to="/" className="nav-item nav-link active" data-toggle="collapse" data-target="#navbarCollapse" >
              <center><h5>Home</h5></center>
            </Link> */}
            {/* <Link to="/about" className="nav-item nav-link" data-toggle="collapse" data-target="#navbarCollapse">
              <center><h5>Make Order</h5></center>
              </Link> */}
              {/* <Link to="/land" className="nav-item nav-link" data-toggle="collapse" data-target="#navbarCollapse">
              <center><h5>Land</h5></center>
              </Link>
              <Link to="/homes" className="nav-item nav-link" data-toggle="collapse" data-target="#navbarCollapse">
              <center><h5>Homes</h5></center>
              </Link>
              <Link to="/commercial_buildings" className="nav-item nav-link" data-toggle="collapse" data-target="#navbarCollapse">
              <center><h5>Commercial Buildings</h5></center>
              </Link>
              <Link to="/businesses" className="nav-item nav-link" data-toggle="collapse" data-target="#navbarCollapse">
              <center><h5>Businesses for Sale</h5></center>
              </Link>
              <Link to="/services" className="nav-item nav-link" data-toggle="collapse" data-target="#navbarCollapse">
              <center><h5>Services</h5></center>
              </Link>
              <Link to="/about?u=myself" className="nav-item nav-link" data-toggle="collapse" data-target="#navbarCollapse">
              <center><h5>About Us</h5></center>
              </Link> */}
              {/* <Link to="/services" className="nav-item nav-link" data-toggle="collapse" data-target="#navbarCollapse">
              <center><h5>Sell</h5></center>
              </Link> */}

             

            
          </div>
          <div className="navbar-nav ml-auto">

         

          <Link to="/sell" className="nav-item nav-link" data-toggle="collapse" data-target="#navbarCollapse">
              <center><h5 className="btn btn-success"><i className="fa fa-edit"></i> Sell</h5></center>
              </Link>
             

         

            {
            
              user?(<center><Link to="/login" className="nav-item nav-link"><button className="btn btn-danger" id="button_md" onClick={signOut}><i className="fa fa-power-off"> </i> Log Out</button></Link></center>):
            
            (<center><Link to= "/login" className="nav-item nav-link"><button className="btn btn-danger" id="button_md"><i className="fa fa-user"></i> Log In / Sign Up</button></Link></center>)}
          </div>
        </div>
      </nav>
      {/* End Header */}
      
    </>
  );
};

export default Header;
