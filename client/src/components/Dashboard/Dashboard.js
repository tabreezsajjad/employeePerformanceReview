import React, { Component } from "react";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fileHandler = (event) => {
    let fileObj = event.target.files[0];
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          cols: resp.cols,
          rows: resp.rows,
        });
      }
    });
  };
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
            <input
              type="file"
              onChange={this.fileHandler.bind(this)}
              style={{ padding: "10px" }}
            />
          </div>

          <div>
            <OutTable
              data={this.state.rows}
              columns={this.state.cols}
              tableClassName="ExcelTable2007"
              tableHeaderRowClass="heading"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
