import React, {useState, useEffect} from 'react'
import Posts from "./Posts";
import "./HomeScreen.css";
import {db, auth, storage} from "../firebase";
import {useHistory, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Buy from "./Buy";
import { useStateValue } from '../state/StateProvider';


const HomeScreen = () => {
    const history = useHistory();
    const [{user}, dispatch] = useStateValue();
        const username = user.displayName;

    const [post, setPost] = useState([]);

    const loginAlert = ()=>{

        
    }

    useEffect(()=>{

        

        if(10 >1){
            db.collection('posts').orderBy("timestamp", "desc").limit(30).onSnapshot(snapshot=>{
                

                setPost(snapshot.docs.map(doc =>({
                    id: doc.id,
                    pst: doc.data()
                    
                })));
                //console.log("DATA: "

               
                
            })
        } 
        

    }, [])


    return (
        
        <div className="hsc">
            <br /><br /><br /> <br />
    
 <div className="buyContainer bg-light" id="">
              
<Buy/>
  
</div>
  <div className="grey_bg">
  <div className="container-fluid home_screen">
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
                    } else if(pst.buildingName != undefined){
                        bizType = `${pst.buildingName}, ${pst.floors} floors`
                        
                    } 
  
                    return(
                        <>
    
                    <div className="allItems">
                    <Link to={postLink} className="allItems" onClick={loginAlert}>
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

        {/* <div id="GSCCModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="card">
                <h5 className="text-primary">
                    Log in or sign up to view our assets/ services and contact seller.
                </h5>
                <center>
                <div className="row">
                    <div className="col-xs-2">
                        <Link to = "/login" className = "btn btn-danger">Log In</Link>
                    </div>
                    <div className="col-xs-2">
                        <button target="data-dismiss" className = "btn btn-primary">close</button>
                    </div>
                    </div>
                </center>

            </div>

        </div> */}

  </div>


            
         
        </div>
    )
}

export default HomeScreen;
