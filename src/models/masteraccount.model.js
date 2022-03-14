const mongoose = require("mongoose");

const MasterAccountSchema = new mongoose.Schema(
    {
        balance : {type: Number, required: true},
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model("MasterAccount", MasterAccountSchema);