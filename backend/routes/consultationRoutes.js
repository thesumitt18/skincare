const express = require('express');
const { createConsultation, getConsultationsByPatient, updateConsultationStatus } = require('../controller/consultationController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/multer');
const router = express.Router();

// Request consultation
router.post('/create', authMiddleware,upload.single('image'), createConsultation);

// Get consultations 
router.get('/:patientId', authMiddleware, getConsultationsByPatient);

//update
router.put('/:id/status', authMiddleware, updateConsultationStatus);

module.exports = router;
