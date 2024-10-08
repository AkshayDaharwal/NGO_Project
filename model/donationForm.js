const mongoose = require("mongoose")
// const { schema } = require("./userSchema")

const donationSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require: true,
        unique:true
    },
    phone: {
        type: Number,
        require:true
    },
    amount: {
        type: Number,
        require:true
    },
    donateto: {
        type: String,
        require:true
    },
    message: {
        type: String,
        reqire:true
    }
    
})

module.exports = mongoose.model("Donation",donationSchema)