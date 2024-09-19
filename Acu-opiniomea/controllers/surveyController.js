const Survey = require("../models/surveyModels");
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

function generateAccessToken(user) {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
}

exports.apiCreate = async (req, res) => {
  try {
    const check = await YourModel.findOne({
      where: { accountId: req.body.accountId },
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

    const {
      SurveyName, SurveyStatusCode, CountryLanguageID, IndustryID, StudyTypeID,
      ClientCPI, ClientSurveyLiveURL, TestRedirectURLIsActive, Quota
    } = req.body;

    if (!SurveyName || !Quota || !TestRedirectURLIsActive || !ClientSurveyLiveURL) {
      return res.status(400).json({ message: 'Please fill all the details' });
    }

    res.status(201).json({
      status: "success",
      data: { CPI: "wait for this Functinality" },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "An error occurred",
    });
  }
};

exports.updateSurvey = async (req, res) => {
  try {
    const { id } = req.params;
    const survey = await Survey.findByPk(id);

    if (!survey) {
      return res.status(404).json({
        status: "error",
        message: "Survey not found",
      });
    }

    await survey.update(req.body);

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
    console.error("Error updating survey:", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

exports.createSurvey = async (req, res) => {
  try {
    const survey = await Survey.create(req.body);

    res.status(201).json({
      status: "success",
      data: { id: survey.id },
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
    console.error("Error fetching surveys:", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

exports.getLiveSurveys = async (req, res) => {
  try {
    const surveys = await Survey.findAll({
      where: { status: "live" },
    });

    res.status(200).json({
      status: "success",
      data: surveys,
    });
  } catch (err) {
    console.error("Error fetching live surveys:", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

exports.getFinishedSurveys = async (req, res) => {
  try {
    const surveys = await Survey.findAll({
      where: { status: "finished" },
    });

    res.status(200).json({
      status: "success",
      data: surveys,
    });
  } catch (err) {
    console.error("Error fetching finished surveys:", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

exports.getCountryName = async (req, res) => {
  try {
    const countryId = req.params.id;
    const country = await Survey.findOne({
      where: { id: countryId },
    });

    if (country) {
      res.status(200).json({ countryName: country.country });
    } else {
      res.status(404).json({ message: "Country not found" });
    }
  } catch (err) {
    console.log("Error fetching country:", err);
    res.status(500).json({ message: "Server error" });
  }
};
