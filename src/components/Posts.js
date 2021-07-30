import React from 'react';
import Avatar from "@material-ui/core/Avatar"
import "./Posts.css";
import { useStateValue } from '../state/StateProvider';
import{useState, memo, createContext, useContext} from "react";
import NumberFormat from "react-number-format";
const Posts = ({id, username, imageUrl, price, category, phone, businessType, payType, size, floors}) => {
    const [{user}, dispatch] = useStateValue();
    const uzer = user.displayName;

    const [comments, setComments] = useState([]);
    if(category == null){
        category = "";
    }
 var title ="X";
if(size !== undefined && size !== ""){
    businessType =`Land, ${size}`;
}


// if(floors !== undefined){
//     businessType =`Land, ${size}`;
// }


    return (
        
        <div className="post">

           <div className="post_header">
           {/* <Avatar alt= {username} src={imageUrl} className="post_avatar"/> */}
           {
               businessType !== undefined?(<>
               <h7 className="post_username"> {businessType.substring(0,24)} </h7> 
               
               </>):(<>
                <h7 className="post_username"> {category.substring(0,24)} </h7> 
               </>)
           }
           </div>
               
           <img className="post_image" src={imageUrl} alt="home" />
           <h7 className="post_caption">
           {
               username === user.displayName ?(<>
             <span><small className="text-success"><i className="fa fa-check"></i><strong> Posted by you</strong></small></span>
              </>
              ) :(<></>)
           }
            <y className="noclick"><NumberFormat prefix={"Ksh "} className="comment_username" value={price} thousandSeparator= {true}/> </y>
           <h7>&nbsp;{payType}</h7>
        
            {/* <y className="comment_post">{}</y> */}
           
           </h7>
        </div>
    )
}

export default Posts
