import React, { Component } from "react";
import "./index.css";
import { Button, FormGroup, Label, Input, FormText, Alert } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";

import Modal from "./forgot";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: "",
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: "",
      },
      show: false,
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.history.push("/");
    }
  }

  handleSubmit = () => {

    const { email, password } = this.state;

    this.setState({ error: false });

    if (email != null && password != null) {
      axios
        .post(
          "https://rentalvista-api.herokuapp.com/users/login",
          { email: this.state.email, password: this.state.password },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Request-Method": "POST",
            },
          }
        )
        .then((response) => {
          localStorage.setItem("token", response.data["token"]);
          this.props.history.push("/house");
        })
        .catch(({ response }) => {
          this.setState({ ...this.state, error: response["data"]["msg"] });
        });
    } else {
      alert("Please provide valid credentials!");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 && "Minimum 6 Characters Required!";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  handleShowModal = () => {
    this.setState({ ...this.state, show: !this.state.show });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div>
        {/* For Website Name */}
        <h1 className="web-title">
          <span className="font-weight-bold">Login</span>
        </h1>
        <div className="login-form">
          <div className="card container">
            <div className="card-body">
              {this.state.error === "" ? (
                <></>
              ): this.state.error && <Alert color="danger">
              {this.state.error}
            </Alert>}
              {/* Actual Login Form starts here*/}
              <FormGroup>
                <Label>Email</Label>
                <Input
                  className={formErrors.email.length > 0 ? "error" : null}
                  noValidate
                  onChange={this.handleChange}
                  required
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                ></Input>
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Password</Label>
                <Input
                  className={formErrors.password.length > 0 ? "error" : null}
                  noValidate
                  onChange={this.handleChange}
                  required
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                ></Input>
                {formErrors.password.length > 0 && (
                  <span className="errorMessage pb-3">
                    {formErrors.password}
                  </span>
                )}
              </FormGroup>
              <FormGroup>
                <Link to="" onClick={() => this.handleShowModal()}>
                  <FormText className="float-right">Forgot Password?</FormText>
                </Link>
              </FormGroup>
              <FormGroup>
                <Button
                  className="btn-lg btn-dark btn-block"
                  onClick={this.handleSubmit}
                >
                  Login
                </Button>
              </FormGroup>
            </div>
          </div>
        </div>
        {this.state.show && (
          <Modal
            show={this.state.show}
            handleShowModal={this.handleShowModal}
          />
        )}
      </div>
    );
  }
}

export default Login;
