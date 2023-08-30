const mongoose = require("mongoose")
const {isEmail} = require("validator")



const AccountsUser = new mongoose.Schema({
    email:{
        type:String,
        required:[true, "Please enter your email"],
        unique: true
    },
    username:{
        type:String,
        required:[true,"Please enter your username"],
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
    },
    name:{
        type:String,
        required:[true,"Please enter your name"],
    }
})



const Account = mongoose.model('Account', AccountsUser)

module.exports = Account
