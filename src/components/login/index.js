import React, { Component, useEffect } from "react";
import "./index.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
// import {
//   FacebookLoginButton,
//   GoogleLoginButton,
// } from "react-social-login-buttons";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

// useEffect(() => {
//     localStorage.getItem('token') ? console.log('HEY') : console.log('HI')
//     loginInstance.get({
//         headers: {"Authorization": ""}
//     })
// }, [])

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: "",
      },
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.history.push("/");
    }
  }

  handleSubmit = () => {
    // e.preventDefault();

    const { email, password } = this.state;

    this.setState({ error: false });

    if (email != null && password != null) {
      axios
        .post("http://localhost:8080/users/login", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Request-Method": "POST",
          },
          data: { email: this.state.email, password: this.state.password },
        })
        .then((response) => {
          // console.log(response.data);
          // alert(response.data['token']);
          localStorage.setItem("token", response.data["token"]);
          this.props.history.push("/house");
        })
        .catch((error) => {
          console.log(error);
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
        formErrors.email = emailRegex.test(value)
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

  render() {
    const { formErrors } = this.state;

    return (
      <div>
        {/* For Website Name */}
        <h1 className="web-title">
          <span className="font-weight-bold">Login</span>
        </h1>
        {/* <Form className="login-form" onSubmit={this.handleSubmit} noValidate> */}
        <div className="login-form">
          <div className="card container">
            <div className="card-body">
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
              <Button
                className="btn-lg btn-dark btn-block"
                onClick={this.handleSubmit}
              >
                Login
              </Button>
              {/* 
                            <div className="text-center pt-3">Or continue with your social account</div>

                            <FacebookLoginButton className="mt-3 mb-3" onClick={() => window.open('https://www.facebook.com/')} />
                            <GoogleLoginButton className="mt-3 mb-3" onClick={() => window.open('https://accounts.google.com/')} /> */}
            </div>
          </div>
        </div>
        {/* </Form> */}
      </div>
    );
  }
}

export default Login;
