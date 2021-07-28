import React, { useState, useEffect,} from 'react'
import "./BuyLand.css"
import {db, auth, storage} from "../../firebase";
import {useHistory, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Posts from "../Posts"
import {AiOutlineShop} from "react-icons/ai"

const BuyLand = () => {
    const [post, setPost] = useState([]);
    var history = useHistory();

    const prevPage = ()=>{
        history.goBack()
    }

    useEffect(()=>{

        

        db.collection('posts').where("category","==","Business For Sale" ).onSnapshot(snapshot=>{
            setPost(snapshot.docs.map(doc =>({
                id: doc.id,
                pst: doc.data()
                
            })));
            //console.log("DATA: "
            
        })

    }, [])



    return (
        <div className="hsc">
<br /><br />
<div className="container" >
    <div class="row" id="topBar">
        <div class="col-xs-6" id="side">
        <AiOutlineShop  color="#2338d9" size={30}/>
            Homes
        </div>
        <div class="col-xs-6" id="side">
        <Link to="/" className="btn btn-danger"><i className="fa fa-angle-left"></i> &nbsp;Back</Link> 
        </div>
    </div>
</div>

            
            <br />
          <div className="container">
          <div className="row home_screen">
          
          {
              post.map(({id, pst}) =>{

                  var postLink = "/listing?item="+id
                  var bizType= "";
                 
                  if(pst.size != undefined){
                      bizType = "Land, "+ pst.size; 
                  }


                  if(pst.rooms != undefined){
                      if(pst.purpose =="Renting"){
                          bizType = "Rental, "+ pst.rooms +" rooms";
                      } else{
                          bizType = "Home, "+ pst.rooms +" rooms";
                      }
                  }
                 
                  else if(pst.businessName != undefined){
                        bizType = pst.businessName  
                  } else if(pst.buildingName != ""){
                      bizType = `${pst.buildingName}, ${pst.floors} floors`
                      
                  } 

                  return(
                  <div className="allItems">
                  <Link to={postLink} className="allItems">
                  <Posts category={pst.category} key={id} price={pst.price} imageUrl={pst.imageUrl}   username={pst.username} 
                   phoneNumber={pst.phoneNumber} businessType = {bizType} payType={pst.paymentType} size={pst.size} floors={pst.floors} back="buy_land"/>
                  </Link>
                  {/* category */}
                  </div>
                   )
              })
          }
         
      </div>
          </div>
        </div>
    )
}



export default BuyLand
