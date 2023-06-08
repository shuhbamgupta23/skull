import React, { Component } from "react";
import './styles.css';
import { Link } from "react-router-dom";

export default class PresentCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studid: "",
      selectedprog: "",
      seattype: "",
      grno: "",
      defstat: "",
      handicap: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { studid, selectedprog, seattype, grno, defstat, handicap } = this.state;
    console.log(studid, selectedprog, seattype, grno, defstat, handicap);
    fetch("http://localhost:5000/Education/PresentCourse", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        studid,
        selectedprog,
        seattype,
        grno,
        defstat,
        handicap
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login success");
          window.localStorage.setItem("token", data.data);
        }
      });
  }


  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="fourth">
            <div className="studentid field">
              <label for="studentid">Student Id</label>
              <input type="text" name="studentid" onChange={(e) => this.setState({ studid: e.target.value })} />
            </div>
            <div className="selected program field">
              <label for="selected program">Selected Program</label>

              <select name="selectedprogram" onChange={(e) => this.setState({ selectedprog: e.target.value })}>
                <option value="-">Select Program</option>
                <option value="Computer Engineering">Computer Engineering</option>
                <option value="Information Technology">Information Technology</option>
                <option value="AIDS">AIDS</option>
                <option value="others">others</option>
              </select>
            </div>
            <div className="seattype field">
              <label for="seattype">Seat Type</label>

              <select name="seattype" onChange={(e) => this.setState({ seattype: e.target.value })}>
                <option value="-">Select Seat type</option>
                <option value="Cap seat">Cap Level Seat</option>
                <option value="Institute seat">Institute Level Seat</option>
                <option value="Donation seat">Donation Level seat</option>
              </select>
            </div>
            <div className="GR Number field">
              <label for="GR Number">GR Number</label>
              <input type="text" name="GR Number" onChange={(e) => this.setState({ grno: e.target.value })} />
            </div>
          </div>
          <div className="fourth">
            <div className="Defence status field">
              <label for="Defence status">Defence Status</label>
              <input type="text" name="Defence status" onChange={(e) => this.setState({ defstat: e.target.value })} />
            </div>
            <div className="physicallyhandicapped field">
              <label for="physicallyhandicapped field">Physically Handicapped</label>

              <select name="physicallyhandicapped field" onChange={(e) => this.setState({ handicap: e.target.value })}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

        </form>

        <div className="btn">
          <button><Link to="/Basic/ParentDetails" style={styles.link} >Go Back</Link></button>
          <button type='submit' onClick={this.handleSubmit}><Link to="/Education/PreviousCourse" style={styles.link} >Next</Link></button>
        </div>
      </>
    );

  };
}


const styles = {
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}