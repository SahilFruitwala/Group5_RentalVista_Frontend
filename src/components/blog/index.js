//Author: Amogh Adithya Bangalore - B00833535

import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import axios from "axios";
import blog1 from "../../assets/images/blogimage.jpg";

let flag = 0;

const MAX_LENGTH = 25; //Character limit for card view text in blog page

const validateForm = (errors) => {
  let valid = false;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => {
      if (val == "set" && flag == 1) {
        valid = true;
      } else {
        valid = false;
      }
    }
  );
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

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.state = {
      formValid: false,
      errorCount: null,
      title: null,
      desc: null,
      author: null,
      id: null,

      posts: [],

      errors: {
        title: "",
        desc: "",
        author: "",
      },
    };
  }

  componentDidMount() {
    console.clear();
    if (localStorage.getItem("token")) {
    } else {
      this.props.history.push("/login");
    }
    const imagesToBePreloaded = [blog1];
    imagesToBePreloaded.forEach((image) => {
      new Image().src = image;
    });

    this.inputRef.current.focus();

    axios
      .get("https://rentalvista-api.herokuapp.com/getblog")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        this.setState({ errorMsg: "Error retrieving data" });
      }).finally(() => {
        console.clear()
      });
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "title":
        if (!event.target.value.match(/^[a-zA-Z0-9 ]+$/i)) {
          event.target.value = event.target.value.replace(
            /[^A-Za-z0-9 ]/gi,
            ""
          );
        } else {
          errors.title =
            value.length < 5 ? "Min 5 alphabetic characters!" : "set";
          if (value.length >= 5) {
            flag = 1;
          } else {
            flag = 0;
          }
        }
        break;

      case "desc":
        if (!event.target.value.match(/^[a-zA-Z0-9,! .]+$/i)) {
          event.target.value = event.target.value.replace(
            /[^A-Za-z0-9.,! ]/gi,
            ""
          );
        } else {
          errors.desc = value.length <= 1 ? "Enter some text!" : "set";
          if (value.length >= 2) {
            flag = 1;
          } else {
            flag = 0;
          }
        }
        break;

      case "author":
        if (!event.target.value.match(/^[a-zA-Z .]+$/i)) {
          event.target.value = event.target.value.replace(/[^A-Za-z. ]/gi, "");
        } else {
          errors.author =
            value.length < 5 ? "Min 5 alphabetic characters!" : "set";
          if (value.length >= 5) {
            flag = 1;
          } else {
            flag = 0;
          }
        }
        break;

      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      //console.log(errors)
    });
    this.setState({ formValid: validateForm(this.state.errors) });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (
      this.state.desc == null ||
      this.state.author == null ||
      this.state.title == null
    ) {
      this.play("Empty Fields. Please Enter all details");
    } else {
      axios
        .post("https://rentalvista-api.herokuapp.com/addblog", this.state)
        .then((response) => {
          //console.log(response)
          this.componentDidMount();

          if (response.data == "Blog Title already present, cannot add") {
            this.play("Blog title already present, enter a different title");
          } else {
            this.play("Blog Added Successfully");
            //console.log(this.state)
            this.cancelCourse();
          }
        })
        .catch((error) => {
          //console.log(error)
        });
    }
  };

  handleEdit(param) {
    //event.preventDefault();
    //const { name, value } = event.target;

    //console.log(this.state)
    if (this.state.title == "Blog post 1" || param == "Blog post 1") {
      this.play("Cannot Edit default Admin blog");
    }
    if (
      this.state.title == "Blog post 2" ||
      param == "Blog post 2" ||
      param == "Housing post 1" ||
      param == "Housing post 2"
    ) {
      this.play(
        "Cannot Edit another user's blog, try editing a blog created by you."
      );
    } else {
      axios
        .put("https://rentalvista-api.herokuapp.com/editblog", this.state)
        .then((response) => {
          //console.log(response)
          this.componentDidMount();
          if (response.data == "Blog updated Successfully!") {
            this.play("Blog Updated Successfully");
          } else if (response.data == "Title missing") {
            this.play("Blog Title missing, try again!");
          } else if (response.data == "Title missing") {
            this.play("Blog Description missing, try again!");
          } else {
            this.play("Blog Author not found, Enter Correct Author name");
            //console.log(this.state)
          }
        })
        .catch((error) => {
          //console.log(error)
        });
    }
  }

  handledelete(param) {
    //event.preventDefault();
    //const { name, value } = event.target;

    this.state.title = param;
    // console.log(this.state.title)
    if (this.state.title == "Blog post 1" || param == "Blog post 1") {
      this.play("Cannot delete default Admin blog");
    } else if (
      this.state.title == "Blog post 2" ||
      param == "Blog post 2" ||
      param == "Housing post 1" ||
      param == "Housing post 2" ||
      param == "Housing post 3"
    ) {
      this.play(
        "Cannot delete another user's blog, try a blog created by you."
      );
    } else {
      axios
        .post("https://rentalvista-api.herokuapp.com/deleteblog", this.state)
        .then((response) => {
          //console.log(response)
          this.componentDidMount();
          this.play("Blog deleted successfully!");
          this.cancelCourse();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  resetForm = () => {
    this.setState({ title: "", author: "", desc: "" });
  };
  cancelCourse = () => {
    document.getElementById("create-course-form").reset();
    this.setState({ title: "", author: "", desc: "" });
    //console.log("Log" +this.state.title)
  };

  play(msg) {
    alert(msg);
    //NewMessageNotification.CustomizedSnackbars()
  }

  render() {
    const { errors, formValid } = this.state;
    const displayBlog = this.state.posts;

    return (
      <div>
        <h1
          style={{ display: "flex", justifyContent: "center", padding: "20px" }}
        >
          {" "}
          RentalVista Blog Posts
        </h1>
        <div
          className="container"
          ref={this.inputRef}
          style={{
            padding: "10px",
            border: "2px solid black",
            borderRadius: "0.25rem",
            backgroundImage: `url(${blog1})`,
            backgroundSize: "cover",
            opacity: "0.9",
          }}
        >
          <form
            id="create-course-form"
            onSubmit={this.handleSubmit}
            noValidate
            style={{}}
          >
            <h4 style={{ justifyContent: "center", display: "flex" }}>
              {" "}
              Create a new Blog:{" "}
            </h4>
            <div className="col wrapper" style={{ display: "flex" }}>
              <div style={{}}>
                <div
                  style={{
                    color: "black",
                    justifyContent: "center",
                    padding: "5px",
                  }}
                >
                  <h3 style={{ justifyContent: "center" }}>
                    Welcome to Rental Vista User Blog page!
                  </h3>
                </div>
                <div
                  style={{
                    color: "black",
                    justifyContent: "center",
                    margin: "10px",
                  }}
                >
                  You can view Blogs posted by other RentalVista users, create
                  your own blog, update and delete it
                </div>
              </div>
              <div
                className="col-4 "
                style={{ marginLeft: "1%", width: "auto" }}
              >
                <label className="label" style={{ margin: "none!important" }}>
                  Title:
                </label>
                <input
                  className="form-control mb-2"
                  onChange={this.handleChange}
                  noValidate
                  name="title"
                  placeholder="Article Title"
                  maxLength="16"
                  style={{ display: "flex" }}
                />

                <label className="label" style={{ margin: "none!important" }}>
                  Description:
                </label>
                <textarea
                  className="form-control mb-2 "
                  onChange={this.handleChange}
                  noValidate
                  placeholder="Article Description"
                  name="desc"
                  style={{}}
                ></textarea>
                <label className="label" style={{ margin: "none!important" }}>
                  Author:
                </label>
                <input
                  className="form-control mb-2"
                  onChange={this.handleChange}
                  noValidate
                  placeholder="Article Author"
                  name="author"
                  style={{}}
                />

                <button
                  className="btn btn-primary"
                  disabled={!this.state.formValid}
                >
                  Submit Blog
                </button>

                <Link
                  className="btn btn-primary btn-inline"
                  to={"/"}
                  style={{ marginLeft: "15px" }}
                >
                  Cancel
                </Link>
              </div>
              <div className="col-4 " style={{ width: "180px" }}>
                <br />
                <div>
                  &nbsp;
                  {errors.title.length > 0 && errors.title !== "set" && (
                    <span className="error1" style={{ color: "red" }}>
                      {errors.title}
                    </span>
                  )}
                </div>
                <br />
                <br />
                <div>
                  &nbsp;
                  {errors.desc.length > 0 && errors.desc !== "set" && (
                    <span className="error1" style={{ color: "red" }}>
                      {errors.desc}
                    </span>
                  )}
                </div>
                <br />
                <br />
                <br />
                <div>
                  &nbsp;
                  {errors.author.length > 0 && errors.author !== "set" && (
                    <span className="error1" style={{ color: "red" }}>
                      {errors.author}
                    </span>
                  )}
                </div>
                <br />
              </div>
            </div>
          </form>
        </div>
        <div
          className="container"
          style={{
            height: "auto",
            border: "2px solid black",
            borderRadius: "0.25rem",
            padding: "10px",
          }}
        >
          <h4 style={{ justifyContent: "center", display: "flex" }}>
            {" "}
            Current Blogs:{" "}
          </h4>
          <div
            className="container "
            style={{
              height: "auto",
              width: "auto",
              overflowY: "scroll",
              margin: "5px",
            }}
          >
            {
              // console.log(displayCountry)
              displayBlog.map((blog) => {
                let newColor = "";
                switch (blog.id % 9) {
                  case 1:
                    newColor = "bg-secondary text-light";
                    break;
                  case 2:
                    newColor = "bg-primary text-light";
                    break;
                  case 3:
                    newColor = "bg-danger text-light";
                    break;
                  case 4:
                    newColor = "bg-info text-light";
                    break;
                  case 5:
                    newColor = "bg-success text-light";
                    break;
                  case 6:
                    newColor = "bg-warning text-dark";
                    break;
                  case 7:
                    newColor = "bg-dark text-light";
                    break;
                  case 8:
                    newColor = "bg-gradient-light";
                    break;
                  default:
                    newColor = "bg-light";
                    break;
                }
                return (
                  <div
                    key={blog.id}
                    className="col col-sm-4 "
                    style={{
                      width: "360px",
                      float: "left",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginBottom: "auto",
                      marginTop: "auto",
                    }}
                  >
                    <div
                      className={"card " + newColor}
                      style={{ width: "auto", height: "300px", margin: "5px" }}
                    >
                      <div
                        className="card-body"
                        key={blog.id}
                        style={{ width: "auto", margin: "5px" }}
                      >
                        <Popup
                          trigger={
                            <h4 className="card-title">
                              <Link>{blog.title}</Link>
                            </h4>
                          }
                          modal
                          closeOnDocumentClick
                        >
                          {(close) => (
                            <div
                              style={{
                                border: "5px",
                                borderBlockColor: "black",
                                borderRadius: "10px",
                                background: "white",
                              }}
                            >
                              <h2
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  color: "black",
                                }}
                              >
                                Blog Details
                              </h2>
                              <div
                                className="validmsg"
                                style={{ margin: "30px" }}
                              >
                                <label
                                  className="card-title"
                                  style={{ color: "black" }}
                                >
                                  Title: {blog.title}
                                </label>
                                <hr />
                                <label style={{ color: "black" }}>
                                  Author: {blog.author}
                                </label>
                                <hr />
                                <p style={{ color: "black" }}>
                                  Description: {blog.desc}
                                </p>
                              </div>
                              <button
                                className="btn btn-warning"
                                onClick={() => {
                                  close();
                                }}
                                style={{ margin: "15px" }}
                              >
                                Close Blog Details
                              </button>
                            </div>
                          )}
                        </Popup>
                        <hr />
                        <p className="card-text">Author: {blog.author}</p>
                        <hr />
                        <p className="card-text">
                          Description:{" "}
                          {`${blog.desc.substring(0, MAX_LENGTH)}...`}
                          <Popup
                            trigger={<Link>Read More</Link>}
                            modal
                            closeOnDocumentClick
                          >
                            {(close) => (
                              <div
                                style={{
                                  border: "5px",
                                  borderBlockColor: "black",
                                  borderRadius: "10px",
                                  background: "white",
                                }}
                              >
                                <h2
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "black",
                                  }}
                                >
                                  Blog Details
                                </h2>
                                <div
                                  className="validmsg"
                                  style={{ margin: "30px" }}
                                >
                                  <p
                                    className="card-title"
                                    style={{ color: "black" }}
                                  >
                                    Title: {blog.title}
                                  </p>
                                  <hr />
                                  <p style={{ color: "black" }}>
                                    Author: {blog.author}
                                  </p>
                                  <hr />
                                  <p style={{ color: "black" }}>
                                    Description: {blog.desc}
                                  </p>
                                </div>
                                <button
                                  className="btn btn-warning"
                                  onClick={() => {
                                    close();
                                  }}
                                  style={{ margin: "15px" }}
                                >
                                  Close Blog Details
                                </button>
                              </div>
                            )}
                          </Popup>
                        </p>
                        <hr />

                        <Popup
                          trigger={
                            <button
                              className="btn btn-primary "
                              style={{
                                padding: "5px",
                                backgroundColor: "white",
                                color: "black",
                                margin: "5px",
                              }}
                            >
                              Edit Blog
                            </button>
                          }
                          modal
                        >
                          {(close) => (
                            <div
                              style={{
                                border: "5px",
                                borderColor: "black",
                                borderRadius: "10px",
                                background: "white",
                              }}
                            >
                              <h2
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  color: "black",
                                }}
                              >
                                Edit Blog Details
                              </h2>
                              <div
                                className="validmsg"
                                style={{ margin: "30px" }}
                              >
                                <p
                                  className="card-title"
                                  style={{ color: "black", margin: "auto" }}
                                >
                                  Title:
                                  <input
                                    className="form-control mb-2"
                                    onChange={this.handleChange}
                                    noValidate
                                    name="title"
                                    placeholder="Article Title"
                                    style={{ width: "300px", display: "flex" }}
                                  />
                                </p>
                                <hr />
                                <p style={{ color: "black" }}>
                                  Description:{" "}
                                  <textarea
                                    className="form-control mb-2 "
                                    onChange={this.handleChange}
                                    noValidate
                                    placeholder="Article Description"
                                    name="desc"
                                    style={{ width: "300px" }}
                                  ></textarea>
                                </p>
                                <hr />
                                <p style={{ color: "black" }}>
                                  Author:{" "}
                                  <input
                                    className="form-control mb-2"
                                    onChange={this.handleChange}
                                    noValidate
                                    placeholder="Article Author"
                                    name="author"
                                    style={{ width: "300px" }}
                                  />
                                </p>
                                <hr />
                                <button
                                  className="btn btn-success"
                                  onClick={() => {
                                    close();
                                    this.handleEdit(blog.title);
                                  }}
                                >
                                  Update Blog
                                </button>
                                <button
                                  className="btn btn-warning"
                                  onClick={() => {
                                    close();
                                  }}
                                  style={{ margin: "15px" }}
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          )}
                        </Popup>

                        <Popup
                          trigger={
                            <button
                              className="btn btn-primary"
                              style={{
                                padding: "5px",
                                backgroundColor: "white",
                                color: "black",
                                margin: "5px",
                              }}
                              noValidate
                            >
                              Delete Blog
                            </button>
                          }
                          modal
                        >
                          {(close) => (
                            <div
                              style={{
                                border: "5px",
                                borderColor: "black",
                                borderRadius: "10px",
                                background: "white",
                              }}
                            >
                              <h2
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  color: "black",
                                }}
                              >
                                Delete Blog
                              </h2>
                              <div className="validmsg">
                                <p
                                  style={{
                                    color: "black",
                                    justifyContent: "center",
                                    display: "flex",
                                  }}
                                >
                                  Are you sure you want to delete the blog?
                                </p>
                                <hr />
                                <div
                                  style={{
                                    justifyContent: "center",
                                    display: "flex",
                                  }}
                                >
                                  <button
                                    className="btn btn-success"
                                    onClick={() => {
                                      close();
                                      this.handledelete(blog.title);
                                    }}
                                    style={{ justifyContent: "center" }}
                                  >
                                    Delete Blog
                                  </button>
                                  <button
                                    className="btn btn-warning"
                                    onClick={() => {
                                      close();
                                    }}
                                    style={{ marginLeft: "20px" }}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </Popup>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
