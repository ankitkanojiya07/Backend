const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');

router.get('/', surveyController.getAllSurveys);
router.get('/language/:id', surveyController.getCountryName);
router.get('/live', surveyController.getLiveSurveys);
router.get('/finished', surveyController.getFinishedSurveys);
router.post('/create', surveyController.createSurvey);       
router.put('/update/:id', surveyController.updateSurvey);  


module.exports = router;
