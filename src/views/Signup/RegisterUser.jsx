import React from "react";

// import history from "../../history";
import "antd/dist/antd.css";
import { Button, Row, Col, Input, Checkbox, Form } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "assets/register/register.css";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";

class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",

      email: "",
      password: "",
      // validuser:false
    };
  }

  handletextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onSubmitbtn = (e) => {
    e.preventDefault();

    console.log(this.state);

   
    axios
      .post("http://localhost:9000/users/user/register", this.state)
      .then((response) => {
        console.log(response);
        alert("new user added");
        this.props.history.push("./login");
        
      })
      .catch(function (error) {
        console.log(error.message);
        alert("something went wrong");
      });
  
  };

  render() {
    return (
      <div className="main">
        <button style={{alignItems:"right"}} onClick={()=>this.props.history.push('./login')}>login</button>
        <div>
          <form className="loginform" onSubmit={this.onSubmitbtn}>
            <h2 id="headerTitle">Sign Up</h2>

            <div className="row">
              <label>First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter First Name"
                value={this.state.firstName}
                onChange={this.handletextChange}
                required
              />
            </div>
            <div className="row">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={this.state.lastName}
                onChange={this.handletextChange}
                required
              />
            </div>
           
            <div className="row">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={this.state.email}
                onChange={this.handletextChange}
                required
              />
            </div>
            <div className="row">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this.handletextChange}
                required
              />
            </div>
            <div id="button" className="row">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterUser;
