// Import the Survey model from the 'surveyModels' file
const Survey = require("../models/surveyModels");

// Define a secret key for JWT signing (use environment variable or fallback to a default)
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Function to generate a JWT token for a user with a 1-hour expiration
function generateAccessToken(user) {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
}

// Controller function to handle the creation of a new survey through an API request
exports.apiCreate = async (req, res) => {
  try {
    // Check if the account exists based on the accountId provided in the request body
    const check = await YourModel.findOne({
      where: { accountId: req.body.accountId },
    });

    // If no account is found, return a 404 error
    if (!check) {
      return res.status(404).json({
        status: "fail",
        message: "Account not found",
      });
    }

    // Validate the API key
    if (check.api_key !== req.body.api_key) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid API key",
      });
    }

    // Destructure input data from the request body
    const {
      SurveyName, SurveyStatusCode, CountryLanguageID, IndustryID, StudyTypeID,
      ClientCPI, ClientSurveyLiveURL, TestRedirectURLIsActive, Quota
    } = req.body;

    // Validate required fields and return a 400 error if any are missing
    if (!SurveyName || !Quota || !TestRedirectURLIsActive || !ClientSurveyLiveURL) {
      return res.status(400).json({ message: 'Please fill all the details' });
    }

    // Respond with a 201 status (Created) and a placeholder message for the CPI field
    res.status(201).json({
      status: "success",
      data: { CPI: "wait for this Functinality" },
    });
  } catch (err) {
    // Log any errors and respond with a 500 status (Internal Server Error)
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "An error occurred",
    });
  }
};

// Controller function to handle updating an existing survey by ID
exports.updateSurvey = async (req, res) => {
  try {
    // Get the survey ID from the URL parameters
    const { id } = req.params;

    // Find the survey by its ID
    const survey = await Survey.findByPk(id);

    // If no survey is found, return a 404 error
    if (!survey) {
      return res.status(404).json({
        status: "error",
        message: "Survey not found",
      });
    }

    // Update the survey with the data from the request body
    await survey.update(req.body);

    // Respond with a 200 status (OK) and the updated survey data
    res.status(200).json({
      status: "success",
      data: {
        id: survey.id,
        SurveyStatusCode: survey.SurveyStatusCode,
        ClientCPI: survey.ClientCPI,
        ClientSurveyLiveURL: survey.ClientSurveyLiveURL,
        TestRedirectURL: survey.TestRedirectURL,
        IsActive: survey.IsActive,
        Quota: survey.Quota,
        QuotaCalculationTypeID: survey.QuotaCalculationTypeID,
        CollectsPII: survey.CollectsPII,
      },
    });
  } catch (err) {
    // Log any errors and respond with a 500 status (Internal Server Error)
    console.error("Error updating survey:", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

// Controller function to handle creating a new survey
exports.createSurvey = async (req, res) => {
  try {
    // Create a new survey using the data from the request body
    const survey = await Survey.create(req.body);

    // Respond with a 201 status (Created) and the ID of the newly created survey
    res.status(201).json({
      status: "success",
      data: { id: survey.id },
    });
  } catch (err) {
    // Log any errors and respond with a 500 status (Internal Server Error)
    console.error("Error creating survey:", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

// Controller function to retrieve all surveys
exports.getAllSurveys = async (req, res) => {
  try {
    // Fetch all surveys from the database
    const surveys = await Survey.findAll();

    // Respond with a 200 status (OK) and the list of surveys
    res.status(200).json({
      status: "success",
      data: surveys,
    });
  } catch (err) {
    // Log any errors and respond with a 500 status (Internal Server Error)
    console.error("Error fetching surveys:", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

// Controller function to retrieve all live surveys
exports.getLiveSurveys = async (req, res) => {
  try {
    // Fetch surveys with a status of "live"
    const surveys = await Survey.findAll({
      where: { status: "live" },
    });

    // Respond with a 200 status (OK) and the list of live surveys
    res.status(200).json({
      status: "success",
      data: surveys,
    });
  } catch (err) {
    // Log any errors and respond with a 500 status (Internal Server Error)
    console.error("Error fetching live surveys:", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

// Controller function to retrieve all finished surveys
exports.getFinishedSurveys = async (req, res) => {
  try {
    // Fetch surveys with a status of "finished"
    const surveys = await Survey.findAll({
      where: { status: "finished" },
    });

    // Respond with a 200 status (OK) and the list of finished surveys
    res.status(200).json({
      status: "success",
      data: surveys,
    });
  } catch (err) {
    // Log any errors and respond with a 500 status (Internal Server Error)
    console.error("Error fetching finished surveys:", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

// Controller function to retrieve the name of a country by ID
exports.getCountryName = async (req, res) => {
  try {
    // Get the country ID from the route parameter
    const countryId = req.params.id;

    // Find the country by its ID
    const country = await Survey.findOne({
      where: { id: countryId },
    });

    // If country is found, respond with its name
    if (country) {
      res.status(200).json({ countryName: country.country });
    } else {
      // If country is not found, return a 404 error
      res.status(404).json({ message: "Country not found" });
    }
  } catch (err) {
    // Log any errors and respond with a 500 status (Internal Server Error)
    console.log("Error fetching country:", err);
    res.status(500).json({ message: "Server error" });
  }
};
