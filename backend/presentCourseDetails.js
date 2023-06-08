const mongoose = require("mongoose");

const presentCourseDetailsSchema = new mongoose.Schema({
    studid: {
        type: String,
        required: true
    },
    selectedprog: {
        type: String,
    },
    seattype: {
        type: String,
    },
    grno: {
        type: String,
        required: true
    },
    defstat: {
        type: String,
        required: true
    },
    handicap: {
        type: String,
    },

},
    {
        collection: "PresCourseInfo",
    }
)
mongoose.model("PresCourseInfo", presentCourseDetailsSchema)