const express = require('express'); // Import Express framework
const cors = require('cors');       // Import CORS middleware to enable Cross-Origin Resource Sharing
const app = express();              // Create an Express application instance

// Import route handlers for surveys and details
const surveyRoutes = require('./routes/surveyRoutes');
const detailRoutes = require('./routes/detailRoutes');

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Use Express JSON middleware to parse incoming JSON requests
app.use(express.json());

// Define routes for handling survey-related requests
app.use('/survey', surveyRoutes);

// Define routes for handling detail-related requests
app.use('/detail', detailRoutes);

// Export the app for use in other modules (e.g., server setup)
module.exports = app;
