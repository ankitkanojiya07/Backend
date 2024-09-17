const express = require('express');
const cors = require('cors');
const app = express();

const surveyRoutes = require('./routes/surveyRoutes');
const detailRoutes = require('./routes/detailRoutes');

app.use(cors());
app.use(express.json());

app.use('/survey', surveyRoutes);
app.use('/detail', detailRoutes);
// app.use('/api', )

module.exports = app;

