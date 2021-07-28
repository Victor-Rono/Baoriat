
import React from "react";
import {useHistory, BrowserRouter as Router, Route, Link } from "react-router-dom";
import {BrowserRouter,  Switch } from 'react-router-dom';
import{useState, memo, createContext, useContext} from "react";
import { useStateValue } from '../state/StateProvider';
import {db, storage} from "../firebase";
import firebase from "firebase";
import Compressor from 'compressorjs';

import "./ImageUpload.css";



const ImageUpload = () => {
    const [{user}, dispatch] = useStateValue();
    const uzer = user.displayName;
    const mobile = user.phoneNumber;
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState([]);
    const [progress, setProgress] = useState(0);
    const [uploaded, setUploaded] = useState(0);
    const [description, setDescription] = useState();
    const [url, setUrl] = useState([]);
    const [flip, setFlip] = useState(0);
    const [price, setPrice] = useState();
   
    const theUrl = ()=>{console.log(url)}
   
   
    const handleChange = (e)=>{
        
        
        
        if(image.length <4){
            for(var i =0; i <= 3; i++){
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
            
            setUploaded(image.length);
          
        
        } else{
            alert("4 images uploaded already");
        }

    }

 const reset = ()=>{setImage([]); setUrl([])}




    const handleUpload = ()=>{
        // setFlip(1);
        var no = Math.floor(Math.random()*200000);
        var uzer2 = uzer + no;
        
        const promises = [];
       

      if(caption != ""){

        if(description != ""){

            if(price != ""){

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
                                setProgress(0);
                                //setImage(null);
                                setCaption("")
                                
                            })
                            
                        }
                    )
                       } else{
                           alert("image is required")
                       }
        
                })
                    Promise.all(promises)
                    .then()
                    .catch((err)=>console.log(err))

            }
            

        } else{alert("description cannot be empty")}


      }   else{alert("caption cannot be empty")}
    
      if(flip === 0 && url.length >= 2){
        setFlip(1);
            setUrl([])
            setImage([]);
               
    
       }
    



    }

  
    
  

    return (
        <div className="row">
          <div className="image_upload col-md-4 justify-content-center">
             
          <div className="form-group">
              <label>Property Name:</label><br />
          <input  type="text" name="" id="" className="image_input" placeholder="....." onChange={e=> setCaption(e.target.value)} /> 
            </div>

            <div className="form-group">
           <label>Price:</label><br />
          Ksh:<input  type="number" name="" id="" className="image_input" placeholder="....." onChange={e=> setPrice(e.target.value)} /> 
            </div>
            
            <div className="form-group">
          <label>Description:</label><br />
          <textarea name="" id="" className="image_input1" placeholder="size, location, age, etc etc" onChange={e=> setDescription(e.target.value)} />  
          </div>
          <br /><br /> 

          {

image.length >0 ?

image.map((images)=>{
   return (<><span>
       <i className="fa fa-check text-success"></i>
       {images.name}<br /></span></>)
})


    
: (<></>)

}  



         {image.length < 2 ?(

         <>
          
         <label>Images:</label> <br /><input type="file" capture="camera"  accept="image/png, image/gif, image/jpeg" multiple name="" id="" className="image_file" onChange={handleChange}/>
         
         
         </>):
         
         (<></>)}
        
          {/* <input type="file" name="" id=""  onChange={handleChange2}/>
          <input type="file" name="" id=""  onChange={handleChange3}/> */}
          
<span className="text-success"> <center><b>{image.length}/4</b></center></span>    

           {
               image.length > 2 && caption !="" && description.length > 5 && price !=""?( <><h6>3 Images already selected</h6>
                
                <div className="choose">
                <button className="btn btn-danger" onClick={reset}><i className="fa fa-trash"></i>Remove Images</button> 
              
                <><button onClick={handleUpload} className="btn btn-success image_button" id="btn_md">
                   <i className="fa fa-check"></i>Submit
               </button></>
              
                </div>
               <center>
               <progress className="image_progress" value={progress} max="100"/><br />
                {progress} %
               </center>
               </>)

               :(<><h6 className="btm-text"><br /><center>NOTE:</center><br />1.Name, price and description must be filled before submitting
               <br /><br />2. You should also upload 3 Images</h6></>)
           }
          </div>
        </div>
    )
}

export default ImageUpload
