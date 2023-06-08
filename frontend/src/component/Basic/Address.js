import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flatno: "",
      bldgno: "",
      bldg: "",
      area: "",
      city: "",
      state: "",
      pincode: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { flatno, bldgno, bldg, area, city, state, pincode } = this.state;
    console.log(flatno, bldgno, bldg, area, city, state, pincode);
    fetch("http://localhost:5000/Basic/Address", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        flatno,
        bldgno,
        bldg,
        area,
        city,
        state,
        pincode,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login success");
          window.localStorage.setItem("token", data.data);
        }
      });
  }

  render() {
    return (
      <>
        <div className="flex">
          <body style={styles.address}>
            <form onSubmit={this.handleSubmit}>
              <div className="second">
                <div className="flat field">
                  <label for="flat">Flat No</label>
                  <input
                    type="text"
                    name="flat"
                    onChange={(e) => this.setState({ flatno: e.target.value })}
                  />
                </div>
                <div className="buildingNo field">
                  <label for="buildingNo">Building No</label>
                  <input
                    type="buildingNo"
                    onChange={(e) => this.setState({ bldgno: e.target.value })}
                  />
                </div>
                <div className="buildingName field">
                  <label for="buildingName">Building Name</label>
                  <input
                    type="buildingName"
                    onChange={(e) => this.setState({ bldg: e.target.value })}
                  />
                </div>
                <div className="area field">
                  <label for="area">Area Name</label>
                  <input
                    type="area"
                    onChange={(e) => this.setState({ area: e.target.value })}
                  />
                </div>
                <div className="city field">
                  <label for="city">City</label>
                  <input
                    type="city"
                    onChange={(e) => this.setState({ city: e.target.value })}
                  />
                </div>
              </div>
              <div className="first">
                <div className="states field">
                  <label for="states">Select State</label>
                  <select
                    name="states "
                    onChange={(e) => this.setState({ state: e.target.value })}
                  >
                    <option value="">-- Select State --</option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Andhra Pradesh"
                    >
                      Andhra Pradesh
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Arunachal Pradesh"
                    >
                      Arunachal Pradesh
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Assam"
                    >
                      Assam
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Bihar"
                    >
                      Bihar
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Chhattisgarh"
                    >
                      Chhattisgarh
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Goa"
                    >
                      Goa
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Gujarat"
                    >
                      Gujarat
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Haryana"
                    >
                      Haryana
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Himachal Pradesh"
                    >
                      Himachal Pradesh
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Jharkhand"
                    >
                      Jharkhand
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Karnataka"
                    >
                      Karnataka
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Kerala"
                    >
                      Kerala
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Madhya Pradesh"
                    >
                      Madhya Pradesh
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Maharashtra"
                    >
                      Maharashtra
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Manipur"
                    >
                      Manipur
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Meghalaya"
                    >
                      Meghalaya
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Mizoram"
                    >
                      Mizoram
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Nagaland"
                    >
                      Nagaland
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Odisha"
                    >
                      Odisha
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Punjab"
                    >
                      Punjab
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Rajasthan"
                    >
                      Rajasthan
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Sikkim"
                    >
                      Sikkim
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Tamil Nadu"
                    >
                      Tamil Nadu
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Telangana"
                    >
                      Telangana
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Tripura"
                    >
                      Tripura
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Uttar Pradesh"
                    >
                      Uttar Pradesh
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Uttarakhand"
                    >
                      Uttarakhand
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="West Bengal"
                    >
                      West Bengal
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Andaman and Nicobar Islands"
                    >
                      Andaman and Nicobar Islands
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Chandigarh"
                    >
                      Chandigarh
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Dadra and Nagar Haveli and Daman and Diu"
                    >
                      Dadra and Nagar Haveli and Daman and Diu
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Delhi"
                    >
                      Delhi
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Lakshadweep"
                    >
                      Lakshadweep
                    </option>
                    <option
                      onChange={(e) => this.setState({ state: e.target.value })}
                      value="Puducherry"
                    >
                      Puducherry
                    </option>
                  </select>
                </div>
                <div className="pinCode field">
                  <label for="pinCode">Pin Code</label>
                  <input
                    type="text"
                    className="pinCode"
                    onChange={(e) => this.setState({ pincode: e.target.value })}
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
                <Link to="/Basic/ParentDetails" style={styles.link}>
                  Next
                </Link>
              </button>
            </div>
          </body>
        </div>
      </>
    );
  }
}

const styles = {
  address: {
    flex: 1,
    padding: "20px",
    width: "175vh",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  Parent: {
    flex: 1,
    padding: "20px",
    width: "175vh",
  },
};
