import React, { Component } from "react";
import "./index.css";
import ImageUploading from "react-images-uploading";
import axios from "axios";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const rooms = [];

function roomsData(){
  () => {
    // console.log(this.state.headline+this.state.location+this.state.rent+this.state.date+this.state.detail+this.state.bed+this.state.bath+'checkbox list is' + this.state.checkBoxArray + ' '+ this.state.isFurnished+' '+ this.state.isPetFriendly+ this.state.selectedImages);
    
    axios
      .post("http://localhost:8080/post/get", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Request-Method": "POST",
          Authorization: localStorage.getItem("token")
        },
      })
      .then((response) => {
        console.log(response)
        rooms = response.data;
      })
      .catch((error) => {
        console.log(error);
        // res = false
      });
  };
}

export default rooms;