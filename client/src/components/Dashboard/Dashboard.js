import React, { Component } from "react";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="dashboard-wrapper">
          <div className="personal-details">
            <h4>Name: Rohit Adrian Douglas</h4>
            <h4> Designation: Senior Software Engineer</h4>
          </div>

          <div>
            <h4>Upload your data</h4>
          </div>

          <div></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
