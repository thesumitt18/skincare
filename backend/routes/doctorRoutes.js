const express = require('express');
// const upload = require('../middleware/multer');
const { registerDoctor, loginDoctor } = require('../controller/doctorController');
const router = express.Router();

router.post('/register', registerDoctor);

router.post('/login', loginDoctor);

module.exports = router;
