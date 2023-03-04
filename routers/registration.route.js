const express = require("express");
const {student} = require("../controller/regitration.controller")


const app = express()


app.post("/student",student)


module.exports = app