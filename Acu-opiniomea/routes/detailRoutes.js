const express = require('express');
const router = express.Router();
const { createDetail } = require('../controllers/detailController');

router.post('/create', createDetail);

module.exports = router;
