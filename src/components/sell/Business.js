
import React from "react";
import {useHistory, BrowserRouter as Router, Route, Link } from "react-router-dom";
import {BrowserRouter,  Switch } from 'react-router-dom';
import{useState, memo, createContext, useContext} from "react";
import { useStateValue } from '../../state/StateProvider';
import {db, storage} from "../../firebase";
import firebase from "firebase";
import Compressor from 'compressorjs';

import "./Upload.css";
import "./HomeSale.css"

import {GiFarmTractor, GiForestCamp, GiHobbitDwelling, GiHomeGarage, GiFamilyHouse, GiKenya} from "react-icons/gi"
import{FaBuilding, FaBookReader} from "react-icons/fa"
import {AiOutlineShop} from "react-icons/ai"
{/* <GiForestCamp color="#d9232d" size={70}/> */}
const Business = () => {
    const [{user}, dispatch] = useStateValue();
    const uzer = user.displayName;
    const mobile = user.phoneNumber;
    const history = useHistory();
   // const [caption, setCaption] = useState('');
   const [purpose, setPurpose] = useState("Sale");
    const [image, setImage] = useState([]);
    const [progress, setProgress] = useState(0);
    const [uploaded, setUploaded] = useState(0);
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState([]);
    const [flip, setFlip] = useState(0);
    const [price, setPrice] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [businessType, setBusinessType] = useState("");
    const [paymentType, setPaymentType] = useState("Pay Once");
    const [ward, setWard] = useState("");
    const [phone, setPhone] = useState("");

    const turbo = ['Huruma','Kamagut','Kapsaos','Kiplombe','Ngenyilel','Tapsagoi',]
    const kesses = ['Cheptiret/Kipchamo','Racecourse','Tarakwa','Tulwet/Chuiyat',]
    const moiben = ['Karuna/Meibeki','Kimumu','Moiben','Sergoit','Tembelio',]
    const kapseret = ['Kipkenyo','Langas','Megun','Ngeria','Simat/Kapseret',]
    const ainabkoi =["Ainabkoi/Olare","Kapsoya","Kaptagat"]
    const soy = [ "Kapkures","Kipsomba","Kunet/Kapsuswa","Mois Bridge","Segero/Barsombe","Soy","Ziwa"]

    
   
   
   
   image.length > 4? image.splice(image[image.length], 1):(<></>)


    const handleChange = (e)=>{
        
        
        
        if(image.length <4){
            for(var i =0; i <= 4; i++){
                const img = e.target.files[i];
                
                if(img){
                    img['id'] = Math.random();
                
                    //This block of code was shamelessly copied from a medium.com article
                                new Compressor(img, {
                        quality: 0.59, // 0.6 can also be used, but its not recommended to go below.
                        success: (compressedResult) => {
                          // compressedResult has the compressed file.
                          // Use the compressed file to upload the images to your server.        
                          setImage((prevState)=>[...prevState, compressedResult]);
    
                         
                          
                        },
                      });
        
                   
                }
    
    
            }
            
           // setUploaded(image.length);
          
        
        } else{
            alert("4 photos uploaded already");
        }

    }

 const reset = ()=>{setImage([]); setUrl([])
   
}

 
 var links = [];

    const handleUpload = ()=>{
        // setFlip(1);
        var no = Math.floor(Math.random()*200000);
        var uzer2 = uzer + no;
        
        const promises = [];
       
       

      if(10 > 4){

        if(description != ""){

            if(price != ""){

                if(price.match(/^\d+$/)){

                    if(businessName != ""){

                        if(businessType !=""){

                            if(phone.match(/^\d+$/) && (phone.substring(0, 2) === '07' || phone.substring(0, 2) === '01' )){

                                image.map((images)=>{

                                    var finalImage = uzer2 + images.name;
                                    if(images){
                                        const uploadTask = storage.ref(`images/${finalImage}`).put(images);
                                       
                                        promises.push(uploadTask)
                                
                                        uploadTask.on( 
                                        "state_changed",
                                        (snapshot)=>{
                                            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) *100);
                                            setProgress(progress); 
                                        },
                                        (error)=>{
                                            console.log(error);
                                        },
                                         ()=>{
                                            
                                         storage
                                            .ref("images")
                                            .child(finalImage)
                                            .getDownloadURL()
                                            .then((urls)=>{
                                                
                                                setUrl((prevState)=>[...prevState, urls]);
                                                links.push(urls);
                                                setUploaded(uploaded+1)
                                               
                                                if(links.length === 4){
                                
                                                    var subCounty = "";
                                
                                                if(turbo.includes(ward)){
                                                    subCounty = "TURBO"
                                                } else if(kesses.includes(ward)){
                                                    subCounty = "KESSES"
                                                } else if(moiben.includes(ward)){
                                                    subCounty = "MOIBEN"
                                                } else if(kapseret.includes(ward)){
                                                    subCounty = "KAPSERET"
                                                } else if(ainabkoi.includes(ward)){
                                                    subCounty = "AINABKOI"
                                                } else if(soy.includes(ward)){
                                                    subCounty = "SOY"
                                                }
                                
                                                    db.collection("posts").add({
                                                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                                        description: description,
                                                        price: price,
                                                        imageUrl: links[0],
                                                        imageUrl2: links[1],
                                                        imageUrl3: links[2],
                                                        imageUrl4: links[3],
                                                        username: uzer,
                                                        phoneNumber: phone,
                                                        category: "Business For Sale",
                                                        purpose: purpose,
                                                        paymentType: paymentType,
                                                        businessName: businessName,
                                                        businessType: businessType,
                                                        ward: ward,
                                                        subCounty: subCounty
                                
                                                    }).then(
                                                     alert("Submitted Successfully"),
                                                     history.push("/sell")   
                                                    )
                                                    setImage([])
                                                    setUrl([])
                                                    links=[];
                                                    setProgress(0)
                                                    // document.getElementById("price").value=""
                                                    
                                                    
                                                    links.length = 0;
                                                   }
                                                
                                            })
                                
                                
                                
                                            
                                            
                                        }
                                    )
                                       } else{
                                           alert("photo is required")
                                       }
                                
                                      
                                    
                                
                                })
                                    Promise.all(promises)
                                    .then()
                                    .catch((err)=>console.log(err))
                                
                                
                                

                            }

                         
                        } else{alert("business type cannot be empty")}

                    } else{alert("business name cannot be empty")}
                    
                    } else alert("Price should have numbers only");

            } else alert("Price cannot be empty");
            

        } else{alert("description cannot be empty")}


      }   else{alert("caption cannot be empty")}


     

    
      



    }

  
    
  

    return (
        <div className="home_sale">
       <center>
           
            <div className="upload-container">
                <AiOutlineShop color="darkgreen" size={70}/>
            <h5 className="btm-text">Sell or lease your business</h5>
          <div className="image_upload col-md-3 align-items-center">

          
{

image.length >0 ?

image.map((images)=>{
   return (<><center>
       <i className="fa fa-check text-success"></i>
       {images.name}<br /></center></>)
})


    
: (<></>)

}  

{image.length < 4?(

<>

<div className="choose">
<label className="btn btn-danger">Upload Photos {image.length}/4
<input type="file" capture="environment" accept="image/png, image/gif, image/jpeg" multiple name="" id="" className="image_file" onChange={handleChange}/>
</label> 
</div>

</>):

(<></>)}


{
               image.length > 3 ?( <><h6></h6>
                
                <div className="choose">
                <button className="btn btn-danger" onClick={reset}><i className="fa fa-trash"></i>Remove Photos</button> 
              
                
                </div>
               
               </>)

               :(<>
               <h6></h6></>)
           }


    <br />
             
          <center>

          <div className="form-group">
           <label>Business Name:</label><br />
          <input  type="text" name="" id="business_name" className="image_input" placeholder="name of your business" onChange={e=> setBusinessName(e.target.value)} /> 
            </div>   


            <div className="form-group">
           <label>Business type:</label><br />
          <input  type="text" name="" id="type" className="image_input" placeholder="e.g salon, hotel, shop etc.." onChange={e=> setBusinessType(e.target.value)} /> 
            </div>  

          {/* <div className="form-group">
           <label>Number of Floors:</label><br />
          <input  type="number" name="" id="size" className="image_input" placeholder="" onChange={e=> setRooms(e.target.value)} /> 
            </div>
           */}
            <div className="form-group">
           <label>Price:</label><br />
          Ksh:<input  type="tel" name="" id="price" className="image_input" placeholder="numbers only" onChange={e=> setPrice(e.target.value)} /> 
            </div>

            <div className="form-group">
    <label for="exampleFormControlSelect">Payment Options:</label><br />
    <select className="form-c" id="exampleFormControlSelect" name="purpose" onChange={e=>setPaymentType(e.target.value)}>
    
      <option>Pay Once</option>
      <option>Monthly</option>
      <option>Annual</option>
      <option>Negotiable</option>
    </select>
    </div>


            <div className="form-group">
    <label for="exampleFormControlSelect1">For Renting or sale?</label><br/>
    <select className="form-c" id="exampleFormControlSelect1" name="purpose" onChange={e=>setPurpose(e.target.value)}>
      <option>Sale</option>
      <option>Renting</option>
    </select>
    </div>
            
            <div className="form-group">
          <label>Description:</label><br />
          <textarea rows="7" cols="25" name="" id="" className="image_input1" placeholder="How old is your business? size, location, costs of operation, profitability etc. Give as much information as possible" onChange={e=> setDescription(e.target.value)} />  
          </div>

          <div className="form-group">
           <label><h6>Your preferred Phone number:</h6></label><br />
          <input maxlength = "10" type="tel" name="" id="phone" className="image_input" placeholder="start with 07 or 01" onChange={e=> setPhone(e.target.value)} /> 
            </div>


          <>In which ward is the property located?</><br />
            
            <div className="form-group">
            <label for="exampleFormControlSelect1"><h6>Ward</h6></label><br/>
            <select className="form-c" id="exampleFormControlSelect1" name="purpose" onChange={e=>setWard(e.target.value)}>
            <option></option>
            <option>Ainabkoi/Olare</option>
        <option>Cheptiret/Kipchamo</option>
        <option>Huruma</option>
        <option>Kamagut</option>
        <option>Kapkures</option>
        <option>Kapsaos</option>
        <option>Kapsoya</option>
        <option>Kaptagat</option>
        <option>Karuna/Meibeki</option>
        <option>Kimumu</option>
        <option>Kipkenyo</option>
        <option>Kiplombe</option>
        <option>Kipsomba</option>
        <option>Kunet/Kapsuswa</option>
        <option>Langas</option>
        <option>Megun</option>
        <option>Moiben</option>
        <option>Mois Bridge</option>
        <option>Ngenyilel</option>
        <option>Ngeria</option>
        <option>Racecourse</option>
        <option>Segero/Barsombe</option>
        <option>Sergoit</option>
        <option>Simat/Kapseret</option>
        <option>Soy</option>
        <option>Tapsagoi</option>
        <option>Tarakwa</option>
        <option>Tembelio</option>
        <option>Tulwet/Chuiyat</option>
        <option>Ziwa</option>
            </select>
            </div>
        



          </center>

           {
               image.length > 3 && description.length > 5 && price !="" && phone.length >=10 && businessName !="" && ward !="" && businessType !=""?( <>
                
                <div className="choose">
                <><button onClick={handleUpload} className="btn btn-success image_button" id="btn_md">
                   <i className="fa fa-check"></i>Submit
               </button></>
              
                </div>
               <center>
               <progress className="image_progress" value={progress} max="100"/><br />
                {progress} %
               </center>
               </>)

               :(<>
                
                <div className="choose">
                <><button  className="btn btn-secondary disabled image_button" id="btn_md">
                   <i className="fa fa-check"></i>Submit
               </button></>
              
                </div>
               <center>
               <progress className="image_progress" value={progress} max="100"/><br />
               {
                   image.length < 4?(<> <h7 className="btm-text1">Make sure you have added 4 photos</h7></>):(<></>)
               }
               </center>
               </>)
           }
          </div>
          <br />
          <Link to="/sell"><button className="btn btn-success"><i className="fa fa-angle-left"></i> Back</button></Link>

        </div>
       </center>
       </div>
    )
}

export default Business
