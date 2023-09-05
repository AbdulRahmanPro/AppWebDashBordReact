const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const AccountsUser = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Please enter your username"],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
});

// Define the pre-save middleware on the schema
AccountsUser.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const Account = mongoose.model("Account", AccountsUser);

module.exports = Account;
