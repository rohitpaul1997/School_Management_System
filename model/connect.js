const dbConfig = require('../config/dbConn');

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.test = require('./test')(sequelize, Sequelize);
db.apply = require('./application')(sequelize,Sequelize)
db.admission = require("./admission.model")(sequelize,Sequelize)
db.ad_payment = require("./admission_payment.model")(sequelize, Sequelize)
db.students = require("./student.model")(sequelize, Sequelize)

module.exports = db;