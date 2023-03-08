module.exports = (sequelize, Sequelize) => {
    const application = sequelize.define("admission", {
        user_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Student_name: {
            type: Sequelize.STRING,
        },
        St_Adress: {
            type: Sequelize.STRING,
        },
        St_Phone: {
            type: Sequelize.INTEGER,
        },
        St_Email: {
            type: Sequelize.STRING,
        },
        St_Aadhaar: {
            type: Sequelize.STRING,
        },
        St_Father: {
            type: Sequelize.STRING,
        },
        St_Mother: {
            type: Sequelize.STRING,
        },
        St_Dob: {
            type: Sequelize.STRING,
        },
        St_class: {
            type: Sequelize.INTEGER
        },
        payment_status: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
    return application;
};
