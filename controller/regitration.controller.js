var db = require('../model/connect')
const { sequelize } = require("../model/connect")

const registration = db.admission
const ad_payment = db.ad_payment


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
    // try{
    //     var pay_save = await ad_payment.create(ad_pay)
    // }
    // catch(err){
    //     console.log(err);
    // }
    // try{
    //     var update = await ad_payment.query("update admissions set payment_status=1 where user_id="+req.body.reg_id)
    // }
    // catch(err){
    //     console.log(err);
    // }
    try {
        const [result, meta] = await sequelize.query("select * from admissions where user_id=" + req.body.reg_id)
        const student_data = {
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
        console.log(student_data);
    }
    catch (err) {
        console.log(err);
    }
}


module.exports = { student, payment }