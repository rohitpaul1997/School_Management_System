const express = require("express");
const { student, payment } = require("../controller/regitration.controller")
const { student_mid, payment_mid } = require("../middlewares/registration.middle")


const app = express()


app.post("/student", student_mid, student)
app.post("/payment", payment_mid, payment)


module.exports = app