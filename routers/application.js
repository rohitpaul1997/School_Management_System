const express = require("express");
const {appController} = require('../controller/appplicationController')
const {app_mid} = require("../middlewares/appplication.middle")


//creatinng router
const router = express.Router();


router.post('/',app_mid,appController)

module.exports  = router