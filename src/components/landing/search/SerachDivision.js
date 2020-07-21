import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SearchDivision.css";

import logo from "../../../assets/images/logo-dark.svg";
import illustration from "../../../assets/images/find-home.svg";

/* 
? Fill city detail
* API: https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Surat&key=AIzaSyA1SFifSfeA12NsLlJHVQRfK2Wa9iyTyNY&types=(cities)
//  TODO: Need to do for large screen
*/

function SerachDivision() {
  const [city, setCity] = useState("");

  const handleOnChange = (event) => {
    event.preventDefault();
    
    setCity(event.target.value);

    // API.get("", {
    //   params: {
    //     key: process.env.REACT_APP_GOOGLE_PLACE_API,
    //     type: "(cities)",
    //     input: event.target.value,
    //     "sessiontoken":"1234567890"
    //   },
    // }).then((response) => {
    //   // handle success
    //   console.log(response);
    // })
    
    // console.log(event.target.value)

  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-6 search-root">
          <img src={logo} alt="logo" />
          <h4>Find house where and how you wish...</h4>
          <InputGroup>
            <FormControl
              value={city}
              placeholder="Enter Location..."
              aria-label="Enter Location..."
              onChange={(e) => handleOnChange(e)}
            />
            <InputGroup.Append>
              <Button>
                <FontAwesomeIcon icon="search" />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <div className="co-12 col-lg-6 info-root">
          <img src={illustration} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default SerachDivision;
