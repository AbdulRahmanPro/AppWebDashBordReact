const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const envtoken = process.env.TOKEN_SECRET;
const Account = require("../module/Accounts"); // تأكد من أن الاسم الصحيح للملف هو "Account.js"

module.exports.PutAccount = async (req, res, next) => {
    const { name, email, username, password } = req.body;
    console.log(req.body)
    const id = req.params.userId;
    try {
        const newData = {
            name: name,
            email: email,
            username: username,
            password: password
        };

        const updatedAccount = await Account.findByIdAndUpdate(id, newData, { new: true });

        if (!updatedAccount) {
            return res.status(404).json({ message: "Account not found" });
        }

        res.status(200).json({ message: "Data modification succeeded", updatedAccount });
    } catch (error) {
        // إرسال الخطأ إلى وحدة التحكم في الأخطاء (يفترض أن تكون معالجة هناك)
        next(error);
    }
};


module.exports.AccountDelete = (req, res) => {
    const _id = req.params.userId;
    try {
        Account.findByIdAndDelete({ _id }).then((response) => {
            if (response) {
                res.status(201).json({ message: "The user has been deleted" })
            } else {
                res.status(401).json({ message: "We did not find the user in the database" })

            }
        })
    } catch (error) {
        res.status(409).json({ message: "There was an error that we could not delete the user" })
    }
}


module.exports.AccountUsersAll = async (req, res) => {
    try {
        const AccountUser = await Account.find({})
        console.log(AccountUser)
        res.status(201).json({ AccountUser })
    } catch (error) {
        res.status(400).json({ error })
    }
}


module.exports.authorization = async (req, res) => {
    const token = req.headers.authorization;
    try {
      if (token && token.startsWith('Bearer ')) {
        const toke = token.slice(7);
        const decodedToken = jwt.verify(toke, envtoken);
        if (decodedToken) {
          const _id = decodedToken.id;
          const Verify_Token = await Account.findById({ _id });
          res.status(201).json({ message: "You are authorized to enter", permit: true });
          console.log(Verify_Token);
        } else {
          res.status(999).json({ message: "Your token is fake", permit: false });
        }
      }
    } catch (error) {
      res.status(409).json({ message: "Unauthorized", permit: false });
    }
  };
  