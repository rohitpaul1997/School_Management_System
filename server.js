// import packages
const express = require("express");


//importing modules
const applicationRoutes = require('./routers/application')

const app = express();

app.use('/application',applicationRoutes)




const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
