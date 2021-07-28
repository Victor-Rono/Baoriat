import React from 'react';
import Avatar from "@material-ui/core/Avatar"
import "./Posts.css";
const Posts = () => {
    var username="Victor";
    return (
        
        <div className="post card" >

           <div className="post_header">
           <Avatar alt= {username} src="" className="post_avatar"/>
           <h5 className="post_username"> {username} </h5> 
           </div>
               
           <img className="post_image card-img-top" src="https://images.unsplash.com/photo-1568202308917-2841d8704ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=376&q=80" alt="home" />
           <h6 className="post_caption card-body">
            
            <y className="comment_username">Username: </y>
           
            <y className="comment_post">caption</y>
           
           </h6>

           {/* <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div> */}
      </div>



        </div>
    )
}

export default Posts
