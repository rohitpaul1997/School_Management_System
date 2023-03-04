const db = require("../model/connect");
const { sequelize } = require("../model/connect");

const application = db.apply;

const app_mid = async function (req, res, next) {
    const adhar = req.body.addhar
    const [result,meta] = await sequelize.query("select * from applications where A_St_Aadhaar="+adhar)
    console.log(result);
    if(result[0]==undefined){
       next()
    }
    else{
        return res.send(result)
    }
};

module.exports = { app_mid };
