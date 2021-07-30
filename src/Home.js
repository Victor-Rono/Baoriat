import React from 'react';
import {useHistory, BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from './components/About';
import Services from './components/Services';
import Login from './components/Login';
import Signup from "./components/Signup";
import Sell from "./components/Sell";
import HomeScreen from "./components/HomeScreen";
import { useStateValue } from './state/StateProvider';
import Listing from "./components/Listing2";


// Selling services and assets
import LandSale from "./components/sell/LandSale";
import HomeSale from "./components/sell/HomeSale";
import Commercial from './components/sell/Commercial';
import Business from './components/sell/Business';
import Service from './components/sell/Service';
import ScrollToTop from './ScrollToTop';
import BuyLand from './components/buy/BuyLand';
import BuyHome from './components/buy/BuyHome';
import BuyBusiness from './components/buy/BuyBusiness';
import CommercialBuilding from "./components/buy/CommercialBuilding"
import ProfessionalService from "./components/buy/ProfessionalService"
import Profile from './components/profile/Profile';

const Home = () => {

    const [{user}, dispatch] = useStateValue();
    const history = useHistory();

    return (
        <BrowserRouter>
        <ScrollToTop/>
        <Switch>

        <Route path="/about">
            
        <Header/>
        <HeroSection/>
        <About/>
    </Route>
              
    <Route path="/login">
        <Login/>
    </Route>

    {/* <Route path="/logout">
        {
            setTimeout(()=>{
                history.push('/home')
            }, 2000)
        }
    </Route> */}


    <Route path="/signup">
      <Signup/>
    </Route>

    <Route path="/sell">
    <Header/>
    <br /><br /><br />
    {user?(
        <Sell/>
    ):(
        
        <>
        <h3><br /><br />
        <center className="blu">Log in or sign up to sell Property
            <br /><br />
            <Link to="/login"><button className="btn btn-danger btn-lg"><i className="fa fa-user"></i> Log In/ Sign Up</button></Link><br/> <br />
            <Link to="/"><button className="btn btn-primary btn-lg"><i className="fa fa-angle-left"></i> Back Home</button></Link>
            </center></h3>
        </>
    )}
    </Route>    


    <Route path="/listing">
    <Header/>
    <br /><br /><br /> 
    <Listing/>
    
    </Route>

    {/* Selling Assets && services */}

    <Route path="/land_sale">
    <Header/>
    <br /><br /><br /> 
    {user?(
        <LandSale/>
    ):(
        
        <>
        <h3><br /><br />
        <center className="blu">Log in or sign up to sell Property
            <br /><br />
            <Link to="/login"><button className="btn btn-danger btn-lg"><i className="fa fa-user"></i> Log In/ Sign Up</button></Link><br/> <br />
            <Link to="/"><button className="btn btn-primary btn-lg"><i className="fa fa-angle-left"></i> Back Home</button></Link>
            </center></h3>
        </>
    )}
    
    </Route>


    <Route path="/home_sale">
    <Header/>
    <br /><br /><br /> 
    {user?(
        <HomeSale/>
    ):(
        
        <>
        <h3><br /><br />
        <center className="blu">Log in or sign up to sell Property
            <br /><br />
            <Link to="/login"><button className="btn btn-danger btn-lg"><i className="fa fa-user"></i> Log In/ Sign Up</button></Link><br/> <br />
            <Link to="/"><button className="btn btn-primary btn-lg"><i className="fa fa-angle-left"></i> Back Home</button></Link>
            </center></h3>
        </>
    )}
    
    </Route>

    <Route path="/building_sale">
    <Header/>
    <br /><br /><br /> 
    {user?(
        <Commercial/>
    ):(
        
        <>
        <h3><br /><br />
        <center className="blu">Log in or sign up to sell Property
            <br /><br />
            <Link to="/login"><button className="btn btn-danger btn-lg"><i className="fa fa-user"></i> Log In/ Sign Up</button></Link><br/> <br />
            <Link to="/"><button className="btn btn-primary btn-lg"><i className="fa fa-angle-left"></i> Back Home</button></Link>
            </center></h3>
        </>
    )}
    
    </Route>

    <Route path="/business_sale">
    <Header/>
    <br /><br /><br /> 
    {user?(
        <Business/>
    ):(
        
        <>
        <h3><br /><br />
        <center className="blu">Log in or sign up to sell Property
            <br /><br />
            <Link to="/login"><button className="btn btn-danger btn-lg"><i className="fa fa-user"></i> Log In/ Sign Up</button></Link><br/> <br />
            <Link to="/"><button className="btn btn-primary btn-lg"><i className="fa fa-angle-left"></i> Back Home</button></Link>
            </center></h3>
        </>
    )}
    
    </Route>


    <Route path="/professional_services">
    <Header/>
    <br /><br /><br /> 
    {user?(
        <Service/>
    ):(
        
        <>
        <h3><br /><br />
        <center className="blu">Log in or sign up to sell Property
            <br /><br />
            <Link to="/login"><button className="btn btn-danger btn-lg"><i className="fa fa-user"></i> Log In/ Sign Up</button></Link><br/> <br />
            <Link to="/"><button className="btn btn-primary btn-lg"><i className="fa fa-angle-left"></i> Back Home</button></Link>
            </center></h3>
        </>
    )}
    
    </Route>


    {/* Selling Assets && services */}



{/* Buying assets && services */}

        
    <Route path="/buy_land">
    <Header/>
    <br /><br /><br /> 
    <BuyLand/>
    
    </Route>


    <Route path="/buy_home">
    <Header/>
    <br /><br /><br /> 
    <BuyHome/>
    
    </Route>

    <Route path="/buy_building">
    <Header/>
    <br /><br /><br /> 
    <CommercialBuilding/>
    
    </Route>

    <Route path="/buy_business">
    <Header/>
    <br /><br /><br /> 
    <BuyBusiness/>
    
    </Route>


    <Route path="/get_services">
    <Header/>
    <br /><br /><br /> 
    <ProfessionalService/>
    
    </Route>




{/* Buying assets && Services */}



{/* My profile */}

{/* <Route path="/profile">
    <Header/>
    <br /><br /><br /> <br />
    <Profile/>
    
    </Route> */}


{/* My profile */}



    <Route path="/">
    <Header/>
    <HomeScreen/>
    </Route>


        </Switch>
        
        </BrowserRouter>
    )
}

export default Home
