const mongoose = require("mongoose")
const {isEmail} = require("validator")
const bcrpyt = require('bcrpyt')


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

AccountsUser.pre("save", async(next)=>{
    const salt = await bcrpyt.genSalt(10)
    this.password = await bcrpyt.hash(this.password,salt)
    next()
})

const Accounts = mongoose.model('Accounts', AccountsUser)

module.exports = Accounts
