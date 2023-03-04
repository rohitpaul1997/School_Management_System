
module.exports = (sequelize, Sequelize) => {
  const test = sequelize.define("test", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
    }})
return test;
  };