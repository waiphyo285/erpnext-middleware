const axios = require("axios");

const apiKey = "2a94ce58e056d75"; // not secrect
const erpnextBaseUrl = "http://128.199.233.173:8000";

const erpnextAuth = async (req, res, next) => {
  try {
    // Set API key in request headers for authentication
    axios.defaults.headers.common["Authorization"] = "Bearer " + apiKey;

    // // Extract lead information from Dialogflow request
    // const { first_name, status, company_name } =
    //   req.body.queryResult.parameters;

    // // Make a request to ERPNext API to create a new lead
    // await axios.post(erpnextBaseUrl + "/api/resource/Lead", {
    //   data: {
    //     first_name,
    //     status,
    //     company_name,
    //   },
    // });

    // Continue with the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error connecting to ERPNext:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { erpnextAuth };
