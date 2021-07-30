import React, {useState, useEffect} from 'react'
import "./Listing.css"

import {useHistory, BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";
import {db, auth, storage} from "../firebase";
import NumberFormat from "react-number-format";
import {GoLocation} from "react-icons/go";
import {FaPhone} from "react-icons/fa"
import { useStateValue } from '../state/StateProvider';

const Listing = () => {
const search = useLocation();
const history = useHistory();

  const prevPage = ()=>{
    history.goBack()
  }





    const [{user}, dispatch] = useStateValue();
    const uzer = user.displayName;

var queryString = document.location.search;
var item = queryString.slice(6);

 const [username, setUsername] = useState("");
 const [imgUrl, setImgUrl] = useState("");
 const [imgUrl2, setImgUrl2] = useState("");
 const [imgUrl3, setImgUrl3] = useState("");
 const [imgUrl4, setImgUrl4] = useState("");
 const [caption, setCaption] = useState("");
 const [price, setPrice] = useState("");
 const [description, setDescription] = useState("");
 const [phone, setPhone] = useState("");
 const [floors, setFloors] = useState("");
 const [businessName, setBusinessName] = useState("");
 const [businessType, setBusinessType] = useState("");
 const [paymentType, setPaymentType] = useState("");
 const [ward, setWard] = useState("");
 const [subCounty, setSubCounty] = useState("");
 const [buildingName, setBuildingName] = useState("");
 const [purpose, setPurpose] = useState("");
 const [size, setSize] = useState("");
 const [rooms, setRooms] = useState("");
 const [imageArray, setImageArray] = useState([]);
 

//paymentType={pst.paymentType} businessName={pst.businessName}
// businessType= {pst.businessType} phoneNumber={pst.phoneNumber} ward={pst.ward} subCounty={pst.subCounty}

 db.collection("posts").doc(item).get().then((snapshot)=>{
       //console.log(snapshot.data())
    var data = snapshot.data();
    setUsername (data.username);
    setImgUrl  (data.imageUrl);
    setImgUrl2  (data.imageUrl2);
    setImgUrl3  (data.imageUrl3);
    setImgUrl4 (data.imageUrl4);
    setCaption (data.caption);
    setDescription (data.description);
    setPrice (data.price);
    setFloors(data.floors);
    setBusinessName(data.businessName);
    setBusinessType(data.businessType)
    setPaymentType(data.paymentType)
    setWard(data.ward)
    setSubCounty(data.subCounty);
    setPhone(data.phoneNumber)
    setFloors(data.floors)
    setBuildingName(data.buildingName)
    setPurpose(data.purpose)
    setSize(data.size)
    setPhone(data.phoneNumber)
    setRooms(data.rooms)
    
    
 })
 
if(phone !== null){
  var mobileNo = "tel:+254" + phone.slice(phone.length - 9)
} else{
  var mobileNo = "#"
}

 var postName="";

if(businessName != undefined){
   postName = businessName;
}

if(buildingName != undefined){
  postName = `${buildingName}, ${floors} floor(s)`;
}

if(size !== undefined){
  postName= `Land, ${size}`
}

if(rooms != undefined){
  
  if(purpose ==="Renting"){
    postName= `Rental, ${rooms} room(s)`
  } else{
    postName= `Home, ${rooms} room(s)`
  }

}

const deletePost = ()=>{

  var res = window.confirm("Are you sure you want to delete this post?")

  if(res){

    var path = imgUrl

//  = delete all images from firebase storage;

  var filename = storage.refFromURL(imgUrl)
  var filename2 = storage.refFromURL(imgUrl2)
  var filename3 = storage.refFromURL(imgUrl3)
  var filename4 = storage.refFromURL(imgUrl4)

  setImageArray([filename, filename2, filename3, filename4])
 filename.delete()
 filename2.delete()
 filename3.delete()
 filename4.delete()

 db.collection("posts").doc(item).delete().then(
  alert("Deleted Successfully"),
  history.goBack()
  
)


  }

}


//paymentType={pst.paymentType} businessName={pst.businessName}
// businessType= {pst.businessType} phoneNumber={pst.phoneNumber} ward={pst.ward} subCounty={pst.subCounty}

    return (
        <div>
            <div className="row">
            
            <div className="col-lg-8 item_image_container">
               
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
     <center> <img className="d-block w-100 item_image" src={imgUrl} alt="First slide" /></center>
    </div>
    <div className="carousel-item">
   <center> <img className="d-block w-100 item_image" src={imgUrl2} alt="First slide" /></center>
    </div>
    <div className="carousel-item">
   <center> <img className="d-block w-100 item_image" src={imgUrl3} alt="First slide" /></center>
    </div>

    <div className="carousel-item">
   <center> <img className="d-block w-100 item_image" src={imgUrl4} alt="First slide" /></center>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon btn btn-sm btn-danger bg-danger" id="btns" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon btn btn-sm btn-danger bg-danger" id="btns" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>


                {/* ccccc */}
               {/* <center> <img  alt="" className="item_image"/></center> */}
            </div>

            <div className="col-lg-4 item_details">

              {
                postName !=""?(<>
              <div className="item_title">
              <h5 className="item_title_text"><y className="item_title_text1">{postName}</y>, <NumberFormat prefix={"Ksh "} className="comment_username bg-light" value={price} thousandSeparator= {true}/></h5>
              </div>
                
                </>):(<></>)
                
                }

{/*  <y ><NumberFormat prefix={"Ksh "} className="comment_username" value={price} thousandSeparator= {true}/> </y> */}
{
                  purpose !="" && purpose !=undefined?(<>
                  <div className="item_purpose">
                    <h5 className="item_purpose_text">
                      For {purpose}
                    </h5>
                  </div>
                  </>):(<></>)
                }

      {
        paymentType !=""?(<>
          <div className="item_payment">
            <h6 className="item_payment_text">{paymentType}</h6>
          </div>
        </>):(<></>)
      }

              <br />
                <div className="item_description">
                  <h5 className="about text-danger">About</h5>
                  <h6 className="item_description_text">
                    {description}
                  </h6>
                </div>
<br />
                <div className="item_location">
                  <h6 className="item_location_header text-danger"><GoLocation size={20}/> Seller's location:</h6>
                
                  <h6 className="sub_county">
                    Sub-County: <b className="text-danger">{subCounty}</b>
                  </h6>

                  <h6 className="ward">
                    Ward: <b className="text-danger">{ward}</b>
                  </h6>
                </div>
<br />
              {
                phone !== null?(<>
                <div className="contact_info">
                <h6 className="contact_info_header">Contact Seller:</h6>
                <h5 className="item_phone">
                  <b className="phoneNo"><a href={mobileNo}> <FaPhone /> {phone}</a></b>
                  

                </h5>
              </div>
                
                </>):(<></>)
              }

              {
                username === user.displayName?(<>
                <center>
                {/* <button className="btn btn-primary">Edit</button> */}
                  <button className="btn btn-secondary" onClick= {deletePost}> <i className="fa fa-trash"></i> Delete This Post</button><br />
                </center><br />
                </>):(<></>)
              }
              
        <div className="links">
          <center><span onClick={prevPage} className="btn btn-danger"><i className="fa fa-angle-left"></i> Back</span></center>
        </div>


            </div>

            </div>
        </div>
    )
}

export default Listing
