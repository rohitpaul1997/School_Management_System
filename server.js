// import packages
const express = require("express");
const db = require('./model/connect')

const parser = require("body-parser")


//importing modules
const applicationRoutes = require('./routers/application')
const registration = require("./routers/registration.route")

const app = express();

app.use(parser.json())
app.use('/application',applicationRoutes)
app.use('/registration',registration)

db.sequelize.sync();




const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
