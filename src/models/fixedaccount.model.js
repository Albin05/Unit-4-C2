const mongoose = require("mongoose");

const FixedAccountSchema = new mongoose.Schema(
    {
        account_number: {type: Number, required: true, unique: true},
        balance : {type: Number, required: true},
        interestRate: {type: Number, required: true},
        startDate: {type: Date, required: true},
        maturityDate: {type: Date, required: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model("FixedAccount", FixedAccountSchema);