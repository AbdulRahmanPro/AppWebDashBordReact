const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const envtoken = process.env.TOKEN_SECRET;

const Account = require("../module/Accounts"); // تأكد من أن الاسم الصحيح للملف هو "Account.js"

const generateToken = (id) => {
  return jwt.sign({ id }, envtoken, {
    expiresIn: maxAge,
  });
};
const maxAge = 3 * 24 * 60 * 60;
const registerUser = async (req, res) => {
  const { email, username, password, name } = req.body;
  console.log(password);
  try {
    const existingUser = await Account.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "The account creation process failed. The email is used" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Account({
      email,
      username,
      password: hashedPassword,
      name,
    });
    await newUser.save();
    const token = generateToken(newUser._id)
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    return res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred during account creation" });
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const account = await Account.findOne({ email });

    if (account && (await bcrypt.compare(password, account.password))) {
      const token = generateToken(account._id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
      res.status(200).json({ message: "Login succeeded" });
    } else {
      res.status(401).json({ message: "Incorrect email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed" });
  }
};

module.exports = {
  Account,
  registerUser,
  generateToken,
  loginUser
};
