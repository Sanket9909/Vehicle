
module.exports = (app) => {

    const service = require('../controllers/services');
    const api = require("../constants/apiconstants")
    // Create a new services
    app.post(api.API_POST_service, service.create);

    // Retrieve all services
    app.get(api.API_GET_service, service.findAll);

    // Retrieve a single services with servicesId
    app.get(api.API_GET_serviceBYID, service.findOne);

    // Update a services with servicesId
    app.put(api.API_PUT_serviceBYID, service.update);

    // Delete a services with servicesId
    app.delete(api.API_DELETE_serviceBYID, service.delete);
}