const  Patient  = require('../models/Patient'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Register a new patient
const registerPatient = async (req, res) => {
    const { name, email, password, phone } = req.body;

    try {

        const existingpatient = await Patient.findOne({ where: { email } });
        if(existingpatient){
            return res.status(409).json({message:`User already exists`})
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        // console.log(hashedPassword);
    
        const newPatient = await Patient.create({ name, email, password: hashedPassword,phone }); 
        res.status(201).json({message: `New Patient Registered` ,newPatient});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login a patient
const loginPatient = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    
    const patient = await Patient.findOne({ where: { email } });

    if (!patient) {
        return res.status(404).json({ message: 'Patient not found.' });
    }
    console.log(patient.password);
    const isMatch = await bcrypt.compare(password, patient.password);
    console.log(isMatch);
    
    // console.log(isMatch);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password.' });
    }

    const token = jwt.sign({ id: patient.id }, 'sumit', { expiresIn: '1h' });
    res.status(200).json({ token });
};


module.exports = {
    registerPatient,
    loginPatient
};
