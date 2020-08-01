//Author: Harshitha M.S. - 
import React, { Component } from "react";
import axios from "axios";
import { Button } from "reactstrap";

let flag = 0;

const MAX_LENGTH = 25;

const validateForm = (errors) => {
  let valid = false;
  Object.values(errors).forEach((val) => {
    if (val == "set" && flag == 1) {
      valid = true;
    } else {
      valid = false;
    }
  });
  return valid;
};
const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach((val) => {
    if (val.length > 0) {
      if (val !== "set") {
        count = count + 1;
      }
    }
  });
  return count;
};

export default class addComment extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.state = {
      formValid: false,
      errorCount: null,
      comment: "",
      id: null,

      posts: [],

      errors: {
        comment: "",
      },
    };
  }

  componentDidMount() {
    axios
      .get("https://rentalvista-api.herokuapp.com/getcomment")
      .then((response) => {
        console.log(response);
        this.setState({ ...this.state, posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ ...this.state, errorMsg: "Error retrieving data" });
      });
  }

  handleChange = (event) => {
    console.log("Hi");
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({ ...this.state, comment: value }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    console.log("Submit working");
    console.log(this.state);
    axios
      .post("https://rentalvista-api.herokuapp.com/addcomment", this.state)
      .then((response) => {
        console.log(response);
        this.componentDidMount();

        this.play("Comment Added Successfully");
        console.log(this.state);
        this.cancelCourse();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  resetForm = () => {
    this.setState({ comment: "" });
  };
  cancelCourse = () => {
    document.getElementById("create-course-form").reset();
  };

  play(msg) {
    alert(msg);
  }

  render() {
    const { errors, formValid } = this.state;
    const displayComment = this.state.posts;

    return (
      <div>
        <h3>Add Your Comment </h3>
        <div className="form-group">
          <textarea
            name="comment"
            rows="3"
            required
            value={this.state.comment}
            onChange={this.handleChange}
            className="form-control"
            placeholder="Type a comment"
          />
        </div>
        <div className="form-group" align="right">
          <Button
            onClick={this.handleSubmit}
            className="btn btn-dark"
            value="Submit"
          >
            Submit
          </Button>
        </div>
        <h3>Comments</h3>
        <div className="card mb-2">
          <div className="row">
            <div className="col-md-10 px-3">
              <div className="card-block px-3">
                <h5
                  className="card-title text-dark"
                  style={{ marginTop: "10px", fontWeight: "bolder" }}
                >
                  {this.state.posts.length > 0
                    ? this.state.posts.map((post) => {
                        return <p> {post.comment} </p>;
                      })
                    : null}
                </h5>
                <p className="card-text" style={{ fontSize: "16px" }}></p>
              </div>
            </div>
            <div className="col-md-2 px-3">
              <div>
                <br />
                <div>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bolder",
                      verticalAlign: "4px",
                    }}
                  >
                    {" "}
                    &nbsp;&nbsp;&nbsp;
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
