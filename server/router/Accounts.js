const express = require('express')
const router = express.Router()
const {registerUser,loginUser} = require("../services/Accounts.js_Services")

router.post("/register",registerUser)
router.post("/login" , loginUser)
module.exports = router;
