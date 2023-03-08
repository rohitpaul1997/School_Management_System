
module.exports = (sequelize, Sequelize) => {
    const student = sequelize.define("students",{
        reg_num : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        roll : {
            type : Sequelize.INTEGER
        },
        name : {
            type : Sequelize.STRING
        },
        Adress: {
            type: Sequelize.STRING,
        },
        Phone: {
            type: Sequelize.INTEGER,
        },
        Email: {
            type: Sequelize.STRING,
        },
        Aadhaar: {
            type: Sequelize.STRING,
        },
        Father: {
            type: Sequelize.STRING,
        },
        Mother: {
            type: Sequelize.STRING,
        },
        Dob: {
            type: Sequelize.STRING,
        },
        class: {
            type: Sequelize.INTEGER
        },
        password : {
            type : Sequelize.STRING,
            defaultValue: "12345678"
        }
    });
    return student
}