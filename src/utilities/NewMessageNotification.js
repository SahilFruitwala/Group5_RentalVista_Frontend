import React from "react";
import Popup from "reactjs-popup";
import { Card, Row } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Blog() {


  return (
    <Popup  
          modal
          closeOnDocumentClick
          >                
          {
          <div style={{border: '5px',borderBlockColor: 'black', borderRadius: '10px', background: 'white'}}>
            <h2 style={{display: 'flex', justifyContent: 'center', color: 'black'}}>Blog Details</h2>
            <div className="validmsg" style={{justifyContent: 'center'}}> 
              <h4 className="card-title" style={{color: 'black'}}>Title: </h4>
              <hr />
              <p1 style={{color: 'black'}} >
                  Author: 
              </p1>
              <hr />
              <p1 style={{color: 'black'}} >
                  Description: 
              </p1>
                                                                  
            </div>
          </div>
            }
          
      </Popup>
  );
}

export default Blog;
