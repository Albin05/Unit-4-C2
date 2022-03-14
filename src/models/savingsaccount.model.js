const mongoose = require("mongoose");

const SavingsAccountSchema = new mongoose.Schema(
    {
        account_number: {type: Number, required: true, unique: true},
        balance : {type: Number, required: true},
        interestRate: {type: Number, required: true},
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model("SavingsAccount", SavingsAccountSchema);