import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const Upload = () => {
  const [user, setUser] = useState({
    profile: "",
    signature: "",
    sscmarksheet: "",
    hscmarksheet:"",
    mhtcetmarksheet:"",
    jeescorecard:"",
    capallotment:"",
    fccenterverification:"",
    aadharcard:"",
    rationcard:"",
    bankpassbook:"",
    incomecertificate:"",
    castecertificate:"",
    castevalidation:"",
    domicilecertificate:"",
    feereceipt:"",
    collegeadmissionletter:"",

  });
  const handleClick = async () => {
    console.log("workning")
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.post("/upload", user, config);
    console.log(data
      )
  };

  // const handleClick = () => {
  //   console.log("Working")
  //   fetch("http://localhost:5000/upload", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, "userRegister");
  //       if (data.status === "ok") {
  //         alert("login success");
  //         window.localStorage.setItem("token", data.data);
  //         window.location.href = "./Basic";
  //       }
  //     });
  // };

  const registerDataChange = (e) => {
    const reader = new FileReader();
    console.log("working");

    reader.onload = () => {
      if (reader.readyState === 2) {
        setUser({ ...user, [e.target.name]: reader.result });
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  console.log(user);
  return (
    <>

      <div style={styles.mainContent}>
     <div style={styles.greeting}>
          <h2>Upload Documents</h2>
        </div>
        <hr style={styles.horizontalLine} />
      </div>

      <div className="box">
        <div>
          <p>Profile Photo</p>
          <br />
          <input
            type="file"
            name="profile"
  
            onChange={registerDataChange}
            style={styles.input}
          />
        </div>
        <div>
          <p>Signature</p>
          <br />
          <input
            type="file"
            name="signature"
            onChange={registerDataChange}
            style={styles.input}
          />
        </div>
      </div>
      <hr />
      <div className="box">
        <div>
          <p>SSC Marksheet </p>
          <br />
         <input
            type="file"
            name="sscmarksheet"
  
            onChange={registerDataChange}
            style={styles.input}
          />
        </div>
        {/* <button onClick={handleClick}>Submit</button> */}
        <div>
          <p>HSC Marksheet</p>
          <br />
          <input
          type="file"
          name="hscmarksheet"

          onChange={registerDataChange}
           style={styles.input} />
        </div>
        <div>
          <p>MHTCET Score Card</p>
          <br />
          <input 
          type="file"
          name="mhtcetmarksheet"

          onChange={registerDataChange}
           style={styles.input} />
        </div>

        <div>
          <p>JEE Score Card</p>
          <br />
          <input 
          type="file"
          name="jeescorecard"

          onChange={registerDataChange}
           style={styles.input}/>
        </div>
        <div>
          <p>CAP Allotment</p>
          <br />
          <input 
          type="file"
          name="capallotment"

          onChange={registerDataChange}
           style={styles.input}/>
        </div>
        <div>
          <p>FC Center Verification</p>
          <br />
          <input 
          type="file"
          name="fccenterverification"

          onChange={registerDataChange}
           style={styles.input} />
        </div>
      </div>
      <hr />
      <div className="box">
        <div>
          <p>Adhaar Card</p>
          <br />
          <input
          type="file"
          name="aadharcard"

          onChange={registerDataChange}
           style={styles.input}/>
        </div>
        <div>
          <p>Ration Card</p>
          <br />
          <input 
          type="file"
          name="rationcard"

          onChange={registerDataChange}
           style={styles.input} />
        </div>
        <div>
          <p>Bank Passbook</p>
          <br />
          <input 
          type="file"
          name="bankpassbook"

          onChange={registerDataChange}
           style={styles.input} />
        </div>
        <div>
          <p>Income Certificate</p>
          <br />
          <input 
          type="file"
          name="incomecertificate"

          onChange={registerDataChange}
           style={styles.input} />
        </div>
        <div>
          <p>Caste Certififcate</p>
          <br />
          <input 
          type="file"
          name="castecertificate"

          onChange={registerDataChange}
           style={styles.input} />
        </div>
        <div>
          <p>Caste Validation</p>
          <br />
          <input 
          type="file"
          name="castevalidation"

          onChange={registerDataChange}
           style={styles.input} />
        </div>
        <div>
          <p>Domicile Certificate</p>
          <br />
          <input 
          type="file"
          name="domicilecertificate"

          onChange={registerDataChange}
           style={styles.input} />
        </div>
      </div>
      <hr />
      <div className="box">
        <div>
          <p>Fee Receipt</p>
          <br />
          <input 
          type="file"
          name="feereceipt"

          onChange={registerDataChange}
           style={styles.input} />
        </div>
        <div>
          <p>College Admission Letter</p>
          <br />
          <input 
          type="file"
          name="collegeadmissionletter"

          onChange={registerDataChange}
           style={styles.input} />
        </div>
      </div>

      <div className="btn">
        <button>
          <Link to="/Education/PreviousCourse" style={styles.link}>
            Go Back
          </Link>
        </button>
        <button onClick={handleClick}> 
          <Link to=" " style={styles.link}>
            Next
          </Link>
        </button>
      </div>
    </>
  );
};

export default Upload;

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
  input: {
    height: "21px",
    width: "87px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};
