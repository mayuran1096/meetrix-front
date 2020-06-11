import React from "react";

// import history from "../../history";
import "antd/dist/antd.css";
import JWT from "jsonwebtoken";
import "antd/dist/antd.css";
import { Button, Row, Col, Input, Checkbox, Form } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "assets/register/register.css";
import axios from "axios";
import { message } from "antd";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      spiner: false,
    };
  }

  handlelogin = (e) => {
    e.preventDefault();
    this.setState({ spiner: true });

    axios
      .post("http://localhost:9000/users/user/login", this.state)
      .then((response) => {
        console.log(response);
        localStorage.setItem("email",this.state.email);

        this.props.history.push({
          pathname: "/admin/dashboard",
          search: `?jwt=${response.data}`,
        });
      })
      .catch((error) => {
        console.log(error.response);
        message.error("invalid sign in please try again");

        this.setState({ spiner: false });
      });
  };
  handletextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="main">
        <div>
          <form className="loginform" onSubmit={this.handlelogin}>
            <h2 id="headerTitle">Log In</h2>
            <div className="row">
              <label>Email</label>
              <input
                type="email"
                required={true}
                name="email"
                value={this.state.email}
                placeholder="Input Email"
                onChange={this.handletextChange}
              />
            </div>
            <div className="row">
              <label>Password</label>
              <input
                type="password"
                name="password"
                required={true}
                value={this.state.password}
                placeholder="Input Password"
                onChange={this.handletextChange}
              />
            </div>
            {this.state.spiner && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </div>
            )}

            <div id="button" className="row">
              <button type="submit">Log In</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
