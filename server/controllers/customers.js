const Customer = require('../modal/customer');


// Create and Save a new customer
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.cust_name) {
        return res.status(400).send({
            message: "customer name content can not be empty"
        });
    }

    // Create a customer name
    const customer = new Customer({
        cust_name: req.body.cust_name,
        mobile: req.body.mobile,
        email: req.body.email,
        make: req.body.make,
        vehicle_number:  req.body.vehicle_number,
        createdDate: new Date(),
        changeDate: new Date()
    });



    // Save customer in the database
    await customer.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the customer list."
            });
        });
};


// Retrieve and return all customer from the database.
exports.findAll = async (req, res) => {
    await Customer.find()
        .then(customer => {
            res.send(customer);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customer list."
            });
        });
};

// Find a single customer with a customerId
exports.findOne = async (req, res) => {
    const customerId = req.params.customerId;
    await Customer.findById(customerId)
        .then(customer => {
            if (!customer) {
                return res.status(404).send({
                    message: "customer not found with id " + customerId
                });
            }
            res.send(customer);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "customer not found with id " + customerId
                });
            }
            return res.status(500).send({
                message: "Error retrieving customer with id " + customerId
            });
        });
};

// Update a customer identified by the customerId in the request
exports.update = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const customerId = req.params.customerId;
    // Find customer and update it with the request body
    await Customer.findByIdAndUpdate(customerId, req.body, {useFindAndModify: false})
       
        .then(customer => {
            if (!customer) {
                return res.status(404).send({
                    message: "customer not found with id " + req.params.customerId
                });
            }
            res.send(customer);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "customer not found with id " + req.params.customerId
                });
            }
            return res.status(500).send({
                message: "Error updating customer with id " + req.params.customerId
            });
        });
};

// Delete a customer with the specified customerId in the request
exports.delete = async (req, res) => {
    const customerId = req.params.customerId;
    await Customer.findByIdAndRemove(customerId)
        .then(customer => {
            if (!customer) {
                return res.status(404).send({
                    message: "customer not found with id " + customerId
                });
            }
            res.send({ message: "customer deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "customer not found with id " + customerId
                });
            }
            return res.status(500).send({
                message: "Could not delete customer with id " + customerId
            });
        });
};