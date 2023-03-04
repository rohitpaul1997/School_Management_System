// const {sqlConnection} = require("../config/dbConn");
var db = require('../model/connect')
const { sequelize } = require("../model/connect");

const test = db.test
const application = db.apply

const appController = async function (req, res) {
  const date = new Date()
  var day = date.getDate()
  var month = date.getMonth() + 1
  var year = date.getFullYear()
  var date_st = Number("" + day + month + year)


  const [result, meta] = await sequelize.query("select A_id from applications where A_year=" + date_st + " order by A_id desc limit 1")
  console.log(result[0]['A_id']);
  if (result[0] == undefined) {
    id = 1
  } else {
    id = result[0]['A_id']+1
  }
  const A_form_data = {
    A_year: date_st,
    A_id: id,
    A_Student_name: req.body.name,
    A_St_Adress: req.body.address,
    A_St_Phone: req.body.phone,
    A_St_Email: req.body.email,
    A_St_Aadhaar: req.body.addhar,
    A_St_Father: req.body.father,
    A_St_Mother: req.body.mother,
    A_St_Dob: req.body.dob
  }
  console.log(A_form_data);
  try{
    var save = await application.create(A_form_data)
    return res.send("the data has been saved")
  }
  catch(err){
    console.log(err);
  }
  
  // test.create(testing)
  //   .then(data => {
  //     res.send(data);
  //     // res.redirect('/login')
  //     // return next();
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message
  //     });
  //   });
}


module.exports = { appController }