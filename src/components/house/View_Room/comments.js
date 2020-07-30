import React, { Component } from 'react';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import deleteIMG from '../../../assets/images/delete.png';


let flag = 0;

const MAX_LENGTH = 25;    

const validateForm = (errors) => {
    let valid = false;
    Object.values(errors).forEach(      
      (val) => 
      { if(val=='set' && flag == 1)
            { valid = true; }
        else
            { valid = false; }
      }      
    );
    return valid;
  }
  const countErrors = (errors) => {
    let count = 0;
    Object.values(errors).forEach(
      (val) => {if(val.length > 0)
        {
            if(val!=='set'){
                (count = count+1);
            }
        } }
    );
    return count;
  }

export default class addComment extends Component{

    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    
        this.state = {
          formValid: false,
          errorCount: null,
          comment: null,
          id: null,

          posts: [],

          errors: {
              comment: '',
          },       

        };
    }

    componentDidMount() 
      {
          axios({
              url:'http://127.0.0.1:8080/getcomment',
              method: 'GET'
          })
          
        //   axios
        //   .get('http://127.0.0.1:8080/getcomment')
          .then(response => {
            console.log(response)
            this.setState({ posts: response.data })
          })
          .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retrieving data'})
          })
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;   
      
        switch (name) {
            case 'comment': 
                if((!event.target.value.match(/^[a-zA-Z0-9,! .]+$/i)))
                {
                    event.target.value = event.target.value.replace(/[^A-Za-z0-9.,! ]/ig, '')
                }
                else{
                    errors.comment = 
                    value.length < 2  
                    ? 'Enter some text!'
                    : 'set';
                    if (value.length>=2) {flag = 1;} else{ flag=0;}
                }
                break;      

            default:
                break;

            }
            this.setState({errors, [name]: value}, ()=> {
                console.log(errors)
            })
            this.setState({formValid: validateForm(this.state.errors)});
        }

        handleSubmit = (event) => {
          
            event.preventDefault();           
            const { name, value } = event.target;
            
            console.log("Submit working") 
            console.log(this.state)
            axios
              .post('http://127.0.0.1:8080/addcomment', this.state)
              .then(response => {
                console.log(response)
                this.componentDidMount()
                
                  this.play("Comment Added Successfully")
                  console.log(this.state)  
                  this.cancelCourse()
                
              })
              .catch(error => 
                {
                console.log(error)
                })        
        }

        handledelete()  {
            
            console.log("Delete btn working") 
                axios
              .post('https://rentalvista-api.herokuapp.com/deletecomment', this.state)
              .then(response => {
                console.log(response)
                this.componentDidMount()
                this.play("Comment deleted successfully!")
              })
              .catch(error => 
                {
                console.log(error)
                })
        }

        resetForm = () => {
                          this.setState({comment: ""});
                        }
        cancelCourse = () => { 
            document.getElementById("create-course-form").reset();
          }

          play(msg)  {
              alert(msg) 
              //NewMessageNotification.CustomizedSnackbars()
          }
  
    render() {
        
        const {errors, formValid} = this.state;
        const displayBlog = this.state.posts;

      return (
        <div>
        <h3>Add Your Comment </h3>
        <form onSubmit={this.onSubmit} >
            <div className="form-group">
              <textarea rows="3"  
                  required
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Type a comment">
              </textarea>
            </div>
            <div className="form-group" align="right">
              <input type="submit"
                onSubmit={this.handleSubmit}
                className="btn btn-dark"
                value="Submit">
              </input>
            </div>
        </form>
        <h3>Comments</h3>
        <div className="card">
        <div className="row">
          <div className="col-md-10 px-3">
            <div className="card-block px-3">
            <h5 className="card-title text-dark" style={{marginTop: '10px', 'fontWeight':'bolder'}}></h5>         
              <p className="card-text" style={{fontSize: '16px'}}></p>
            </div>
          </div>
          <div className="col-md-2 px-3">
            <div>
              <br/>
              <div> <input type="image" onClick={() => 
                    this.handledelete()                                                     
                }name="edit" src={deleteIMG} alt="delete" width="60" height="40" /><span  style={{fontSize: '16px', 'fontWeight': 'bolder', 'verticalAlign':'4px'}}>&nbsp;&nbsp;&nbsp;</span> </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      );
      }

}