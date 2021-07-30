//import React from 'react'
import React, {useState, useEffect} from 'react'
import "./Login.css";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {db, auth, storage} from "../firebase";
import {useHistory, BrowserRouter as Router, Route, Link } from "react-router-dom";
import agencies from "../img/agencies.jpeg"
import useCollectionData from "react-firebase-hooks/firestore"


const Signup = () => {
const history = useHistory();
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [phone, setPhone] = useState("");


    useEffect(()=>{

   const unsubscribe =  auth.onAuthStateChanged((authUser)=>{

        if(authUser){
          //user has logged in
          setUser(authUser);

          if(authUser.displayName){
            //don't update
          } else{
           
            return(authUser.updateProfile({
              displayName: username,
              phoneNumber: phone
            }))

          }


        } else{
          setUser(null);
        }

      })

      return()=>{
        unsubscribe();
      }

    },[user, username, phone]);

  const signUp = (e)=>{
    //console.log("Signed Up");
    
   if(username.length >= 6){

    if(username.length <=10){
     
      if(phone.length === 10){

        if(phone.match(/^\d+$/) && (phone.substring(0, 2) === '07' || phone.substring(0, 2) === '01' )) {

          const promise = auth.createUserWithEmailAndPassword(email, password).then((authUser)=>{
            authUser.user.updateProfile({
              displayName: username,
            }).then( ()=> {
              db.collection("users")
              .add({
                uid: authUser.user.uid,
                phoneNumber: phone,
  
              })
              console.log(authUser.user.uid)
            })

            alert("Sign up Successful")
            history.push("/")

          });
          promise.catch(e => alert(e.message));
          
          
          
      } else{
        alert("Phone number should start with 07 or 01 and should have numbers only, no letters or special characters")
      }

       

      }else{
        alert("Invalid phone number format")
      }



    } else{
      alert('Username too long. It must be between 6 and 10 characters');
    }
   

   }else{
alert('Username too short. It must be between 6 and 10 characters');
   }
 
  }
  
  
   

 
  

    return (
        <div>
              <div id="login">
              <center><img id="logo1" alt="logo" src={agencies}/></center>
        <br />
        <div className="container">
          <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <div id="login-form" className="form" >
                  <h3 className="text-center"><b>Sign Up</b></h3>

                 <center>

                 

                 

                 <div className="form-group" autocomplete="off">
                  <input autocomplete="false" name="hidden" type="text" type="hidden"/>
                    <label htmlFor="username" autoComplete="off" className="">username:</label><br />
                    <input type="text" name="username" id="username" className="form-c" maxlength="10"
                    onChange={(e)=>{setUsername(e.target.value)}}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="">email:</label><br />
                    <input type="email" name="email" id="email" className="form-c" 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Phone" className="">Phone Number:</label><br />
                    <input type="tel" name="phone" id="phone" className="form-c" maxLength="10"
                    onChange={(e)=>{setPhone(e.target.value)}} placeholder="Start with 07 or 01"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="">Password:</label><br />
                    <input type="password" name="password" id="password" className="form-c"
                    onChange={(e)=>{setPassword(e.target.value)}} placeholder="at least 6 characters"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="">Confirm Password:</label><br />
                    <input type="password" name="password" id="password" className="form-c"
                    onChange={(e)=>{setConfirm(e.target.value)}} placeholder="at least 6 characters"
                    />

{
                    password.length > 1 && confirm.length > 1 && password !== confirm?(<>
                  <br />  <small className="text-danger">Passwords do not match</small>
                    </>):(<></>)

                  }

                  </div>

                 

                  <div className="form-group">
                
                    
                 {
                   username !="" && email !="" && password.length > 6 && password === confirm && phone !="" ?(<>
                    <button className = "btn btn-md" id="login_button" onClick = {signUp}>Sign up</button>
                   </>):(<></>)
                 }
                  </div>
                  
                 </center>
                 <div id="register-link" className="text-center">
                  Already have an account? <br /><Link to="/login" className="side_link link">Log In</Link>
                    <br /><br />
                    &nbsp;&nbsp; <Link to ="/home" className="link"><i className="fa fa-home"></i>Home</Link>
                  </div>
                  <br /><br /><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>



    )





}

export default Signup
