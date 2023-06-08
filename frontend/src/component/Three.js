import React from "react";
import Sidebar from "./Sidebar";

import { useRef } from "react";
import "./style.css";
import { NavLink, Link } from "react-router-dom";
const Three = () => {
  const handleSubmit = () => {};
  const red = useRef(null);
  const green = useRef(null);
  const blue = useRef(null);
  const handleGreen = (e) => {
    e.preventDefault();
    red.current.style.display = "none";
    blue.current.style.display = "none";
    green.current.style.display = "block";
  };
  const handleBlue = (e) => {
    e.preventDefault();
    red.current.style.display = "none";
    blue.current.style.display = "block";
    green.current.style.display = "none";
  };
  const handleRed = (e) => {
    e.preventDefault();
    console.log("Hello");
    red.current.style.display = "block";
    blue.current.style.display = "none";
    green.current.style.display = "none";
  };
  return (
    <div className="flex">
      <Sidebar />
      <div>
      <div style={styles.mainContent}>
        <div style={styles.greeting}>
          <h2>Basic Details</h2>
        </div>
        <hr style={styles.horizontalLine} />
      </div>
        <ul style={styles.ul}>
          <NavLink
            to="/basic/personal"
            style={styles.li}
            onClick={(e) => handleRed(e)}
          >
            Personal
          </NavLink>

          <NavLink
            to="/basic/address"
            style={styles.li}
            onClick={(e) => handleBlue(e)}
          >
            Address
          </NavLink>

          <NavLink
            to="/basic/parentDetails"
            style={styles.li}
            onClick={(e) => handleGreen(e)}
          >
            Parent Details
          </NavLink>
        </ul>
        <div>

          <div ref={red} className="first">
            <form>
              <div className="first">
                <div className="fullName field">
                  <label for="fullName">Full Name</label>
                  <input type="text" name="fullName" id="fname" />
                </div>
                <div className="dob field">
                  <label for="dob">Date of Birth</label>
                  <input type="date" name="dob" id="dob" />
                </div>
                <div className="pob field">
                  <label for="pob">Place of Birth</label>
                  <input type="text" name="pob" id="pob" />
                </div>
                <div className="gender field">
                  <label for="gender">Gender</label>
                  <select name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>
              <div className="second">
                <div className="nation field">
                  <label for="nation">Nationality</label>
                  <input type="text" name="nation" />
                </div>
                <div className="religion field">
                  <label for="religion">Religion</label>
                  <input type="religion" />
                </div>
                <div className="caste field">
                  <label for="caste">Caste</label>
                  <input type="caste" />
                </div>
                <div className="subCast field">
                  <label for="subCaste">Sub Caste</label>
                  <input type="subCaste" />
                </div>
                <div className="minority field">
                  <label for="minority">Minority</label>
                  <input type="minority" />
                </div>
              </div>
              <div className="third">
                <div className="phoneNo field">
                  <label for="phoneNo">Phone No</label>
                  <input type="text" name="phoneNo" />
                </div>
                <div className="landNo field">
                  <label for="landNo">Landline No</label>
                  <input type="text" name="landNo" />
                </div>
                <div className="add1 field">
                  <label for="add1">Address Line 1</label>
                  <input type="text" name="add1" />
                </div>
                <div className="add2 field">
                  <label for="add2">Address Line 2</label>
                  <input type="text" name="add2" />
                </div>
              </div>
              <div className="fourth">
                <div className="sEmail field">
                  <label for="sEmail">Student Email Id</label>
                  <input type="text" name="sEmail" />
                </div>
                <div className="pNo field">
                  <label for="pNo">Parent/Guardian Mobile No</label>
                  <input type="text" name="pNo" />
                </div>
                <div className="pEmail field">
                  <label for="pEmail">Parent/Guardian Email</label>
                  <input type="text" name="pEmail" />
                </div>
                <div className="martial field">
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
                  <input type="text" name="lastcol" />
                </div>
              </div>
            </form>
            <div className="btn">
              <button>
                <Link to="/Basic/Personal" style={styles.link}>
                  Go Back
                </Link>
              </button>
              <button type="submit">
                <Link to="/Basic/Address" style={styles.link}>
                  Next
                </Link>
              </button>
            </div>
          </div>

          <div ref={blue} style={{ display: "none" }}>
            <body style={styles.address}>
              <form>
                <div className="second">
                  <div className="flat field">
                    <label for="flat">Flat No</label>
                    <input
                      type="text"
                      name="flat"
                      onChange={(e) =>
                        this.setState({ flatno: e.target.value })
                      }
                    />
                  </div>
                  <div className="buildingNo field">
                    <label for="buildingNo">Building No</label>
                    <input
                      type="buildingNo"
                      onChange={(e) =>
                        this.setState({ bldgno: e.target.value })
                      }
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
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Andhra Pradesh"
                      >
                        Andhra Pradesh
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Arunachal Pradesh"
                      >
                        Arunachal Pradesh
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Assam"
                      >
                        Assam
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Bihar"
                      >
                        Bihar
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Chhattisgarh"
                      >
                        Chhattisgarh
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Goa"
                      >
                        Goa
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Gujarat"
                      >
                        Gujarat
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Haryana"
                      >
                        Haryana
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Himachal Pradesh"
                      >
                        Himachal Pradesh
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Jharkhand"
                      >
                        Jharkhand
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Karnataka"
                      >
                        Karnataka
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Kerala"
                      >
                        Kerala
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Madhya Pradesh"
                      >
                        Madhya Pradesh
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Maharashtra"
                      >
                        Maharashtra
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Manipur"
                      >
                        Manipur
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Meghalaya"
                      >
                        Meghalaya
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Mizoram"
                      >
                        Mizoram
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Nagaland"
                      >
                        Nagaland
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Odisha"
                      >
                        Odisha
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Punjab"
                      >
                        Punjab
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Rajasthan"
                      >
                        Rajasthan
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Sikkim"
                      >
                        Sikkim
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Tamil Nadu"
                      >
                        Tamil Nadu
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Telangana"
                      >
                        Telangana
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Tripura"
                      >
                        Tripura
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Uttar Pradesh"
                      >
                        Uttar Pradesh
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Uttarakhand"
                      >
                        Uttarakhand
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="West Bengal"
                      >
                        West Bengal
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Andaman and Nicobar Islands"
                      >
                        Andaman and Nicobar Islands
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Chandigarh"
                      >
                        Chandigarh
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Dadra and Nagar Haveli and Daman and Diu"
                      >
                        Dadra and Nagar Haveli and Daman and Diu
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Delhi"
                      >
                        Delhi
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        value="Lakshadweep"
                      >
                        Lakshadweep
                      </option>
                      <option
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
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
                      onChange={(e) =>
                        this.setState({ pincode: e.target.value })
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
                <button type="submit">
                  <Link to="/Basic/ParentDetails" style={styles.link}>
                    Next
                  </Link>
                </button>
              </div>
            </body>
          </div>
          <div ref={green} style={{ display: "none" }}>
            <form>
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
              <button type="submit">
                <Link to="/Education/PresentCourse" style={styles.link}>
                  Next
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Three;
const styles = {
  mainContent: {
    flex: 1,
    padding: "20px",
    width: "175vh",
  },
  greeting: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
    color: "black",
  },
  dt: {
    display: "flex",
    flexDirection: "column",
    margin: "0 5px",
  },
  para: {
    margin: "2px 0",
  },
  horizontalLine: {
    border: "none",
    borderTop: "1px solid #ccc",
    margin: "20px 0",
  },
  ul: {
    display: "flex",
    justifyContent: "space-around",
    background: "#f4f4f4",
    height: "45px",
  },
  li: {
    textDecoration: "none",
    fontSize: "30px",
  },
};
