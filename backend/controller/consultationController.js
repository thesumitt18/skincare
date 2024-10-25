const Consultation = require('../models/consultation');

// Request a consultation
const createConsultation = async (req, res) => {

    try {
        const { patientId, doctorId } = req.body;
        const imagePath = req.body.path
        const consultation = await Consultation.create({ patientId, doctorId, imagePath });
        res.status(200).json({message: `new appointment created` ,consultation});
    } catch (error) {
        res.status(400).json(err);
    }
};

//get consultation
const getConsultationsByPatient = async (req, res) => {
    const { patientId } = req.params;
    try {
        const consultations = await Consultation.findAll({ where: { patientId } });
        if(consultations == ''){
            res.status(404).json({message:`No appointment available for patientId`})
        }
        res.status(200).json({message: `Currently available appointments are`, consultations});
    } catch (error) {
        res.status(500).json(error);
    }
};

//update consultation
const updateConsultationStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const consultation = await Consultation.update({ status }, { where: { id } });
        res.status(200).json({message: `status updated sucessfully`});
    } catch (error) {
        res.status(500).json(error);
    }
};


module.exports = {
    createConsultation,
    getConsultationsByPatient,
    updateConsultationStatus,
};
