const express = require('express');
const sequelize = require('./Config/dbconfig')
const cors = require('cors');
PORT = 8989

const app = express();
app.use(express.json());
app.use(cors()); 

const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const availabilityRoutes = require('./routes/availabilityRoutes');
const consultationRoutes = require('./routes/consultationRoutes');


app.use('/api/patient', patientRoutes);
app.use('/api/doctor', doctorRoutes);
app.use('/api/consultations', consultationRoutes);
app.use('/api/availability', availabilityRoutes);



sequelize.sync({force:true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
     });
}).catch(err => console.error('Unable to connect to the database:', err));