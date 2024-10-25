const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Config/dbconfig');
const Patient =  require('../models/Patient')
const Doctor =  require('../models/Doctor')

const Consultation = sequelize.define('Consultation', {
    patientId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Patients',
            key: 'id',
        },
    },
    doctorId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Doctors',
            key: 'id',
        },
    },
    status: {
        type: DataTypes.ENUM('Pending', 'Confirmed', 'Completed'),
        defaultValue: 'Pending',
    },
    imagePath: {
        type: DataTypes.STRING,
    },
});

Consultation.belongsTo(Patient, {foreignKey:'patientId'});
Consultation.belongsTo(Doctor, {foreignKey:'doctorId'});


module.exports = Consultation;
