
import React from "react";
import {useHistory, BrowserRouter as Router, Route, Link } from "react-router-dom";
import {BrowserRouter,  Switch } from 'react-router-dom';
import{useState, memo, createContext, useContext} from "react";
import { useStateValue } from '../../state/StateProvider';
import {db, storage} from "../../firebase";
import firebase from "firebase";
import Compressor from 'compressorjs';

import "./Upload.css";

import {GiFarmTractor, GiForestCamp, GiHobbitDwelling, GiHomeGarage, GiFamilyHouse, GiKenya} from "react-icons/gi"
import{FaBuilding, FaBookReader} from "react-icons/fa"
import {AiOutlineShop} from "react-icons/ai"
{/* <GiForestCamp color="#d9232d" size={70}/> */}
const Upload = () => {
    const [{user}, dispatch] = useStateValue();
    const uzer = user.displayName;
    const mobile = user.phoneNumber;
    
   // const [caption, setCaption] = useState('');
   const [purpose, setPurpose] = useState("Sale");
    const [image, setImage] = useState([]);
    const [progress, setProgress] = useState(0);
    const [uploaded, setUploaded] = useState(0);
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState([]);
    const [flip, setFlip] = useState(0);
    const [price, setPrice] = useState("");
    const [phone, setPhone] = useState("");
    const [size, setSize] = useState("");
    const [ward, setWard] = useState("");

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
                        quality: 0.63, // 0.6 can also be used, but its not recommended to go below.
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

 
 const links = [];

    const handleUpload = ()=>{
        // setFlip(1);
        var no = Math.floor(Math.random()*200000);
        var uzer2 = uzer + no;
        
        const promises = [];
       
       

      if(10 > 4){

        if(description != ""){

            if(price != ""){

                if(price.match(/^\d+$/)){
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
                                       
                                        if(links.length >=4){

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
                                                //phoneNumber: mobile,
                                                category: "Land",
                                                purpose: purpose,
                                                size: size,
                                                phoneNumber: phone,
                                                subCounty: subCounty,
                                                ward: ward
        
                                            }).then(
                                             alert("Submitted Successfully")   
                                            )
                                            setImage([])
                                            setUrl([])
                                            setProgress(0)
                                            document.getElementById("price").value=""
                                            
                                            
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
        

                    } else{
                        alert("Phone number should start with 07 or 01 and must be numbers only")
                    }
     
                    } else alert("Price should have numbers only");

            } else alert("Price cannot be empty");
            

        } else{alert("description cannot be empty")}


      }   else{alert("caption cannot be empty")}


     

    
      



    }
 
     
       
    


    return (
       <center>
            <div className="upload-container">
                <GiForestCamp color="darkgreen" size={70}/>
            <h5 className="btm-text">Sell or lease your land</h5>
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
<input type="file" capture="camera"  accept="image/png, image/gif, image/jpeg" multiple name="" id="" className="image_file" onChange={handleChange}/>
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
           <label>Land Size:</label><br />
          <input  type="text" name="" id="size" className="image_input" placeholder="e.g 1 acre, 1 point etc" onChange={e=> setSize(e.target.value)} /> 
            </div>
          
            <div className="form-group">
           <label>Price:</label><br />
          Ksh:<input  type="number" name="" id="price" className="image_input" placeholder="numbers only" onChange={e=> setPrice(e.target.value)} /> 
            </div>


            <div className="form-group">
    <label for="exampleFormControlSelect1">For leasing or sale?</label><br/>
    <select className="form-c" id="exampleFormControlSelect1" name="purpose" onChange={e=>setPurpose(e.target.value)}>
      <option>Sale</option>
      <option>Leasing</option>
    </select>
    </div>
            
            <div className="form-group">
          <label>Description:</label><br />
          <textarea rows="7" cols="25" name="" id="" className="image_input1" placeholder="size, location, distance from the road, town etc. say all the good things about your piece of land" onChange={e=> setDescription(e.target.value)} />  
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
               image.length > 3 && description.length > 5 && price !="" && phone.length >= 10 && ward !=""?( <>
                
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
                    image.length < 4 ?(<h7 className="btm-text1">Make sure you have added 4 photos</h7>):(<></>)
                }
               </center>
               </>)
           }
          </div>
          <Link to="/sell"><button className="btn btn-success"><i className="fa fa-angle-left"></i> Back</button></Link>

        </div>
       </center>
    )
}

export default Upload
