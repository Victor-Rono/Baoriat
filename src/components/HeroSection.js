import React from 'react'
import "./HeroSection.css"; 
import {GiFarmTractor, GiForestCamp, GiHobbitDwelling, GiHomeGarage, GiFamilyHouse, GiKenya} from "react-icons/gi"
import {FaHandshake, FaPencilRuler} from "react-icons/fa"
const HeroSection = () => {
    return (
        <>
           
  <section id="hero">
    <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

      <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div className="carousel-inner" role="listbox">

       
        <div className="carousel-item active" id="img1">
          <div className="carousel-container">
            <div className="container">
              <GiKenya color="yellow" size={110}/>
              <h2 className="animate__animated animate__fadeInDown" id="yellow">Welcome to <span>Baoriat Agencies</span></h2>
              <p className="animate__animated animate__fadeInUp">Buy or sell Land, Homes or Commercial Buildings in Uasin Gishu County. You can also view properties available for sale</p>
              <h2 className="animate__animated animate__fadeInDown" id="yellow">Baoriat app for Android Coming Soon</h2>
              {/* <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Learn More</a> */}
            </div>
          </div>
        </div>

       
        <div className="carousel-item" id="img2">
          <div className="carousel-container">
            <div className="container">
            <FaHandshake color="yellow" size={110}/>
              <h2 className="animate__animated animate__fadeInDown" id="yellow">A solution for both buyers and sellers</h2>
              <p className="animate__animated animate__fadeInUp">Browse through our app/website and look at all the properties available. We have maps that show the location for all the properties available on our platform</p>
              
              {/* <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">View Map</a> */}
            </div>
          </div>
        </div>

 
        <div className="carousel-item" id="img3">
          <div className="carousel-container">
            <div className="container">
              <FaPencilRuler color="yellow" size={110}/>
              <h2 className="animate__animated animate__fadeInDown" id="yellow">We also offer professional Services</h2>
              <p className="animate__animated animate__fadeInUp">We can connect you to a broad range of professionals in various aspects of the real and commercial estate sector within Uasin Gishu county like surveyors, Extension officers and real estate agents.</p>
              {/* <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">See Available Services</a> */}
            </div>
          </div>
        </div>

      </div>

      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>

      <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>

    </div>
  </section> 
        </>
    )
}

export default HeroSection
