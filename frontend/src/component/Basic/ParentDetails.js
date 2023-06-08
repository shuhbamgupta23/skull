import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default class ParentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ffName: "",
      fContactNumber: "",
      fEmail: "",
      fOccupation: "",
      fDesignation: "",
      fProfessionalAddress: "",
      fAnnualIncome: "",
      mfName: "",
      mContactNumber: "",
      mEmail: "",
      mOccupation: "",
      mDesignation: "",
      mProfessionalAddress: "",
      mAnnualIncome: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    console.log("Running");
    e.preventDefault();
    const {
      ffName,
      fContactNumber,
      fEmail,
      fOccupation,
      fDesignation,
      fProfessionalAddress,
      fAnnualIncome,
      mfName,
      mContactNumber,
      mEmail,
      mOccupation,
      mDesignation,
      mProfessionalAddress,
      mAnnualIncome,
    } = this.state;
    console.log(
      ffName,
      fContactNumber,
      fEmail,
      fOccupation,
      fDesignation,
      fProfessionalAddress,
      fAnnualIncome,
      mfName,
      mContactNumber,
      mEmail,
      mOccupation,
      mDesignation,
      mProfessionalAddress,
      mAnnualIncome
    );
    fetch("http://localhost:5000/Basic/ParentDetails", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        ffName,
        fContactNumber,
        fEmail,
        fOccupation,
        fDesignation,
        fProfessionalAddress,
        fAnnualIncome,
        mfName,
        mContactNumber,
        mEmail,
        mOccupation,
        mDesignation,
        mProfessionalAddress,
        mAnnualIncome,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login success");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./login";
        }
      });
  }

  render() {
    return (
      <>
        <div className="flex">
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="first">
                <div className="fullName field">
                  <label for="fullName">Father Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    onChange={(e) => this.setState({ ffName: e.target.value })}
                  />
                </div>
                <div className="cont field">
                  <label for="cont">Father Contact No</label>
                  <input
                    type="text"
                    name="cont"
                    onChange={(e) =>
                      this.setState({ fContactNumber: e.target.value })
                    }
                  />
                </div>
                <div className="email field">
                  <label for="email">Father Email Id</label>
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => this.setState({ fEmail: e.target.value })}
                  />
                </div>
                <div className="occ field">
                  <label for="occ">Father Occupation</label>
                  <input
                    type="text"
                    name="occ"
                    onChange={(e) =>
                      this.setState({ fOccupation: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="first">
                <div className="des field">
                  <label for="fullName">Designation</label>
                  <input
                    type="text"
                    name="des"
                    onChange={(e) =>
                      this.setState({ fDesignation: e.target.value })
                    }
                  />
                </div>
                <div className="padd field">
                  <label for="padd">Professional Address</label>
                  <input
                    type="text"
                    name="padd"
                    onChange={(e) =>
                      this.setState({ fProfessionalAddress: e.target.value })
                    }
                  />
                </div>
                <div className="income field">
                  <label for="income">Annual Income</label>
                  <input
                    type="text"
                    name="income"
                    onChange={(e) =>
                      this.setState({ fAnnualIncome: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="first">
                <div className="fullName field">
                  <label for="fullName">Mother Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    onChange={(e) => this.setState({ mfName: e.target.value })}
                  />
                </div>
                <div className="cont field">
                  <label for="cont">Mother Contact No</label>
                  <input
                    type="text"
                    name="cont"
                    onChange={(e) =>
                      this.setState({ mContactNumber: e.target.value })
                    }
                  />
                </div>
                <div className="email field">
                  <label for="email">Mother Email Id</label>
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => this.setState({ mEmail: e.target.value })}
                  />
                </div>
                <div className="occ field">
                  <label for="occ">Mother Occupation</label>
                  <input
                    type="text"
                    name="occ"
                    onChange={(e) =>
                      this.setState({ mOccupation: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="first">
                <div className="des field">
                  <label for="fullName">Designation</label>
                  <input
                    type="text"
                    name="des"
                    onChange={(e) =>
                      this.setState({ mDesignation: e.target.value })
                    }
                  />
                </div>
                <div className="padd field">
                  <label for="padd">Professional Address</label>
                  <input
                    type="text"
                    name="padd"
                    onChange={(e) =>
                      this.setState({ mProfessionalAddress: e.target.value })
                    }
                  />
                </div>
                <div className="income field">
                  <label for="income">Annual Income</label>
                  <input
                    type="text"
                    name="income"
                    onChange={(e) =>
                      this.setState({ mAnnualIncome: e.target.value })
                    }
                  />
                </div>
              </div>
            </form>
            <div className="btn">
              <button>
                <Link to="/Basic/Address" style={styles.link}>
                  Go Back
                </Link>
              </button>
              <button type="submit" onClick={this.handleSubmit}>
                <Link to="/Education/PresentCourse" style={styles.link}>
                  Next
                </Link>
              </button>
            </div>
            {/* <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button> */}
          </div>
        </div>
      </>
    );
  }
}
const styles = {
  Parent: {
    flex: 1,
    padding: "20px",
    width: "175vh",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  address: {
    flex: 1,
    padding: "20px",
    width: "175vh",
  },
};
