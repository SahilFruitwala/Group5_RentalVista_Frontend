// Author: Gaurav Anand - B00832139
import React, { Component } from "react";
import ImageUploading from "react-images-uploading";
import axios from "axios";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SuccessModal from './../../utilities/SuccessModal';

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg mb-3">{props.message}</div>;
  }
  return null;
}

const maxNumber = 10;
const maxMbFileSize = 5 * 1024 * 1024;

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: "",
      headlineValid: false,
      location: "",
      locationValid: false,
      rent: "",
      rentValid: false,
      date: "",
      dateValid: false,
      detail: "",
      detailValid: false,
      bed: "",
      bedValid: false,
      bath: "",
      bathValid: false,
      formValid: false,
      errorMsg: {},
      checkBoxArray: [],
      isPromoted: false,
      isFurnished: false,
      isPetFriendly: false,
      selectedImages: [],
      todaysDate: "",
      displayModal: false,
      isDisabled: false,
    };
    this.setTodaysDate();
  }

  handleModal = (msg) => {
    this.setState({displayModal: !this.state.displayModal})
  };

  goToHome = () => {
    this.setState({displayModal: !this.state.displayModal})
    if(this.state.isPromoted){
                                          //If Advertise posting is checked then goto payments page
      this.props.history.push("/payment");        
    }
    else
    {                                     // If Advertise posting is not checked go to list rooms page
      this.props.history.push("/house");  
    }
    
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
    } else {
      this.props.history.push("/login")
    }
  }

  setTodaysDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

    today = yyyy+'-'+mm+'-'+dd;
    this.setState({todaysDate: today})
  }

  submitHandler = () => {    
    axios
      .post("https://rentalvista-api.herokuapp.com/post/add", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Request-Method": "POST",
          Authorization: localStorage.getItem("token")
        },
        data: {
          headline: this.state.headline,
          location: this.state.location,
          rent: this.state.rent,
          date: this.state.date,
          detail: this.state.detail,
          bedrooms: this.state.bed,
          bathrooms: this.state.bath,
          furnishing: this.state.isFurnished,
          petFriendly: this.state.isPetFriendly,
          amenities: this.state.checkBoxArray,
          promoted: this.state.isPromoted,
          images: this.state.selectedImages,
          disabled: this.state.isDisabled
        },
      })
      .then((response) => {
        console.log(response)
        this.handleModal()
      })
      .catch((error) => {
        console.log(error);
        // res = false
      });
  };

  onFurnishingChange(e) {
    this.setState({isFurnished: e.target.value})
  }

  onPetFriendlyChange(e) {
    this.setState({isPetFriendly: e.target.value})
  }

  onCheckboxChange(e) {
    const checkBoxArray = this.state.checkBoxArray
    let index

    if (e.target.checked) {
      checkBoxArray.push(e.target.value)
    } else {
      index = checkBoxArray.indexOf(e.target.value)
      checkBoxArray.splice(index, 1)
    }

    this.setState({ checkBoxArray: checkBoxArray })
  }

  onCheckboxChange2(e) {
    let checkBox = false
    console.log("Before if"+this.state.isPromoted)
    if (e.target.checked) {
      checkBox = true
      console.log("In if"+checkBox)
    } else {
      checkBox = false
      console.log("In else"+checkBox)
    }
    this.setState({ isPromoted: checkBox }, () => {
      console.log(this.state.isPromoted, 'promotedval');
    });
  }

  checkIfFormValid = () => {
    if (!this.state.formValid) {
      return <h6 className="error-msg">Please fill all fields to continue</h6>;
    } else {
      return;
    }
  };

  onImageChange = (imageList, files) => {
    this.setState({selectedImages: imageList})
    console.log(this.state.selectedImages);
  };
  onImageUploadError = (errors, files) => {
    console.log(errors, files);
  };

  validateForm = () => {
    const {
      headlineValid,
      locationValid,
      rentValid,
      dateValid,
      detailValid,
      bedValid,
      bathValid,
    } = this.state;
    this.setState({
      formValid:
        headlineValid &&
        locationValid &&
        rentValid &&
        dateValid &&
        detailValid &&
        bedValid &&
        bathValid,
    });
  };

  updateHeadline = (headline) => {
    this.setState({ headline }, this.validateHeadline);
  };

  validateHeadline = () => {
    const { headline } = this.state;
    let headlineValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (headline.length < 10) {
      headlineValid = false;
      errorMsg.headline = "Headline should be at least 10 characters long";
    }
    this.setState({ headlineValid, errorMsg }, this.validateForm);
  };

  updateLocation = (location) => {
    this.setState({ location }, this.validateLocation);
  };

  validateLocation = () => {
    const { location } = this.state;
    let locationValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (location.length === 0) {
      locationValid = false;
      errorMsg.location = "Location cannot be left blank";
    }
    this.setState({ locationValid, errorMsg }, this.validateForm);
  };

  updateRent = (rent) => {
    this.setState({ rent }, this.validateRent);
  };

  validateRent = () => {
    const { rent } = this.state;
    let rentValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (rent.length === 0) {
      rentValid = false;
      errorMsg.rent = "Rent cannot be left blank";
    }
    this.setState({ rentValid, errorMsg }, this.validateForm);
  };

  updateDate = (date) => {
    this.setState({ date }, this.validateDate);
  };

  validateDate = () => {
    const { date } = this.state;
    let dateValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (date === "yyyy-mm-dd") {
      dateValid = false;
      errorMsg.date = "Please select a move-in date";
    }
    this.setState({ dateValid, errorMsg }, this.validateForm);
  };

  updateDetail = (detail) => {
    this.setState({ detail }, this.validateDetail);
  };

  validateDetail = () => {
    const { detail } = this.state;
    let detailValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (detail.length < 20) {
      detailValid = false;
      errorMsg.detail = "Detail should contain at least 20 characters";
    }
    this.setState({ detailValid, errorMsg }, this.validateForm);
  };

  updateBed = (bed) => {
    this.setState({ bed }, this.validateBed);
  };

  validateBed = () => {
    const { bed } = this.state;
    let bedValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (bed === "Select") {
      bedValid = false;
      errorMsg.bed = "Please select number of bedrooms";
    }
    this.setState({ bedValid, errorMsg }, this.validateForm);
  };

  updateBath = (bath) => {
    this.setState({ bath }, this.validateBath);
  };

  validateBath = () => {
    const { bath } = this.state;
    let bathValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (bath === "Select") {
      bathValid = false;
      errorMsg.bath = "Please select number of bathrooms";
    }
    this.setState({ bathValid, errorMsg }, this.validateForm);
  };

  render() {
    return (
      <>
      <div style={{ backgroundColor: "rgb(219, 219, 219)" }}>
        <div
          className="container mt-4 border rounded"
          style={{ padding: "30px", backgroundColor: "white" }}
        >
          <div className="row">
            <div className="col-md-8 mb-2 text-left">
              <h2>Property Details</h2>
              <hr />
                <ImageUploading
                  className="mb-3"
                  onChange={this.onImageChange}
                  maxNumber={maxNumber}
                  multiple
                  maxFileSize={maxMbFileSize}
                  acceptType={["jpg", "gif", "png"]}
                  onError={this.onImageUploadError}
                >
                  {({ imageList, onImageUpload}) => (
                    <div>
                      <button className="mb-3" type="button" onClick={onImageUpload}>Upload images</button><label className="error-msg">Choose .jpg, .png or .gif files(Max 5MB)</label>        
                      {imageList.map((image) => (
                        <div key={image.key} className='fadein'>
                          <div 
                            onClick={image.onRemove} 
                            className='delete'
                          >
                            <FontAwesomeIcon icon={faTimesCircle} size='lg' />
                          </div>
                          <img className="mb-3" src={image.dataURL} alt="" width="150"/>
                        </div>
                      ))}
                    </div>
                  )}
                </ImageUploading>
                <label htmlFor="headline">Property Headline</label>
                <div className="mb-3" style={{ width: "60%"}}>
                  <input
                    id="headline"
                    name="headline"
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    value={this.state.headline}
                    onFocus={(e) => this.updateHeadline(e.target.value)}
                    onChange={(e) => this.updateHeadline(e.target.value)}
                  />
                </div>
                <ValidationMessage
                  valid={this.state.headlineValid}
                  message={this.state.errorMsg.headline}
                />
                <label htmlFor="location">Location</label>
                <div className="mb-3" style={{ width: "60%" }}>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    value={this.state.location}
                    onFocus={(e) => this.updateLocation(e.target.value)}
                    onChange={(e) => this.updateLocation(e.target.value)}
                  />
                </div>
                <ValidationMessage
                  valid={this.state.locationValid}
                  message={this.state.errorMsg.location}
                />
                <label htmlFor="rent">Monthly Rent in Dollars</label>
                <div className="mb-3" style={{ width: "60%" }}>
                  <input
                    id="rent"
                    name="rent"
                    type="number"
                    min="0"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    value={this.state.rent}
                    onFocus={(e) => this.updateRent(e.target.value)}
                    onChange={(e) => this.updateRent(e.target.value)}
                  />
                </div>
                <ValidationMessage
                  valid={this.state.rentValid}
                  message={this.state.errorMsg.rent}
                />
                <div className="form-group">
                  <label className="control-label" htmlFor="date">
                    Move-in Date
                  </label>
                  <input
                    style={{ width: "60%" }}
                    className="form-control"
                    id="datefield"
                    name="date"
                    placeholder="MM/DD/YYYY"
                    onClick={() => this.setTodaysDate()}
                    type="date"
                    min={this.state.todaysDate}
                    value={this.state.date}
                    onFocus={(e) => this.updateDate(e.target.value)}
                    onChange={(e) => this.updateDate(e.target.value)}
                  />
                </div>
                <ValidationMessage
                  valid={this.state.dateValid}
                  message={this.state.errorMsg.date}
                />
                <div className="form-group mt-3">
                  <label htmlFor="description">
                    Describe your property in detail. Our popular property
                    listings are more than 150 words long.
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="8"
                    value={this.state.detail}
                    onFocus={(e) => this.updateDetail(e.target.value)}
                    onChange={(e) => this.updateDetail(e.target.value)}
                  ></textarea>
                </div>
                <ValidationMessage
                  valid={this.state.detailValid}
                  message={this.state.errorMsg.detail}
                />
                <div>
                  <div className="form-group mt-3">
                    <label
                      className="my-1 mr-2"
                      htmlFor="bedrooms"
                      style={{ width: "20%" }}
                    >
                      Bedrooms
                    </label>
                    <select
                      className="custom-select my-1 mr-sm-2"
                      id="bedrooms"
                      name="bedrooms"
                      style={{ width: "40%" }}
                      value={this.state.bed}
                      onFocus={(e) => this.updateBed(e.target.value)}
                      onChange={(e) => this.updateBed(e.target.value)}
                    >
                      <option value="Select">Select</option>
                      <option value="1">1 Bedroom</option>
                      <option value="2">2 Bedrooms</option>
                      <option value="3">3 Bedrooms</option>
                      <option value="4">4 Bedrooms</option>
                      <option value="5">5 Bedrooms</option>
                    </select>
                  </div>
                  <ValidationMessage
                    valid={this.state.bedValid}
                    message={this.state.errorMsg.bed}
                  />
                  <div className="form-group mt-3">
                    <label
                      className="my-1 mr-2"
                      htmlFor="bathrooms"
                      style={{ width: "20%" }}
                    >
                      Bathrooms
                    </label>
                    <select
                      className="custom-select my-1 mr-sm-2"
                      id="bathrooms"
                      name="bathrooms"
                      style={{ width: "40%" }}
                      value={this.state.bath}
                      onFocus={(e) => this.updateBath(e.target.value)}
                      onChange={(e) => this.updateBath(e.target.value)}
                    >
                      <option value="Select">Select</option>
                      <option value="1">1</option>
                      <option value="1.5">1.5</option>
                      <option value="2">2</option>
                      <option value="2.5">2.5</option>
                      <option value="3">3</option>
                      <option value="3+">3+</option>
                    </select>
                  </div>
                  <ValidationMessage
                    valid={this.state.bathValid}
                    message={this.state.errorMsg.bath}
                  />
                </div>
                <div>
                  <label className="control-label">Furnishing</label>
                </div>
                <div className="form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="furnishingRadio"
                    id="furnishedRadio"
                    value="true"
                    onChange={this.onFurnishingChange.bind(this)}
                  />
                  <label className="form-check-label" htmlFor="furnishedRadio">
                    Furnished
                  </label>
                </div>
                <div className="form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="furnishingRadio"
                    id="unfurnishedRadio"
                    value="false"
                    defaultChecked
                    onChange={this.onFurnishingChange.bind(this)}
                  />
                  <label className="form-check-label" htmlFor="unfurnishedRadio">
                    Unfurnished
                  </label>
                </div>
                <div>
                  <label className="control-label mt-3">Pet Friendly</label>
                </div>
                <div className="form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="petFriendlyRadio"
                    id="petFriendlyYesRadio"
                    value="true"
                    onChange={this.onPetFriendlyChange.bind(this)}
                  />
                  <label className="form-check-label" htmlFor="petFriendlyYesRadio">
                    Yes
                  </label>
                </div>
                <div className="form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="petFriendlyRadio"
                    id="petFriendlyNoRadio"
                    value="false"
                    defaultChecked
                    onChange={this.onPetFriendlyChange.bind(this)}
                  />
                  <label className="form-check-label" htmlFor="petFriendlyNoRadio">
                    No
                  </label>
                </div>
                <div>
                  <label className="control-label mt-3">Amenities</label>
                </div>
                <div className="form-check-inline">
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Elevator"
                        id="defaultCheck1"
                        onChange={this.onCheckboxChange.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="defaultCheck1">
                        Elevator
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Low-rise"
                        id="defaultCheck2"
                        onChange={this.onCheckboxChange.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="defaultCheck2">
                        Low-rise
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Garage"
                        id="defaultCheck3"
                        onChange={this.onCheckboxChange.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="defaultCheck3">
                        Garage
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Security"
                        id="defaultCheck4"
                        onChange={this.onCheckboxChange.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="defaultCheck4">
                        Security
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Internet"
                        id="defaultCheck5"
                        onChange={this.onCheckboxChange.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="defaultCheck5">
                        Internet
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Swimming Pool"
                        id="defaultCheck6"
                        onChange={this.onCheckboxChange.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="defaultCheck6">
                        Swimming Pool
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Near Bus Stop"
                        id="defaultCheck7"
                        onChange={this.onCheckboxChange.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="defaultCheck7">
                        Near Bus Stop
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Covered Parking"
                        id="defaultCheck8"
                        onChange={this.onCheckboxChange.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="defaultCheck8">
                        Covered Parking
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Health Club"
                        id="defaultCheck9"
                        onChange={this.onCheckboxChange.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="defaultCheck9">
                        Health Club
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="High-rise"
                        id="defaultCheck10"
                        onChange={this.onCheckboxChange.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="defaultCheck10">
                        High-rise
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Disability Access"
                        id="defaultCheck11"
                        onChange={this.onCheckboxChange.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="defaultCheck11">
                        Disability Access
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Walkup"
                        id="defaultCheck12"
                        onChange={this.onCheckboxChange.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="defaultCheck12">
                        Walkup
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Electronic Security"
                        id="defaultCheck13"
                        onChange={this.onCheckboxChange.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="defaultCheck13">
                        Electronic Security
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Laundromat"
                        id="defaultCheck14"
                        onChange={this.onCheckboxChange.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="defaultCheck14">
                        Laundromat
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Street Parking"
                        id="defaultCheck15"
                        onChange={this.onCheckboxChange.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="defaultCheck15">
                        Street Parking
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Near Subway"
                        id="defaultCheck16"
                        onChange={this.onCheckboxChange.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="defaultCheck16">
                        Near Subway
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="control-label mt-3" style={{fontWeight: "bold"}}>Room Advertisement</label>
                </div>
                <div className="form">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Advert room"
                        id="defaultCheck17"
                        onChange={this.onCheckboxChange2.bind(this)}
                        style={{marginLeft: '20px'}}
                      />
                      <label className="form-check" htmlFor="defaultCheck17" style={{fontWeight: "bold",marginLeft: '20px'}}>
                        Advertise Room? (10$ Payment Fee for prioritizing your room post)
                      </label>
                    </div>
                <div className="text-center">
                  <button
                    className="btn btn-info mt-5 mb-1 text-uppercase"
                    style={{ width: "20%" }}
                    disabled={!this.state.formValid}
                    // onSubmit={() => this.props.history.push("/")}
                    onClick={this.submitHandler}
                  >
                    Post Ad
                  </button>
                </div>
              {/* </form> */}
              <div className="mt-2 text-center">{this.checkIfFormValid()}</div>
            </div>
            <div
              className="col-md-4 mt-5 border rounded text-center align-self-start"
              style={{ maxHeight: "500px" }}
            >
              <img
                className="img-fluid rounded-circle mb-3 mt-4"
                style={{ width: "200px", height: "200px" }}
                src={require("./../../assets/images/user.svg")}
                alt=""
              />
              <a className="btn btn-info mt-3 mb-1" href="/edit">
                View My Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      {
        this.state.displayModal && (
        <SuccessModal
          message={{
            title: "Success!",
            body: {"message" : "Property has been added to your account!"},
            show: true
          }}

          renderComponent={this.goToHome}
        />
      )}
      </>
    );
  }
}

export default AddPost;