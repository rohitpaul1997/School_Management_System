
module.exports = (sequelize, Sequelize) => {
    const add_payment = sequelize.define("admission_payment",{
        payment_id: {
            type : Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        reg_id: {
            type : Sequelize.INTEGER
        },
        amount : {
            type : Sequelize.INTEGER
        }
    })
    return add_payment
}

