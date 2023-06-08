const mongoose = require("mongoose");

const addressDetailsSchema = new mongoose.Schema({
    flatno: {
        type: String,
        required: true,
    },
    bldgno: {
        type: String,
        required: true
    },
    bldg: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },

},
    {
        collection: "AddressInfo",
    }
)
mongoose.model("AddressInfo", addressDetailsSchema)