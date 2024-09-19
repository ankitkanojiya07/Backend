const Detail = require('../models/detailModels');

exports.createDetail = async (req, res) => {
    try {
        const detail = await Detail.create(req.body);
        res.status(201).json({
            status: 'success',
            data: detail,
        });
    } catch (err) {
        console.error('Error creating detail:', err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
};
