const mongoose = require("mongoose");

const BranchDetailSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        address: {type: String, required: true},
        IFSC: {type: String, required: true},
        MICR: {type: String, required: true},
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model("BranchDetail", BranchDetailSchema);