import React, {useState, useEffect} from 'react'
import "./Listing.css"

import {useHistory, BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";
import {db, auth, storage} from "../firebase";

const Listing = () => {
const search = useLocation();

var queryString = document.location.search;
var item = queryString.slice(6);

 const [username, setUsername] = useState();
 const [imgUrl, setImgUrl] = useState();
 const [caption, setCaption] = useState();
 const [phone, setPhone] = useState();

//console.log(item)
// var getOptions = {
//     source: 'cache'
// };


 db.collection("posts").doc(item).get().then((snapshot)=>{
       //console.log(snapshot.data())
    var data = snapshot.data();
    setUsername (data.username);
    setImgUrl  (data.imageUrl);
    setCaption (data.caption);

    //console.log(data)
 })



    return (
        <div>
            <div className="row">
            <div className="col-lg-8 item_image_container">
                {/* where the image (carousel) will be */}
               <center> <img src={imgUrl} alt="" className="item_image"/></center>
            </div>

            <div className="col-lg-4 item_details">
                {/* where stuff about the image will be */}
                {username}
            </div>

            </div>
        </div>
    )
}

export default Listing
