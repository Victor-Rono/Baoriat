import React, {useState, useEffect} from 'react'
import Posts from "./Posts";
import "./HomeScreen.css";
import {db, auth, storage} from "../firebase";
import {useHistory, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Buy from "./Buy";

const HomeScreen = () => {

    const [post, setPost] = useState([]);

    useEffect(()=>{

        

        db.collection('posts').limit(25).onSnapshot(snapshot=>{
            setPost(snapshot.docs.map(doc =>({
                id: doc.id,
                pst: doc.data()
                
            })));
            //console.log("DATA: "
            
        })

    }, [])


    return (
        
        <div className="hsc">
            <br /><br /><br /> <br />
    
 <div className=" buyContainer" id="">
              
<Buy/>
  
</div>
  


            
            <div className="container home_screen">
            <center>
  <b className="" aria-expanded="false" >
    Some Available Assets & Services <i className="fa fa-angle-down"></i>
    </b>

</center>
            <div className="row">
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
                        <>
    
                    <div className="allItems">
                    <Link to={postLink} className="allItems">
                    <Posts category={pst.category} key={id} price={pst.price} imageUrl={pst.imageUrl}   username={pst.username} 
                     phoneNumber={pst.phoneNumber} businessType = {bizType} payType={pst.paymentType} size={pst.size} floors={pst.floors} />
                    </Link>
                    {/* category */}
                    </div>
                    </>
                     )
                })
            }
            </div>
        <br /><br /><br />   
        </div>
        </div>
    )
}

export default HomeScreen;
