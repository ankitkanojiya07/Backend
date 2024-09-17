const Survey = require("../models/surveyModels");

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

function generateAccessToken(user) {

  return jwt.sign(user, JWT_SECRET, { expiresIn: '1h' }); 
}

exports.apiCreate = async (req, res) => {
  try {
    
    const check = await YourModel.findOne({
      where: {
        accountId: req.body.accountId,
      },
    });

    if (!check) {
      return res.status(404).json({
        status: "fail",
        message: "Account not found",
      });
    }

    if (check.api_key !== req.body.api_key) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid API key",
      });
    }

   
    
    res.status(201).json({
      status: "success",
      data: {
        CPI : "wait for this Functinality"
      },
    });
  } catch (err) {
    // Handle any unexpected errors
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "An error occurred",
    });
  }
};


exports.createSurvey = async (req, res) => {
  try {

    const survey = await Survey.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        id: survey.id,

      },
    });
  } catch (err) {
    console.error("Error creating survey:", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};  

exports.getAllSurveys = async (req, res) => {
  try {
    const surveys = await Survey.findAll();
    res.status(200).json({
      status: "success",
      data: surveys,
    });
  } catch (err) {
    console.error("Error fetching surveys:", err); // More descriptive logging
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};    

exports.getLiveSurveys = async (req, res) => {
  try {
    const surveys = await Survey.findAll({
      where: {
        status: "live",
      },
    });
    res.status(200).json({
      status: "success",
      data: surveys,
    });
  } catch (err) {
    console.error("Error fetching live surveys:", err); // More descriptive logging
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

exports.getFinishedSurveys = async (req, res) => {
  try {
    const surveys = await Survey.findAll({
      where: {
        status: "finished",
      },
    });
    res.status(200).json({
      status: "success",
      data: surveys,
    });
  } catch (err) {
    console.error("Error fetching finished surveys:", err); // More descriptive logging
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

exports.getCountryName = async (req, res) => {
  try {
    const countryId = req.params.id; // Get the country ID from the route parameter
    const country = await Survey.findOne({
      where: { id: countryId }, // Adjust 'id' field according to your database schema
    });

    if (country) {
      res.status(200).json({ countryName: country.country }); // Assuming 'name' is the column for the country name
    } else {
      res.status(404).json({ message: "Country not found" });
    }
  } catch (err) {
    console.log("Error fetching country:", err);
    res.status(500).json({ message: "Server error" });
  }
};
