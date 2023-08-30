const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const envtoken = process.env.TOKEN_SECRET;
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  email: String,
  username: String,
  password: String,
  name: String,
});

const generateToken = (id) => {
  return jwt.sign({ id }, envtoken, {
    expiresIn: maxAge,
  });
};
const Account = mongoose.model('Account', accountSchema);

const maxAge = 3 * 24 * 60 * 60;
const registerUser = async (req, res) => {
  const { email, username, password, name } = req.body;
  console.log(password);
  try {
    const existingUser = await Account.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "The account creation process failed. The email is used" });
    }
    const hashedPassword = await bcrypt.hash(password, 10); // تشفير كلمة السر باستخدام bcrypt
    const newUser = new Account({
      email,
      username,
      password: hashedPassword, // استخدام كلمة السر المشفرة
      name,
    });
    await newUser.save();
    return res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    console.error(error); // تسجيل الخطأ في السجلات لمعرفة التفاصيل الدقيقة
    return res.status(500).json({ message: "An error occurred during account creation" });
  }
};

module.exports = {
  Account,
  registerUser,
  generateToken,
};
