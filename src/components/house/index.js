import React, { useState } from "react";
import { Jumbotron, Row, Col, Form} from "react-bootstrap";

import HouseList from "./list/HouseList";
import HouseData from "./list/HouseData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const initialFilter = {
  min: 100,
  max: 2500,
  sorting: "Any",
  pet: false,
};

function HousePage() {
  const [tempData, setTempData] = useState(initialFilter);
  const [houseData, setHouseData] = useState(HouseData);
  const [error, setError] = useState({display: "none"});

  const handleFilter = () => {
    if(tempData.min > tempData.max || tempData.min < 0 || isNaN(tempData.min) || tempData.min === ""  || tempData.max === "" || tempData.max < 50 || tempData.max < 0 || isNaN(tempData.max))
     {
       setError({})
     }
     else {
    let newData = HouseData.filter((house) => {
      if (house.rent >= tempData.min && house.rent <= tempData.max) {
        if (house.pet === tempData.pet) {
          return true;
        }
      }
      return false;
    });

    switch (tempData.sorting) {
      case "one":
        newData = newData.sort(
          (a, b) => parseFloat(a.rent) - parseFloat(b.rent)
        );
        break;
      case "two":
        newData = newData.sort(
          (a, b) => parseFloat(b.rent) - parseFloat(a.rent)
        );
        break;
      case "three":
        newData = newData.sort(
          (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
        );
        break;
      case "four":
        newData = newData.sort(
          (a, b) => parseFloat(a.rating) - parseFloat(b.rating)
        );
        break;
      default:
        break;
    }

    // console.lo
    setHouseData(newData);
  }
  };

  const handleChnage = (data) => {
    setTempData({
      ...tempData,
      ...data,
    });
  };


  return (
    <>
      <Jumbotron>
        <h1 className="text-center pb-2">Apartments in Toronto</h1>
        <Row className="drawer justify-content-center">
          <Col sm={4} md={4} lg={3}>
            <Row>
              <Col>
                <Form.Label>Min Price</Form.Label>
                <Form.Control
                  type="number"
                  value={tempData.min}
                  onChange={(e) => {
                    handleChnage({
                      min: e.target.value,
                    });
                  }}
                />
              </Col>
              <Col>
                <Form.Label>Max Price</Form.Label>
                <Form.Control
                  type="number"
                  value={tempData.max}
                  onChange={(e) => {
                    handleChnage({
                      max: e.target.value,
                    });
                  }}
                />
              </Col>
            </Row>
              
          </Col>
          <Col sm={4} md={4} lg={3}>
            <Form.Label>Sort by</Form.Label>
            <Form.Control
              as="select"
              value={tempData.sorting}
              onChange={(e) => {
                handleChnage({ sorting: e.target.value });
              }}
            >
              <option value="any">Any</option>
              <option value="one">Price: Low to High</option>
              <option value="two">Price: High to Low</option>
              <option value="three">Rating: High to Low</option>
              <option value="four">Rating: Low to High</option>
            </Form.Control>
          </Col>
          <Col md={2} sm={2} lg={1}>
            <Form.Label>Pet Allowed</Form.Label>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Yes"
              onChange={(e) => {
                handleChnage({
                  pet: e.target.value === "on" && !tempData.pet ? true : false,
                });
              }}
            />
          </Col>
          <Col md={2} sm={2} lg={1}>
            <button className="btn btn-info" onClick={handleFilter}>
              Apply
            </button>
          </Col>
        </Row>
        <Form.Text className="text-center" style={error}><FontAwesomeIcon icon="exclamation-circle" color="#ff0000" /> Enter Valid Amount!</Form.Text>
      </Jumbotron>
      <HouseList houses={houseData} />
    </>
  );
}

export default HousePage;
