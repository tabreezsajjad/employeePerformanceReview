import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login-card">
        <label>Email</label>
        <input />
        <label>Password</label>
        <input />
        <Link className="btn btn-pink" role="button" to="/dashboard">
          Login
        </Link>
      </div>
    );
  }
}

export default Login;
