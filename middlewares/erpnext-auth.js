const axios = require("axios");

const apiKey = "2a94ce58e056d75";
const secretKey = "5479b211ceabbc1";
const erpNextURL = "http://128.199.233.173:8000";

const erpnextAuth = async (req, res, next) => {
  try {
    const intent = req.body.queryResult.intent.displayName;

    if (intent === "CreateLeadIntent") {
      const leadData = {
        doctype: "Lead",
        first_name: req.body.queryResult.parameters.first_name,
        company_name: req.body.queryResult.parameters.company_name,
        status: req.body.queryResult.parameters.status,
      };

      const response = await axios.post(erpNextURL, leadData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}:${secretKey}`,
        },
      });

      return res.json({
        fulfillmentText: `Lead created successfully. Lead ID: ${response.data.data.name}`,
      });
    } else {
      return res.json({
        fulfillmentText: "Unhandled intent",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { erpnextAuth };
