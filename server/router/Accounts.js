const express = require('express')
const router = express.Router()
const {registerUser} = require("../services/Accounts.js_Services")

router.post("/register",registerUser)

module.exports = router;
