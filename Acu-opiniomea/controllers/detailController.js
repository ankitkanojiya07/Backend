// Import the Detail model from the 'detailModels' file
const Detail = require('../models/detailModels');

// Define the 'createDetail' function to handle the creation of a new detail record
exports.createDetail = async (req, res) => {
    try {
        // Attempt to create a new detail record using data from the request body
        const detail = await Detail.create(req.body);

        // If successful, respond with a 201 status (Created) and the created detail data
        res.status(201).json({
            status: 'success',
            data: detail,
        });
    } catch (err) {
        // Log any errors that occur during the creation process for debugging purposes
        console.error('Error creating detail:', err);

        // Respond with a 500 status (Internal Server Error) and an error message
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
};
