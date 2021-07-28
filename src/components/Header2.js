import React, {useState} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// constructor(props, context) {
//   super(props, context);
 
//   this.state = {
//     visible: false
//   };
 
//   this.toggleMenu = this.toggleMenu.bind(this);
// }
 
// toggleMenu() {
//   this.setState({
//       visible: !this.state.visible
//   });
// }

const Header = () => {

  const [visible, setVisible] = useState(false);

  const ToggleMenu = ()=>{
    setVisible(!visible);
  }

  const openNav = () =>{
    document.getElementById("myNav").style.width = "100%";
  }
  
  const closeNav = () =>{
    document.getElementById("myNav").style.width = "0%";
  }

 

  return (
    <>
<nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src="assets/images/logo-blue-sm.png" alt />
    </a>
    <ul className="navbar-nav d-lg-none ml-auto navbar-icons ">
      <li className="nav-item">
        <a className="nav-link" href="tel:+1234567890"><i className="fa fa-3x fa-map-marker" /></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="tel:+1234567890"><i className="fa fa-3x fa-comments" /></a>
      </li>
    </ul>
    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span style={{fontSize: 30, cursor: 'pointer'}} onClick={openNav}>☰</span>
    </button>

    <div>
  <div id="myNav" className="overlay">
    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
    <div className="overlay-content">
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  </div>
</div>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav ml-auto">                 
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="docMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Experience</a>
          <ul className="dropdown-menu" aria-labelledby="docMenu">
            <li> <a className="dropdown-item" href="#">Our Story</a> </li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="nav-item border-0 d-none d-lg-inline-block align-self-center">
      <a href="#" className=" btn btn-sm btn-grad text-white mb-0">Get Started</a>
    </div>
  </div>
</nav>


    </>
  );
};

export default Header;
