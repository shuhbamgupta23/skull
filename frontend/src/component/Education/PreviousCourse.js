import React, { Component } from "react";
import './styles.css';
import { Link } from "react-router-dom";

export default class PreviousCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sscyear: "",
            sscseatno: "",
            sscboard: "",
            sscmarks: "",
            sscpercent: "",
            hscyear: "",
            hscseatno: "",
            hscboard: "",
            hscmarks: "",
            hscpercent: "",
            pmarks: "",
            cmarks: "",
            mmarks: "",
            vmarks: "",
            mhcetrollno: "",
            mhcetappno: "",
            jeeroll: "",
            jeepercentile: "",
            ename: "",
            escore: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const {
            sscyear,
            sscseatno,
            sscboard,
            sscmarks,
            sscpercent,
            hscyear,
            hscseatno,
            hscboard,
            hscmarks,
            hscpercent,
            pmarks,
            cmarks,
            mmarks,
            vmarks,
            mhcetrollno,
            mhcetappno,
            jeeroll,
            jeepercentile,
            ename,
            escore
        } = this.state;
        console.log(
            sscyear,
            sscseatno,
            sscboard,
            sscmarks,
            sscpercent,
            hscyear,
            hscseatno,
            hscboard,
            hscmarks,
            hscpercent,
            pmarks,
            cmarks,
            mmarks,
            vmarks,
            mhcetrollno,
            mhcetappno,
            jeeroll,
            jeepercentile,
            ename,
            escore
        );
        fetch("http://localhost:5000/Education/PreviousCourse", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                sscyear,
                sscseatno,
                sscboard,
                sscmarks,
                sscpercent,
                hscyear,
                hscseatno,
                hscboard,
                hscmarks,
                hscpercent,
                pmarks,
                cmarks,
                mmarks,
                vmarks,
                mhcetrollno,
                mhcetappno,
                jeeroll,
                jeepercentile,
                ename,
                escore
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
                    <div className="first">
                        <div className="year field">
                            <label for="pYear">SSC Passing year</label><br />
                            <input type="date" name="pYear" onChange={(e) => this.setState({ sscyear: e.target.value })} />
                        </div>
                        <div className="seat field">
                            <label for="sNo">SSC Seat No</label><br />
                            <input type="text" name="sNo" onChange={(e) => this.setState({ sscseatno: e.target.value })} />
                        </div>
                        <div className="board field">
                            <label for="bName">Name of the Board</label><br />
                            <input type="text" name="bName" onChange={(e) => this.setState({ sscboard: e.target.value })} />
                        </div>
                        <div className="marks field">
                            <label for="marks">SSC Marks</label><br />
                            <input type="text" name="marks" onChange={(e) => this.setState({ sscmarks: e.target.value })} />
                        </div>
                        <div className="percent field">
                            <label for="percent">SSC Pecentage/CGPA</label><br />
                            <input type="text" min="0" max="100" name="percent" onChange={(e) => this.setState({ sscpercent: e.target.value })} />
                        </div>
                    </div>

                    <div className="first">
                        <div className="year field">
                            <label for="pYear">HSC Passing year</label><br />
                            <input type="date" name="pYear" onChange={(e) => this.setState({ hscyear: e.target.value })} />
                        </div>
                        <div className="seat field">
                            <label for="sNo">HSC Seat No</label><br />
                            <input type="text" name="sNo" onChange={(e) => this.setState({ hscseatno: e.target.value })} />
                        </div>
                        <div className="board field">
                            <label for="bName">Name of the Board</label><br />
                            <input type="text" name="bName" onChange={(e) => this.setState({ hscboard: e.target.value })} />
                        </div>
                        <div className="marks field">
                            <label for="marks">HSC Marks</label><br />
                            <input type="text" name="marks" onChange={(e) => this.setState({ hscmarks: e.target.value })} />
                        </div>
                        <div className="percent field">
                            <label for="percent">HSC Pecentage/CGPA</label><br />
                            <input type="text" min="0" max="100" name="percent" onChange={(e) => this.setState({ hscpercent: e.target.value })} />
                        </div>
                    </div>

                    <div className="second">
                        <div className="pMarks field">
                            <label for="pMarks">HSC Physics Marks</label><br />
                            <input type="text" min="0" max="100" name="pMarks" onChange={(e) => this.setState({ pmarks: e.target.value })} />
                        </div>
                        <div className="cMarks field">
                            <label for="cMarks">HSC Chemistry Marks</label><br />
                            <input type="text" min="0" max="100" name="cmarks" onChange={(e) => this.setState({ cmarks: e.target.value })} />
                        </div>
                        <div className="mMarks field">
                            <label for="mMarks">HSC Maths Marks</label><br />
                            <input type="text" min="0" max="100" name="mMarks" onChange={(e) => this.setState({ mmarks: e.target.value })} />
                        </div>
                        <div className="vmarks field">
                            <label for="vmarks">HSC Vocational Marks</label><br />
                            <input type="text" min="0" max="100" name="vmarks" onChange={(e) => this.setState({ vmarks: e.target.value })} />
                        </div>
                    </div>
                    <hr />
                    <div className="second">
                        <div className="mRoll field">
                            <label for="mRoll">MHTCET Roll No</label><br />
                            <input type="text" name="mRoll" onChange={(e) => this.setState({ mhcetrollno: e.target.value })} />
                        </div>
                        <div className="mApp field">
                            <label for="mApp">MHTCET Application No</label><br />
                            <input type="text" name="mApp" onChange={(e) => this.setState({ mhcetappno: e.target.value })} />
                        </div>
                        <div className="jRoll field">
                            <label for="jRoll">JEE Application</label><br />
                            <input type="text" name="jRoll" onChange={(e) => this.setState({ jeeroll: e.target.value })} />
                        </div>
                        <div className="jPer field">
                            <label for="jPer">JEE Percentile Score</label><br />
                            <input type="text" name="jPer" onChange={(e) => this.setState({ jeepercentile: e.target.value })} />
                        </div>
                    </div>

                    <hr />
                    <div className="third">
                        <div className="eName field">
                            <label for="eName">Entrance Exam Name</label><br />
                            <input type="text" name="eName" onChange={(e) => this.setState({ ename: e.target.value })} />
                        </div>
                        <div className="eScore field">
                            <label for="eScore">Entrance Exam Score</label><br />
                            <input type="text" name="eScore" onChange={(e) => this.setState({ escore: e.target.value })} />
                        </div>
                    </div>
                </form>

                <div className="btn">
                    <button><Link to="/Education/PresentCourse" style={styles.link} >Go Back</Link></button>
                    <button type='submit' onClick={this.handleSubmit}><Link to='/Upload' style={styles.link} >Next</Link></button>
                </div>


            </>


        );

    };
}

const styles = {

    link: {
        color: 'white',
        textDecoration: 'none',
    }
}