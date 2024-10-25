const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Config/dbconfig');
const bcrypt = require('bcrypt');

const Doctor = sequelize.define('Doctor', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    specialization: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profilePicture: {
        type: DataTypes.STRING, // This will store the path to the profile picture
        allowNull: true,
    },
});

module.exports = Doctor;
