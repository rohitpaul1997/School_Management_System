const { sequelize } = require("../model/connect")


const student_mid = async function (req, res, next) {
    const [result, meta] = await sequelize.query("select * from admissions where St_Aadhaar=" + req.body.adhar)
    if (result[0] == undefined) {
        next()
    }
    else {
        return res.send("user already exits")
    }
}


const payment_mid = async function (req, res, next) {
    const [result, meta] = await sequelize.query("select * from admissions where user_id=" + req.body.reg_id)
    if (result[0] == undefined) {
        return res.send("no user found")
    }
    else {
        next()
    }
}

module.exports = { student_mid, payment_mid }