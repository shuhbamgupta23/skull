import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

// const Personal = () => {
export default class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      dob: "",
      pob: "",
      gender: "",
      nation: "",
      religion: "",
      caste: "",
      scaste: "",
      mini: "",
      phone: "",
      lando: "",
      add1: "",
      add2: "",
      email: "",
      pgphone: "",
      pgemail: "",
      marital: "",
      baccno: "",
      bname: "",
      aadhar: "",
      lastcolatt: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    console.log("yes");
    e.preventDefault();
    const {
      fname,
      dob,
      pob,
      gender,
      nation,
      religion,
      caste,
      scaste,
      mini,
      phone,
      lando,
      add1,
      add2,
      email,
      pgphone,
      pgemail,
      marital,
      baccno,
      bname,
      aadhar,
      lastcolatt,
    } = this.state;
    console.log(
      fname,
      dob,
      pob,
      gender,
      nation,
      religion,
      caste,
      scaste,
      mini,
      phone,
      lando,
      add1,
      add2,
      email,
      pgphone,
      pgemail,
      marital,
      baccno,
      bname,
      aadhar,
      lastcolatt
    );
    fetch("http://localhost:5000/Basic/Personal", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        dob,
        pob,
        gender,
        nation,
        religion,
        caste,
        scaste,
        mini,
        phone,
        lando,
        add1,
        add2,
        email,
        pgphone,
        pgemail,
        marital,
        baccno,
        bname,
        aadhar,
        lastcolatt,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data send");
        if (data.status == "ok") {
          alert("data success");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./Basic/Address";
        }
      });
  }
  render() {
    return (
      <div>
        <div class="flex">
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="first">
                <div className="fullName field">
                  <label for="fullName">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fname"
                    onChange={(e) => this.setState({ fname: e.target.value })}
                  />
                </div>
                <div className="dob field">
                  <label for="dob">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    onChange={(e) => this.setState({ dob: e.target.value })}
                  />
                </div>
                <div className="pob field">
                  <label for="pob">Place of Birth</label>
                  <input
                    type="text"
                    name="pob"
                    id="pob"
                    onChange={(e) => this.setState({ pob: e.target.value })}
                  />
                </div>
                <div className="gender field">
                  <label for="gender">Gender</label>
                  <select
                    name="gender"
                    onChange={(e) => this.setState({ gender: e.target.value })}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>
              <div className="second">
                <div className="nation field">
                  <label for="nation">Nationality</label>
                  <input
                    type="text"
                    name="nation"
                    onChange={(e) => this.setState({ nation: e.target.value })}
                  />
                </div>
                <div className="religion field">
                  <label for="religion">Religion</label>
                  <input
                    type="religion"
                    onChange={(e) =>
                      this.setState({ religion: e.target.value })
                    }
                  />
                </div>
                <div className="caste field">
                  <label for="caste">Caste</label>
                  <input
                    type="caste"
                    onChange={(e) => this.setState({ caste: e.target.value })}
                  />
                </div>
                <div className="subCast field">
                  <label for="subCaste">Sub Caste</label>
                  <input
                    type="subCaste"
                    onChange={(e) => this.setState({ scaste: e.target.value })}
                  />
                </div>
                <div className="minority field">
                  <label for="minority">Minority</label>
                  <input
                    type="minority"
                    onChange={(e) => this.setState({ mini: e.target.value })}
                  />
                </div>
              </div>
              <div className="third">
                <div className="phoneNo field">
                  <label for="phoneNo">Phone No</label>
                  <input
                    type="text"
                    name="phoneNo"
                    onChange={(e) => this.setState({ phone: e.target.value })}
                  />
                </div>
                <div className="landNo field">
                  <label for="landNo">Landline No</label>
                  <input
                    type="text"
                    name="landNo"
                    onChange={(e) => this.setState({ lando: e.target.value })}
                  />
                </div>
                <div className="add1 field">
                  <label for="add1">Address Line 1</label>
                  <input
                    type="text"
                    name="add1"
                    onChange={(e) => this.setState({ add1: e.target.value })}
                  />
                </div>
                <div className="add2 field">
                  <label for="add2">Address Line 2</label>
                  <input
                    type="text"
                    name="add2"
                    onChange={(e) => this.setState({ add2: e.target.value })}
                  />
                </div>
              </div>
              <div className="fourth">
                <div className="sEmail field">
                  <label for="sEmail">Student Email Id</label>
                  <input
                    type="text"
                    name="sEmail"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>
                <div className="pNo field">
                  <label for="pNo">Parent/Guardian Mobile No</label>
                  <input
                    type="text"
                    name="pNo"
                    onChange={(e) => this.setState({ pgphone: e.target.value })}
                  />
                </div>
                <div className="pEmail field">
                  <label for="pEmail">Parent/Guardian Email</label>
                  <input
                    type="text"
                    name="pEmail"
                    onChange={(e) => this.setState({ pgemail: e.target.value })}
                  />
                </div>
                <div
                  className="martial field"
                  onChange={(e) => this.setState({ marital: e.target.value })}
                >
                  <label for="martial">Marital Status</label>
                  <select name="martial">
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                </div>
              </div>
              <div className="fifth">
                <div className="bankAccNo field">
                  <label for="bankAccNo">Bank Account No</label>
                  <input
                    type="text"
                    onChange={(e) => this.setState({ baccno: e.target.value })}
                    name="bankAccNo"
                  />
                </div>
                <div className="bankName field">
                  <label for="bankName">Bank Name</label>
                  <input
                    type="text"
                    name="bankName"
                    onChange={(e) => this.setState({ bname: e.target.value })}
                  />
                </div>
                <div className="aadharNo field">
                  <label for="aadharNo">Aadhar No</label>
                  <input
                    type="text"
                    name="aadharNo"
                    onChange={(e) => this.setState({ aadhar: e.target.value })}
                  />
                </div>
                <div className="lastcol field">
                  <label for="lastcol">Last College Attended</label>
                  <input
                    type="text"
                    name="lastcol"
                    onChange={(e) =>
                      this.setState({ lastcolatt: e.target.value })
                    }
                  />
                </div>
              </div>
            </form>
            <div className="btn">
              <button>
                <Link to="/Basic/Personal" style={styles.link}>
                  Go Back
                </Link>
              </button>
              <button type="submit" onClick={this.handleSubmit}>
                <Link to="/Basic/Address" style={styles.link}>
                  Next
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  link: {
    color: "white",
    textDecoration: "none",
  },
};
