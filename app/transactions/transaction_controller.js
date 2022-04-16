const { Http } = require("@status/codes");
const axios = require("axios");
const { BILLING_SERVICE_URL } = require("../../config/constants");
const { handleAxiosError } = require("../../utilities/helper");

exports.fund = async (req, res, next) => {
    try {
        console.log("Processing...");
        // Create the transaction with status pending
        // Publish the request to the worker service
        // wait for response in webhook
        
        res.status(Http.Ok).json({ message: "processing..." });
    } catch (err) {
        next(handleAxiosError(err))
    }
}