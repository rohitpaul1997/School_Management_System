var db = require('../model/connect')

const registration = db.admission


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
    return res.send("okay")
}


module.exports = { student, payment }