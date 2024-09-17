const express = require('express');
const cors = require('cors');
const app = express();

const surveyRoutes = require('./routes/surveyRoutes');
const detailRoutes = require('./routes/detailRoutes');

app.use(cors());
app.use(express.json());
// #ideal
app.use('/survey', surveyRoutes);
app.use('/detail', detailRoutes);

module.exports = app;

