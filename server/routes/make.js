
module.exports = (app) => {

    const make = require('../controllers/make');
    const api = require("../constants/apiconstants")
  //  const validToken = require("../middleware/auth")
    // Create a new customer
   app.post(api.API_POST_MAKE, make.create);

    // Retrieve all customer
    app.get(api.API_GET_MAKE, make.findAll);

    // Retrieve a single customer with customerId
  //  app.get(api.API_GET_customerBYID, customer.findOne);

    // Update a customer with customerId
   // app.put(api.API_PUT_customerBYID, customer.update);

    // Delete a customer with customerId
  //  app.delete(api.API_DELETE_customerBYID, customer.delete);
}