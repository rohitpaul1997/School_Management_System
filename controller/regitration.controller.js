var db = require('../model/connect')
const { sequelize } = require("../model/connect")

const registration = db.admission
const ad_payment = db.ad_payment
const students = db.students


const student = async function (req, res) {
    const phone = Math.floor((Math.random() * 1000000000) + 1);
    const adhar = Math.floor((Math.random() * 1000000000) + 1)
    const student_reg = {
        Student_name: req.body.name,
        St_Adress: req.body.address,
        // St_Phone : req.body.phone,
        St_Phone: phone,
        St_Email: req.body.email,
        // St_Aadhaar : req.body.adhar,
        St_Aadhaar: adhar,
        St_Father: req.body.father,
        St_Mother: req.body.mother,
        St_Dob: req.body.dob,
        St_class: req.body.class
    }
    try {
        var save = await registration.create(student_reg)
        res.send("the data has been saved")
    }
    catch (err) {
        console.log(err);
    }
}


const payment = async function (req, res) {
    const ad_pay = {
        reg_id: req.body.reg_id,
        amount: req.body.amount
    }
    try {
        var pay_save = await ad_payment.create(ad_pay)
    }
    catch (err) {
        console.log(err);
    }
    try {
        var update = await ad_payment.query("update admissions set payment_status=1 where user_id=" + req.body.reg_id)
        const [result, meta] = await sequelize.query("select * from admissions where user_id=" + req.body.reg_id)
        const [result1, meta1] = await sequelize.query("select class, count(*) from students group by class")
        var roll_count = 0
        for (var i = 0; i < result1.length; i++) {
            if (result1[i].class == result[0].St_class) {
                roll_count = result1[i]['count(*)']
            }
        }
        if (result1[0] == undefined) {
            rolls = 1
        }
        else {
            rolls = roll_count + 1
        }
        const student_data = {
            roll: rolls,
            name: result[0].Student_name,
            Adress: result[0].St_Adress,
            Phone: result[0].St_Phone,
            Email: result[0].St_Email,
            Aadhaar: result[0].St_Aadhaar,
            Father: result[0].St_Father,
            Mother: result[0].St_Mother,
            Dob: result[0].St_Dob,
            class: result[0].St_class
        }
        var stud_save = await students.create(student_data)
        res.send("Payement is done successfully")
    }
    catch (err) {
        console.log(err);
    }
}


module.exports = { student, payment }