import React, {useState, useEffect} from 'react'
import "./Login.css";
import {useHistory, BrowserRouter as Router, Route, Link } from "react-router-dom";
import {db, auth} from "../firebase";
import agencies from "../img/agencies.jpeg"
import { useStateValue } from '../state/StateProvider';





const Login = () => {

  const [{user}, dispatch] = useStateValue();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e)=>{
 

    const promise = auth.signInWithEmailAndPassword(email, password).then(auth =>{
     
      if(auth){
        history.push('/')
      }

    })
    promise.catch(e => alert(e.message));
    
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
               
                  <h3 className="text-center"><b>Login</b></h3>
                 <center>

                 <div className="form-group">
                    <label htmlFor="username" className="">email:</label><br />
                    <input type="email" name="email" id="email" className="form-c" onChange={(e)=>{setEmail(e.target.value)}} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="">Password:</label><br />
                    <input type="password" name="password" id="password" className="form-c" onChange={(e)=>{setPassword(e.target.value)}} />
                  </div>
                  <div className="form-group">
                   
                   {
                     email != "" && password != ""? (<>
                      <button className="btn btn-md" id="login_button" onClick={signIn}>Log In</button>
                     </>):(<></>)
                   } 
                   
                  </div>
                  </center>
                  <div id="register-link" className="text-center">
                   Don't have an account? <br /><Link to="/Signup" className="side_link link">Sign Up</Link>
                    <br /><br />
                    &nbsp;&nbsp; <Link to ="/home" className="link"><i className="fa fa-home"></i>Home</Link>
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )


  

}

export default Login
