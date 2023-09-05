const express = require('express')
const router = express.Router()
const {AccountUsersAll, AccountDelete ,PutAccount,authorization} = require("../services/Admin_Services.js")

router.put("/Edit/:userId",PutAccount)
router.delete("/Delete/:userId",AccountDelete)
router.get("/Accounts",AccountUsersAll)
router.get("/protection",authorization)

module.exports = router;
