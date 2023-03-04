module.exports = (sequelize, Sequelize) => {
  const application = sequelize.define("application", {
    A_year: {
      type: Sequelize.INTEGER,
    },
    A_id: {
      type: Sequelize.INTEGER,
    },
    A_Student_name: {
      type: Sequelize.STRING,
    },
    A_St_Adress: {
      type: Sequelize.STRING,
    },
    A_St_Phone: {
      type: Sequelize.INTEGER,
    },
    A_St_Email: {
      type: Sequelize.STRING,
    },
    A_St_Aadhaar: {
      type: Sequelize.STRING,
    },
    A_St_Father: {
      type: Sequelize.STRING,
    },
    A_St_Mother: {
      type: Sequelize.STRING,
    },
    A_St_Dob: {
      type: Sequelize.STRING,
    },
  });
  return application;
};
