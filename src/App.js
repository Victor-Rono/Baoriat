import logo from './logo.svg';
import './css/style.css';
import{useState, memo, createContext, useContext, useEffect } from "react";
import { useStateValue } from './state/StateProvider';
import {db, auth} from "./firebase";

  import "./assets/vendor/bootstrap/css/bootstrap.min.css";
  import "./assets/vendor/icofont/icofont.min.css";
  import "./assets/vendor/boxicons/css/boxicons.min.css";
  import "./assets/vendor/animate.css/animate.min.css";
  import "./assets/vendor/remixicon/remixicon.css";
  import "./assets/vendor/venobox/venobox.css";
  import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css";

  import { BrowserRouter, Route, Switch } from 'react-router-dom';



  
import Home from './Home';
import Admin from './Admin';
import ScrollToTop from './ScrollToTop';



  //COMPONENTS
// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import About from './components/About';
// import Services from './components/Services';
// import Login from './components/Login';
// import Signup from "./components/Signup";




 


function App() {

//  const  [loggedIn, setLoggedIn] = useState(true);
useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  const [{}, dispatch] = useStateValue();

  useEffect(()=>{ 

   const unsubscribe =  auth.onAuthStateChanged(authUser =>{
     // console.log(authUser)

      if(authUser){
       
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
 
      }else{
        //console.log(authUser)
        dispatch({
          type: 'SET_USER',
          user: ""
        })

      }

    })  
      

  }, [])



  return (
    <div className="App">
    
      
     <BrowserRouter>
     
    <Switch>


<Route path="/admin/">
<Admin/>
</Route>


 <Route path="/">
   <Home/>
   </Route>  


    </Switch>



     </BrowserRouter>
      {/* <Services/> */}
    </div>
  );
}

export default App;
