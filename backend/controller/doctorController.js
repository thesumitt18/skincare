const Doctor = require('../models/Doctor');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');

// Multer setup for file uploads
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Append timestamp to the filename
    },
});
const upload = multer({ storage });

const registerDoctor = async (req, res) => {
    const { name, email, password, specialization } = req.body;
    const profilePicture = req.file ? req.file.path : null; // Get the file path from the uploaded file

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newDoctor = await Doctor.create({
            name,
            email,
            password: hashedPassword,
            specialization,
            profilePicture, // Save the image path in the database
        });
        res.status(201).json({ message: `New doctor added`, newDoctor });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login a doctor
const loginDoctor = async (req, res) => {
    const { email, password } = req.body;
    const doctor = await Doctor.findOne({ where: { email } });

    if (!doctor) {
        return res.status(404).json({ message: 'Doctor not found.' });
    }

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password.' });
    }

    const token = jwt.sign({ id: doctor.id }, 'sumit', { expiresIn: '1h' });
    res.json({ token });
};

module.exports = {
    registerDoctor: upload.single('profilePicture'), 
    loginDoctor,
};
