import React, { Component } from "react";
import "./index.css";

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}

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
    };
  }

  checkIfFormValid = () => {
    if (!this.state.formValid) {
      return <h6 className="error-msg">Please fill all fields to continue</h6>;
    } else {
      return;
    }
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
      <div style={{ backgroundColor: "rgb(219, 219, 219)" }}>
        <div
          className="container mt-4 border rounded"
          style={{ padding: "30px", backgroundColor: "white" }}
        >
          <div className="row">
            <div className="col-md-8 mb-2 text-left">
              <h2>Property Details</h2>
              <hr />
              {/* <form
                className="form-signin" */}
                
                {/* noValidate */}
              {/* > */}
                <label for="headline">Property Headline</label>
                <div className="input-group mb-3" style={{ width: "60%",border: "1px solid black " }}>
                  <input
                    id="headline"
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
                <label for="location">Location</label>
                <div className="input-group mb-3" style={{ width: "60%",border:"1px solid black " }}>
                  <input
                    id="location"
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
                <label for="rent">Monthly Rent</label>
                <div className="input-group mb-3" style={{ width: "60%",border:"1px solid black"  }}>
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    id="rent"
                    type="number"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    value={this.state.rent}
                    onFocus={(e) => this.updateRent(e.target.value)}
                    onChange={(e) => this.updateRent(e.target.value)}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                  </div>
                </div>
                <ValidationMessage
                  valid={this.state.rentValid}
                  message={this.state.errorMsg.rent}
                />
                <div className="form-group">
                  <label className="control-label" for="date">
                    Move-in Date
                  </label>
                  <input
                    style={{ width: "60%" }}
                    className="form-control"
                    id="date"
                    name="date"
                    placeholder="MM/DD/YYYY"
                    type="date"
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
                  <label for="exampleFormControlTextarea1">
                    Describe your property in detail. Our popular property
                    listings are more than 150 words long.
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
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
                      for="inlineFormCustomSelectPref"
                      style={{ width: "20%" }}
                    >
                      Bedrooms
                    </label>
                    <select
                      className="custom-select my-1 mr-sm-2"
                      id="inlineFormCustomSelectPref"
                      style={{ width: "40%" }}
                      value={this.state.bed}
                      onFocus={(e) => this.updateBed(e.target.value)}
                      onChange={(e) => this.updateBed(e.target.value)}
                    >
                      <option selected>Select</option>
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
                      for="inlineFormCustomSelectPref"
                      style={{ width: "20%" }}
                    >
                      Bathrooms
                    </label>
                    <select
                      className="custom-select my-1 mr-sm-2"
                      id="inlineFormCustomSelectPref"
                      style={{ width: "40%" }}
                      value={this.state.bath}
                      onFocus={(e) => this.updateBath(e.target.value)}
                      onChange={(e) => this.updateBath(e.target.value)}
                    >
                      <option selected>Select</option>
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
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="Furnished"
                  />
                  <label className="form-check-label" for="exampleRadios1">
                    Furnished
                  </label>
                </div>
                <div className="form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="Unfurnished"
                    checked
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    Unfurnished
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
                        value=""
                        id="defaultCheck1"
                      />
                      <label className="form-check-label" for="defaultCheck1">
                        Elevator
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck2"
                      />
                      <label className="form-check-label" for="defaultCheck2">
                        Low-rise
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck3"
                      />
                      <label className="form-check-label" for="defaultCheck3">
                        Garage
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck4"
                      />
                      <label className="form-check-label" for="defaultCheck4">
                        Security
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck5"
                      />
                      <label className="form-check-label" for="defaultCheck5">
                        Internet
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck6"
                      />
                      <label className="form-check-label" for="defaultCheck6">
                        Swimming Pool
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck7"
                      />
                      <label className="form-check-label" for="defaultCheck7">
                        Near Bus Stop
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck8"
                      />
                      <label className="form-check-label" for="defaultCheck8">
                        Covered Parking
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck9"
                      />
                      <label className="form-check-label" for="defaultCheck9">
                        Health Club
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck10"
                      />
                      <label className="form-check-label" for="defaultCheck10">
                        High-rise
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck11"
                      />
                      <label className="form-check-label" for="defaultCheck11">
                        Disability Access
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck12"
                      />
                      <label className="form-check-label" for="defaultCheck12">
                        Walkup
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck13"
                      />
                      <label className="form-check-label" for="defaultCheck13">
                        Electronic Security
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck14"
                      />
                      <label className="form-check-label" for="defaultCheck14">
                        Laundromat
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck15"
                      />
                      <label className="form-check-label" for="defaultCheck15">
                        Street Parking
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck16"
                      />
                      <label className="form-check-label" for="defaultCheck16">
                        Near Subway
                      </label>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-info mt-5 mb-1 text-uppercase"
                    style={{ width: "20%" }}
                    disabled={!this.state.formValid}
                    onSubmit={() => this.props.history.push("/")}
                    type="submit"
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
              />
              <h2 className="mt-3">John Martin</h2>
              <a className="btn btn-info mt-3 mb-1" href="#">
                View My Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPost;
