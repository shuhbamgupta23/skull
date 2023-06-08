const mongoose = require("mongoose");

const personalDetailSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
    },
    pob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
    },
    nation: {
        type: String,
        required: true
    },
    religion: {
        type: String,
        required: true
    },
    caste: {
        type: String,
        required: true
    },
    scaste: {
        type: String,
        required: true
    },
    mini: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    lando: {
        type: String,
        required: true
    },
    add1: {
        type: String,
        required: true
    },
    add2: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pgphone: {
        type: String,
        required: true
    },
    pgemail: {
        type: String,
        required: true
    },
    marital: {
        type: String,
    },
    baccno: {
        type: String,
        required: true
    },
    bname: {
        type: String,
        required: true
    },
    aadhar: {
        type: String,
        required: true
    },
    lastcolatt: {
        type: String,
        required: true
    },

},
    {
        collection: "PersonalInfo",
    }
)
mongoose.model("PersonalInfo", personalDetailSchema)