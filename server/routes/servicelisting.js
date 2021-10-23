module.exports = (app) => {
    const servicelisting = require('../controllers/servicelisting');
    const api = require("../constants/apiconstants")

    // Retrieve all servicelist
    app.get(api.API_GET_servicelisting, servicelisting.findAll);
}