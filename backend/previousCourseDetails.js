const mongoose = require("mongoose");

const previousCourseDetailsSchema = new mongoose.Schema({
    sscyear: {
        type: String,
        required: true
    },
    sscseatno: {
        type: String,
        required: true
    },
    sscboard: {
        type: String,
        required: true
    },
    sscmarks: {
        type: String,
        required: true
    },
    sscpercent: {
        type: String,
        required: true
    },
    hscyear: {
        type: String,
        required: true
    },
    hscseatno: {
        type: String,
        required: true
    },
    hscboard: {
        type: String,
        required: true
    },
    hscmarks: {
        type: String,
        required: true
    },
    hscpercent: {
        type: String,
        required: true
    },
    pmarks: {
        type: String,
        required: true
    },
    cmarks: {
        type: String,
        required: true
    },
    mmarks: {
        type: String,
        required: true
    },
    vmarks: {
        type: String,
        required: true
    },
    mhcetrollno: {
        type: String,
        required: true
    },
    mhcetappno: {
        type: String,
        required: true
    },
    jeeroll: {
        type: String,
        required: true
    },
    jeepercentile: {
        type: String,
        required: true
    },
    ename: {
        type: String,
        required: true
    },
    escore: {
        type: String,
        required: true
    },

},
    {
        collection: "PrevCourseInfo",
    }
)
mongoose.model("PrevCourseInfo", previousCourseDetailsSchema)